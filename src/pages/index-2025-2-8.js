import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

import Translate, { translate } from '@docusaurus/Translate';

// 引入 Swiper.js 相关组件和样式
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // 引入导航模块的 CSS
import { Pagination, Navigation } from 'swiper/modules'; // 引入导航模块

// 引入自定义 CSS 文件
import './../css/swiper-custom.css';

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">{<Translate>核桃派</Translate>}</h1>
                <p className="hero__subtitle">{<Translate>- 让数字化技术变得简单 -</Translate>}</p>
                <p className="hero__subtitle">{<Translate>方便、便宜、好玩的Linux开发板</Translate>}</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/walnutpi_1">
                        <Translate>开始学习</Translate>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`WalnutPi`}
            description="Description will go into a meta tag in <head />">
            {/* <HomepageHeader /> */}
            <main>
                {/* 轮播图部分 */}
                <Swiper
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    speed={500}
                    navigation={{ // 配置导航
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    modules={[Pagination, Navigation]} // 引入导航模块
                    className="mySwiper"
                    onSwiper={(swiper) => {
                      console.log('Swiper initialized:', swiper);
                  }}
                >
                    <SwiperSlide>
                        <img src="/img/1.png" alt="Slide 1" style={{ width: '100%', height: 'auto' }} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/img/2.png" alt="Slide 2" style={{ width: '100%', height: 'auto' }} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/img/3.png" alt="Slide 3" style={{ width: '100%', height: 'auto' }} />
                    </SwiperSlide>
                </Swiper>
                {/* 导航箭头 */}
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}