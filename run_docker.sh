#!/bin/bash
DOCKER_VER="18-alpine"

if [ "$(sudo docker images -q node:$DOCKER_VER 2>/dev/null)" = "" ]; then
    sudo docker pull node:$DOCKER_VER
fi

sudo docker run -it --rm -v $(pwd):/usr/src/app -w /usr/src/app -p 3000:3000 node:18-alpine sh -c "npm install && npm run start"
