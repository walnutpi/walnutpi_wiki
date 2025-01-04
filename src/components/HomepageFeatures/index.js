import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

import Translate, {translate} from '@docusaurus/Translate';

const FeatureList = [
  {
    title: <Translate>强势出圈</Translate>,
    Svg: require('@site/static/img/walnutpi.svg').default,
    description: (
      <>* <Translate>全志H616/H618 四核Cortex-A53高性能处理器</Translate><br></br>
        * <Translate>双频WiFi+蓝牙5.0</Translate><br></br>
        * <Translate>尺寸兼容树莓派</Translate><br></br>
      </>
    ),
  },
  {
    title: <Translate>定制版Debian系统</Translate>,
    Svg: require('@site/static/img/debian.svg').default,
    description: (
      <>
        <Translate>核桃派定制版Debian，体验更像Windows</Translate><br></br>
        <Translate>降低用户使用门槛</Translate>
      </>
    ),
  },
  {
    title: <Translate>彩色40P排针</Translate>,
    Svg: require('@site/static/img/gpio.svg').default,
    description: (
      <>
        <Translate>方便接线，避免误接短路</Translate>
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
