---
sidebar_position: 2
---

# YOLO11 分类
该模型的功能是对图片进行分类，输出这张图片有多大概率是什么物品。

![result](./img/example_cls.jpg)


## 模型文件准备
我们提供的程序包里会有一个名为`yolo11n-cls.nb`的文件，这就是在npu上运行的模型文件。

该文件是使用从[ultralytics release(v8.3.0)](https://github.com/ultralytics/assets/releases/tag/v8.3.0)下载的`yolo11n-cls.pt`文件，按照以下步骤,在电脑端进行格式转换而得到的。其他的smlx尺寸模型也可参照以下步骤来转换。

yolo11官方提供的模型自带1000种物品分类。

### 所需工具
需要使用安装了linux系统的电脑，或是在windows上使用虚拟机安装linux系统。开发板上不能运行模型格式转换工具
- [netron.app](https://netron.app/) 是一个网页工具，可用于查看模型的结构
- 需要下载一份 yolo11 的源码，用来将yolo11专用的模型文件转为通用的onnx模型文件
    ```shell
    git clone https://github.com/walnutpi/ultralytics_yolo11.git
    ```
- 下载核桃派提供的docker镜像和脚本工具，用于将通用onnx模型转为npu专用的模型格式

### 1. 将yolo的模型导出为onnx格式

yolo训练后会得到一个后缀名为`.pt`的文件，里面包含着yolo运行所需要的参数数值，但里面没有网络结构信息。如果要在npu上运行，需要将其导出为包含网络结构信息的onnx格式。这一步需要调用yolo11源码自带的工具。

先运行以下命令，临时修改环境变量PYTHONPATH，指定python的模块搜索路径到yolo11源码的存放位置。我的yolo11源码存放路径是/opt/ultralytics_yolo11，所以命令如下

```shell
export PYTHONPATH=/opt/ultralytics_yolo11
```

然后运行以下python代码，他会从刚刚设置的`PYTHONPATH`指向的路径中查找 YOLO 这个库，并导出这个代码里指定的模型文件为onnx格式。
```python
from ultralytics import YOLO

model = YOLO("./yolo11n-cls.pt")
model.export(format="onnx")
```

### 2. 将onnx模型转为npu专用模型
这一步需要使用我们提供的docker镜像，里面搭建好了相关工具的运行环境，为了方便用户使用，我们将 导出模型信息、编写配置文件、模型量化、量化数据生成nb文件 等步骤都合并做成了一条命令 **npu-transfer-yolo**

模型在训练时使用的是float32类型来存储参数，在NPU上运行时，需要将参数转化为int8等存储范围较小的类型，以减小模型体积，同时提高模型运行速度。这个步骤就叫量化。量化不是直接对参数做四舍五入，而是需要输入一些图片给模型，根据模型的响应状态来优化各个参数。

我们需要准备几张图片用于量化，一般是从训练数据集里抽几张就行，将他们存放到一个文件夹下。

然后运行以下命令，传入两个参数，一个是onnx模型文件的路径，一个是存放图片的文件夹路径。

```bash
sudo npu-transfer-yolo yolo11n-cls.onnx ../image/
```

最后会在当前路径下生成一个`yolo11n-cls.nb`文件，这个文件就可以在npu上运行推理了

## python运行模型
### 1. 实例化yolo11类
实例化`YOLO11_CLS`类，需要传入模型文件的路径
```python
from walnutpi import YOLO11
yolo = YOLO11.YOLO11_CLS("model/yolo11n-cls.nb")
```
### 2. 运行模型-阻塞式
使用`run`方法即可运行模型，并返回检测结果

需要传入图片数据，使用opencv的读取图片方法进行读取即可
```python
# 读取图片
import cv2
img = cv2.imread("image/banana.jpg")

# 检测
result = yolo.run(img)
```


### 3. 运行模型-非阻塞式
使用`run_async`方法会创建一个线程来运行模型,然后立刻返回。需要传入3个参数
- 图片数据， 使用opencv的读取图片方法进行读取即可
- 置信度阈值， 只会返回置信度高于这个值的检测框
- 检测框重叠度阈值， 模型经常会在物体周围同时命中多个检测框，如果框之间的面积重合度高于这个值，则只保留置信度最高的框，删除其他重合框

非阻塞式运行需要配合 `is_running` 属性使用，他的值是 true或false，表示后台是否跑着`run_async`启动的模型运行线程。如果后台已经跑着一个运行线程了，则运行`run_async`时不会再启动新的线程。也可以用此属性来判断模型运行线程跑完了没，是否可以获取结果了。

使用`get_result()`方法 会返回后台的识别结果，与阻塞式方法`run`得到的是相同的东西

```python
import cv2
img = cv2.imread("image/banana.jpg")

yolo.run_async(img)
while yolo.is_running:
    time.sleep(0.1)
result = yolo.get_result()
```

### 4. 检测结果
`run`方法和`get_result`方法返回的都是一个分类结果对象，它包含以下两个属性：

| 属性 | 说明                            |
| ---- | ------------------------------- |
| top5 | 列表，包含了置信度排名前5的类别 |
| all  | 列表，包含了所有类别的置信度    |

其中`top5`属性是一个列表，列表中包含5个对象，每个对象都有以下两个属性

| 属性        | 说明   |
| ----------- | ------ |
| label       | 类别   |
| reliability | 置信度 |

注意label是一个数字，例如yolo官方模型训练时标注了1000个类别，label属性就会是0-999

其中`all`属性是一个列表，列表里的每个值都代表该位置类别的置信度，例如all[15]就是类别15的置信度


可以使用以下代码输出排名前5的类别信息
```python
for i in result.top5:
    print(
        "{:f} {:d}".format(
            i.reliability,
            i.label,
        )
    )
"""
# 输出如下
0.644337 954
0.519933 114
0.515940 110
0.510992 600
0.506065 679
"""
```

也可以查看某类别的置信度，例如香蕉是954，可以使用以下代码只查看香蕉的置信度
```python
print(f"该图片为香蕉的概率{result.all[954]}")
```
## 示例程序
###  yolo11官方模型类别名称
yolo官方的cls模型训练时标注了1000个类别，模型运行的时候只会输出检测到的类别的序号，需要自己获取类别名称

这里我创建了一个名为`dataset_ImageNet.py`的文件，将类别名称写进数组里，方便在代码中调用
```python
label_names = ["tench","goldfish","great white shark","tiger shark","hammerhead shark","electric ray","stingray","cock","hen","ostrich","brambling","goldfinch","house finch","junco","indigo bunting","American robin","bulbul","jay","magpie","chickadee","American dipper","kite","bald eagle","vulture","great grey owl","fire salamander","smooth newt","newt","spotted salamander","axolotl","American bullfrog","tree frog","tailed frog","loggerhead sea turtle","leatherback sea turtle","mud turtle","terrapin","box turtle","banded gecko","green iguana","Carolina anole","desert grassland whiptail lizard","agama","frilled-necked lizard","alligator lizard","Gila monster","European green lizard","chameleon","Komodo dragon","Nile crocodile","American alligator","triceratops","worm snake","ring-necked snake","eastern hog-nosed snake","smooth green snake","kingsnake","garter snake","water snake","vine snake","night snake","boa constrictor","African rock python","Indian cobra","green mamba","sea snake","Saharan horned viper","eastern diamondback rattlesnake","sidewinder","trilobite","harvestman","scorpion","yellow garden spider","barn spider","European garden spider","southern black widow","tarantula","wolf spider","tick","centipede","black grouse","ptarmigan","ruffed grouse","prairie grouse","peacock","quail","partridge","grey parrot","macaw","sulphur-crested cockatoo","lorikeet","coucal","bee eater","hornbill","hummingbird","jacamar","toucan","duck","red-breasted merganser","goose","black swan","tusker","echidna","platypus","wallaby","koala","wombat","jellyfish","sea anemone","brain coral","flatworm","nematode","conch","snail","slug","sea slug","chiton","chambered nautilus","Dungeness crab","rock crab","fiddler crab","red king crab","American lobster","spiny lobster","crayfish","hermit crab","isopod","white stork","black stork","spoonbill","flamingo","little blue heron","great egret","bittern","crane (bird)","limpkin","common gallinule","American coot","bustard","ruddy turnstone","dunlin","common redshank","dowitcher","oystercatcher","pelican","king penguin","albatross","grey whale","killer whale","dugong","sea lion","Chihuahua","Japanese Chin","Maltese","Pekingese","Shih Tzu","King Charles Spaniel","Papillon","toy terrier","Rhodesian Ridgeback","Afghan Hound","Basset Hound","Beagle","Bloodhound","Bluetick Coonhound","Black and Tan Coonhound","Treeing Walker Coonhound","English foxhound","Redbone Coonhound","borzoi","Irish Wolfhound","Italian Greyhound","Whippet","Ibizan Hound","Norwegian Elkhound","Otterhound","Saluki","Scottish Deerhound","Weimaraner","Staffordshire Bull Terrier","American Staffordshire Terrier","Bedlington Terrier","Border Terrier","Kerry Blue Terrier","Irish Terrier","Norfolk Terrier","Norwich Terrier","Yorkshire Terrier","Wire Fox Terrier","Lakeland Terrier","Sealyham Terrier","Airedale Terrier","Cairn Terrier","Australian Terrier","Dandie Dinmont Terrier","Boston Terrier","Miniature Schnauzer","Giant Schnauzer","Standard Schnauzer","Scottish Terrier","Tibetan Terrier","Australian Silky Terrier","Soft-coated Wheaten Terrier","West Highland White Terrier","Lhasa Apso","Flat-Coated Retriever","Curly-coated Retriever","Golden Retriever","Labrador Retriever","Chesapeake Bay Retriever","German Shorthaired Pointer","Vizsla","English Setter","Irish Setter","Gordon Setter","Brittany","Clumber Spaniel","English Springer Spaniel","Welsh Springer Spaniel","Cocker Spaniels","Sussex Spaniel","Irish Water Spaniel","Kuvasz","Schipperke","Groenendael","Malinois","Briard","Australian Kelpie","Komondor","Old English Sheepdog","Shetland Sheepdog","collie","Border Collie","Bouvier des Flandres","Rottweiler","German Shepherd Dog","Dobermann","Miniature Pinscher","Greater Swiss Mountain Dog","Bernese Mountain Dog","Appenzeller Sennenhund","Entlebucher Sennenhund","Boxer","Bullmastiff","Tibetan Mastiff","French Bulldog","Great Dane","St. Bernard","husky","Alaskan Malamute","Siberian Husky","Dalmatian","Affenpinscher","Basenji","pug","Leonberger","Newfoundland","Pyrenean Mountain Dog","Samoyed","Pomeranian","Chow Chow","Keeshond","Griffon Bruxellois","Pembroke Welsh Corgi","Cardigan Welsh Corgi","Toy Poodle","Miniature Poodle","Standard Poodle","Mexican hairless dog","grey wolf","Alaskan tundra wolf","red wolf","coyote","dingo","dhole","African wild dog","hyena","red fox","kit fox","Arctic fox","grey fox","tabby cat","tiger cat","Persian cat","Siamese cat","Egyptian Mau","cougar","lynx","leopard","snow leopard","jaguar","lion","tiger","cheetah","brown bear","American black bear","polar bear","sloth bear","mongoose","meerkat","tiger beetle","ladybug","ground beetle","longhorn beetle","leaf beetle","dung beetle","rhinoceros beetle","weevil","fly","bee","ant","grasshopper","cricket","stick insect","cockroach","mantis","cicada","leafhopper","lacewing","dragonfly","damselfly","red admiral","ringlet","monarch butterfly","small white","sulphur butterfly","gossamer-winged butterfly","starfish","sea urchin","sea cucumber","cottontail rabbit","hare","Angora rabbit","hamster","porcupine","fox squirrel","marmot","beaver","guinea pig","common sorrel","zebra","pig","wild boar","warthog","hippopotamus","ox","water buffalo","bison","ram","bighorn sheep","Alpine ibex","hartebeest","impala","gazelle","dromedary","llama","weasel","mink","European polecat","black-footed ferret","otter","skunk","badger","armadillo","three-toed sloth","orangutan","gorilla","chimpanzee","gibbon","siamang","guenon","patas monkey","baboon","macaque","langur","black-and-white colobus","proboscis monkey","marmoset","white-headed capuchin","howler monkey","titi","Geoffroy's spider monkey","common squirrel monkey","ring-tailed lemur","indri","Asian elephant","African bush elephant","red panda","giant panda","snoek","eel","coho salmon","rock beauty","clownfish","sturgeon","garfish","lionfish","pufferfish","abacus","abaya","academic gown","accordion","acoustic guitar","aircraft carrier","airliner","airship","altar","ambulance","amphibious vehicle","analog clock","apiary","apron","waste container","assault rifle","backpack","bakery","balance beam","balloon","ballpoint pen","Band-Aid","banjo","baluster","barbell","barber chair","barbershop","barn","barometer","barrel","wheelbarrow","baseball","basketball","bassinet","bassoon","swimming cap","bath towel","bathtub","station wagon","lighthouse","beaker","military cap","beer bottle","beer glass","bell-cot","bib","tandem bicycle","bikini","ring binder","binoculars","birdhouse","boathouse","bobsleigh","bolo tie","poke bonnet","bookcase","bookstore","bottle cap","bow","bow tie","brass","bra","breakwater","breastplate","broom","bucket","buckle","bulletproof vest","high-speed train","butcher shop","taxicab","cauldron","candle","cannon","canoe","can opener","cardigan","car mirror","carousel","tool kit","carton","car wheel","automated teller machine","cassette","cassette player","castle","catamaran","CD player","cello","mobile phone","chain","chain-link fence","chain mail","chainsaw","chest","chiffonier","chime","china cabinet","Christmas stocking","church","movie theater","cleaver","cliff dwelling","cloak","clogs","cocktail shaker","coffee mug","coffeemaker","coil","combination lock","computer keyboard","confectionery store","container ship","convertible","corkscrew","cornet","cowboy boot","cowboy hat","cradle","crane (machine)","crash helmet","crate","infant bed","Crock Pot","croquet ball","crutch","cuirass","dam","desk","desktop computer","rotary dial telephone","diaper","digital clock","digital watch","dining table","dishcloth","dishwasher","disc brake","dock","dog sled","dome","doormat","drilling rig","drum","drumstick","dumbbell","Dutch oven","electric fan","electric guitar","electric locomotive","entertainment center","envelope","espresso machine","face powder","feather boa","filing cabinet","fireboat","fire engine","fire screen sheet","flagpole","flute","folding chair","football helmet","forklift","fountain","fountain pen","four-poster bed","freight car","French horn","frying pan","fur coat","garbage truck","gas mask","gas pump","goblet","go-kart","golf ball","golf cart","gondola","gong","gown","grand piano","greenhouse","grille","grocery store","guillotine","barrette","hair spray","half-track","hammer","hamper","hair dryer","hand-held computer","handkerchief","hard disk drive","harmonica","harp","harvester","hatchet","holster","home theater","honeycomb","hook","hoop skirt","horizontal bar","horse-drawn vehicle","hourglass","iPod","clothes iron","jack-o'-lantern","jeans","jeep","T-shirt","jigsaw puzzle","pulled rickshaw","joystick","kimono","knee pad","knot","lab coat","ladle","lampshade","laptop computer","lawn mower","lens cap","paper knife","library","lifeboat","lighter","limousine","ocean liner","lipstick","slip-on shoe","lotion","speaker","loupe","sawmill","magnetic compass","mail bag","mailbox","tights","tank suit","manhole cover","maraca","marimba","mask","match","maypole","maze","measuring cup","medicine chest","megalith","microphone","microwave oven","military uniform","milk can","minibus","miniskirt","minivan","missile","mitten","mixing bowl","mobile home","Model T","modem","monastery","monitor","moped","mortar","square academic cap","mosque","mosquito net","scooter","mountain bike","tent","computer mouse","mousetrap","moving van","muzzle","nail","neck brace","necklace","nipple","notebook computer","obelisk","oboe","ocarina","odometer","oil filter","organ","oscilloscope","overskirt","bullock cart","oxygen mask","packet","paddle","paddle wheel","padlock","paintbrush","pajamas","palace","pan flute","paper towel","parachute","parallel bars","park bench","parking meter","passenger car","patio","payphone","pedestal","pencil case","pencil sharpener","perfume","Petri dish","photocopier","plectrum","Pickelhaube","picket fence","pickup truck","pier","piggy bank","pill bottle","pillow","ping-pong ball","pinwheel","pirate ship","pitcher","hand plane","planetarium","plastic bag","plate rack","plow","plunger","Polaroid camera","pole","police van","poncho","billiard table","soda bottle","pot","potter's wheel","power drill","prayer rug","printer","prison","projectile","projector","hockey puck","punching bag","purse","quill","quilt","race car","racket","radiator","radio","radio telescope","rain barrel","recreational vehicle","reel","reflex camera","refrigerator","remote control","restaurant","revolver","rifle","rocking chair","rotisserie","eraser","rugby ball","ruler","running shoe","safe","safety pin","salt shaker","sandal","sarong","saxophone","scabbard","weighing scale","school bus","schooner","scoreboard","CRT screen","screw","screwdriver","seat belt","sewing machine","shield","shoe store","shoji","shopping basket","shopping cart","shovel","shower cap","shower curtain","ski","ski mask","sleeping bag","slide rule","sliding door","slot machine","snorkel","snowmobile","snowplow","soap dispenser","soccer ball","sock","solar thermal collector","sombrero","soup bowl","space bar","space heater","space shuttle","spatula","motorboat","spider web","spindle","sports car","spotlight","stage","steam locomotive","through arch bridge","steel drum","stethoscope","scarf","stone wall","stopwatch","stove","strainer","tram","stretcher","couch","stupa","submarine","suit","sundial","sunglass","sunglasses","sunscreen","suspension bridge","mop","sweatshirt","swimsuit","swing","switch","syringe","table lamp","tank","tape player","teapot","teddy bear","television","tennis ball","thatched roof","front curtain","thimble","threshing machine","throne","tile roof","toaster","tobacco shop","toilet seat","torch","totem pole","tow truck","toy store","tractor","semi-trailer truck","tray","trench coat","tricycle","trimaran","tripod","triumphal arch","trolleybus","trombone","tub","turnstile","typewriter keyboard","umbrella","unicycle","upright piano","vacuum cleaner","vase","vault","velvet","vending machine","vestment","viaduct","violin","volleyball","waffle iron","wall clock","wallet","wardrobe","military aircraft","sink","washing machine","water bottle","water jug","water tower","whiskey jug","whistle","wig","window screen","window shade","Windsor tie","wine bottle","wing","wok","wooden spoon","wool","split-rail fence","shipwreck","yawl","yurt","website","comic book","crossword","traffic sign","traffic light","dust jacket","menu","plate","guacamole","consomme","hot pot","trifle","ice cream","ice pop","baguette","bagel","pretzel","cheeseburger","hot dog","mashed potato","cabbage","broccoli","cauliflower","zucchini","spaghetti squash","acorn squash","butternut squash","cucumber","artichoke","bell pepper","cardoon","mushroom","Granny Smith","strawberry","orange","lemon","fig","pineapple","banana","jackfruit","custard apple","pomegranate","hay","carbonara","chocolate syrup","dough","meatloaf","pizza","pot pie","burrito","red wine","espresso","cup","eggnog","alp","bubble","cliff","coral reef","geyser","lakeshore","promontory","shoal","seashore","valley","volcano","baseball player","bridegroom","scuba diver","rapeseed","daisy","yellow lady's slipper","corn","acorn","rose hip","horse chestnut seed","coral fungus","agaric","gyromitra","stinkhorn mushroom","earth star","hen-of-the-woods","bolete","ear","toilet paper",]

```

### 示例-读取图片做检测，并将结果写在图片上保存
![result](./img/example_cls_picture.jpg)
```python
from walnutpi import YOLO11
import dataset_ImageNet
import cv2

model_path = "model/yolo11n-cls.nb"
picture_path = "image/banana.jpg"
output_path = ".result.jpg"

img = cv2.imread(picture_path)

# 检测图片
yolo = YOLO11.YOLO11_CLS(model_path)
result = yolo.run(img)

# 输出与绘制到图片上
index = 0
for i in result.top5:
    show_string = "{:f} {:s}".format(
        i.reliability,
        dataset_ImageNet.label_names[i.label],
    )
    print(show_string)
    index += 1

    cv2.putText(
        img,
        show_string,
        (10, 30 * index),
        cv2.FONT_HERSHEY_SIMPLEX,
        1,
        (0, 0, 200),
        2,
    )

# 保存图片
cv2.imwrite(output_path, img)
```



### 示例-读取摄像头做检测，并显示在桌面上
![result](./img/example_cls_camera.jpg)
```python
from walnutpi import YOLO11
import dataset_ImageNet
import cv2
import os

os.environ["DISPLAY"] = ":0.0"

model_path = "model/yolo11n-cls.nb"
yolo = YOLO11.YOLO11_CLS(model_path)

# 打开摄像头
cap = cv2.VideoCapture(0)
if not cap.isOpened():
    print("Cannot open camera")
    exit()

# 设置为1080p
# cap.set(cv2.CAP_PROP_FOURCC, cv2.VideoWriter_fourcc(*"MJPG"))
# cap.set(cv2.CAP_PROP_FRAME_WIDTH, 1920)  # 设置宽度
# cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 1080)  # 设置长度

while True:
    # 读取一帧图像并显示出来
    ret, img = cap.read()
    if not ret:
        print("Can't receive frame (stream end?). Exiting ...")
        break
    if not yolo.is_running:
        yolo.run_async(img)
    result = yolo.get_result()
    index = 0
    if result is not None:
        for i in result.top5:
            show_string = "{:f} {:s}".format(
                i.reliability,
                dataset_ImageNet.label_names[i.label],
            )
            index += 1

            cv2.putText(
                img,
                show_string,
                (10, 30 * index),
                cv2.FONT_HERSHEY_SIMPLEX,
                1,
                (0, 0, 200),
                2,
            )

    cv2.imshow("result", img)
    cv2.waitKey(1)

```

