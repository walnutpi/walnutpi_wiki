import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '强势出圈',
    Svg: require('@site/static/img/walnutpi.svg').default,
    description: (
      <>*全志H616四核Cortex-A53高性能处理器<br></br>
        *双频WiFi+蓝牙5.0<br></br>
        *尺寸兼容树莓派<br></br>
      </>
    ),
  },
  {
    title: '定制版Debian系统',
    Svg: require('@site/static/img/debian.svg').default,
    description: (
      <>
        核桃派定制版Debian，体验更像Windows<br></br>
        降低用户使用门槛
      </>
    ),
  },
  {
    title: '彩色40P排针',
    Svg: require('@site/static/img/gpio.svg').default,
    description: (
      <>
        方便接线，避免误接短路。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
        <rect width="100%" height="100%"/>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
