
import Image from 'next/image'
import LinkTileCatalog from '../components/LinkTileCatalog'
import React, { useRef,useState,Component } from "react";
import SimpleSlider from "../components/SliderSlic"
import LazyLoad from 'react-lazyload';
import SvgWithXlink from "../components/SvgWithXlink"

import Head from 'next/head'

import { Card, CardGroup,Row, Col,Form,Button  } from 'react-bootstrap'


import dynamic from 'next/dynamic'
const TweenOne = dynamic(() =>
  import('rc-tween-one'),{ ssr: false }
)
import ScrollAnim, { OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import Animate from 'rc-animate';
import Texty from "rc-texty";
import "rc-texty/assets/index.css";


const ScrollOverPack = ScrollAnim.OverPack;
const ScrollParallax = ScrollAnim.Parallax;

export default function Index({light}) {
    
    return <>
        <Head>
            <meta name="description" content="Итальянские бассейны BIODESIGN от QPkupibas (Ростов-на-Дону). Индивидуальный дизайн и нестандартные формы, собственный VIP-пляж у Вас дома!" />
        </Head>
        <div className={`MainHomeBlock ${light}`}>
            <div className={`mainContainer ${light}`}>
                <div className={`header-flex`}>
                    <div className={`header-flex-center`}>
                        <div className={`header-flex__title`}>
                            
                            <h1 className={`header-flex__title-h1`}>KUPIBAS GROUP <span className={`header-title-decor`}>ПРЕДСТАВЛЯЕТ</span></h1>
                            
                            <div className={`home-ban-descr`}>Собственный VIP-пляж прямо у Вас дома!</div>
                        </div>
                        
                        <div className={'contact-btn home-contact-btn'} >
                            <a type="submit" href="#Contact-form" onClick={() =>{ setShow(true);ym(52791373,'reachGoal','zakazat-glavnaya')}} >ЗАКАЗАТЬ СЕЙЧАС</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={`PromoBlockWrapp-${light}`}>
            <div className={'mainContainer'}>

                <div className={` KupibasTitleh2-home KupibasTitleh2-home-${light}   KupibasTitleh2-${light}`}>

                    <h3>
                        БАССЕЙНЫ BIODESIGN ОТ ИТАЛЬЯНСКОГО ПРОИЗВОДИТЕЛЯ <span className={'main-yelow__span main-yelow__span-block main-yelow__span-home'}>ЭКСКЛЮЗИВНО</span> В РОССИИ
                    </h3>
                    <p className={'PromoBlockTxt'}>
                        Компания KUPIBAS является официальным представителем итальянской компании BIODESIGN POOLS, специализирующейся на производстве натуральных песчаных бассейнов
                    </p>
             
                </div>


                <div className={`animate-block__container animate-block__container-${light}`} >  
                    <div key="a" className={'animate-block__card animate-block__img1'}>
                        <span></span>
                        <div className={'animate-block__img '}>
                            {/* <img src="/animatelBlock/animatedBlocIthem.jpg"/> */}
                        </div>
                        <div className={'animate-block__content'}>
                            <div className={'animate-block__content-img'}>
                               
                                    <img src="/animate-ic.svg" alt='ИНДИВИДУАЛЬНЫЙ ДИЗАЙН и нестандартные формы'/>
                                
                                <div className={'animate-block__content-line'}></div>
                                <div className={'animate-block__content-text-wrapp'}>
                                    <div className={'animate-block__content-text-title'}>
                                        <h5>ИНДИВИДУАЛЬНЫЙ ДИЗАЙН  и  нестандартные формы</h5>
                                    </div>
                                    <div>
                                            <p>Полностью адаптированная водная среда с пляжами, гидромассажем и шезлонгами под все пожелания заказчика и технические требования территории</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        
                    </div>
                    
                   
                    <div key="b" className={'animate-block__card animate-block__img2'} >
                        <span></span>
                        <div className={'animate-block__img '}>
                            {/* <img src="/animatelBlock/animatedBlocIthem2.jpg"/> */}
                        </div>
                        <div className={'animate-block__content'}>
                            <div className={'animate-block__content-img'}>
                                
                                    <img src="/animate-ic2.svg" alt='ЭКОЛОГИЧЕСКИ ЧИСТЫЕ ТЕХНОЛОГИИ'/>
                               
                                <div className={'animate-block__content-line'}></div>
                                    <div className={'animate-block__content-text-wrapp'}>
                                        <div className={'animate-block__content-text-title'}>
                                            <h5>ЭКОЛОГИЧЕСКИ ЧИСТЫЕ ТЕХНОЛОГИИ</h5>
                                        </div>
                                        <div>
                                            <p>Строительство реализовано с использованием природных материалов, что существенно снижает воздействие на окружающую среду</p>
                                        </div>
                                    </div>
                                

                            </div>
                        </div>
                    </div>
                   
                    
                    <div key="c" className={'animate-block__card animate-block__img3'}>
                        <span></span>
                        <div className={'animate-block__img'}>
                            {/* <img src="/animatelBlock/animatedBlocIthem3.jpg"/> */}
                        </div>
                        <div className={'animate-block__content'}>
                            <div className={'animate-block__content-img'}>
                               
                                    <img src="/animate-ic3.svg" alt='КРАСОТА И ДОЛГОСРОЧНОСТЬ ИСПОЛЬЗОВАНИЯ '/>
                                
                                <div className={'animate-block__content-line'}></div>
                                <div className={'animate-block__content-text-wrapp'}>
                                    <div className={'animate-block__content-text-title'}>
                                    <h5>КРАСОТА И ДОЛГОСРОЧНОСТЬ ИСПОЛЬЗОВАНИЯ     </h5>
                                    </div>
                                    <div>
                                    <p>Biodesign pools идеально сочетается с  ландшафтом и является отличным выбором даже для небольших двориков</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                   
                    {/* </QueueAnim>
                </OverPack> */}

                </div>

           </div>

        </div>
        

 <LinkTileCatalog light={light}/>

       
 
         <div className={`mainContainer wrapper-bg-bot ${light}`}>
         <Row className={'content-block-img-txt'}>
                    <Col lg={6} xl={6} md={6} sm={12}><img src="/homeLeft-img.jpg" alt="Песчаный бассейн" title="Песчаный бассейн"  /></Col>
                    <Col lg={6} xl={6} md={6} sm={12} className={"content-block-txt content-block-txt-bot-bot"}>
                    <h4>УНИКАЛЬНОСТЬ BIODESIGN POOLS</h4>
                    <p>
                        Годы научных исследований и разработок, опыт устройства сотен общественных и частных бассейнов, созданных во всем мире, позволили итальянской компании Api Italia разработать уникальную экотехнологию, запатентованную под брендом BIODESIGN POOLS.</p>
                        <p>
                        BIODESIGN POOLS – это абсолютное превосходство всех существующих материалов, методик и технологий в области устройства бассейнов с уникальной интеграцией их в естественную природную инфраструктуру.
                        Благодаря применению специально разработанной системе гидроизоляции и покрытия значительно увеличился срок службы и эксплуатационные характеристики. При этом BIODESIGN POOLS – это максимально комфортный и полностью экологичный бассейн.
                    </p>
                    </Col>
                </Row>
                <Row className={'content-block-img-txt image-right' }>
                    <Col lg={6} xl={6} md={6} sm={12} className={"content-block-txt content-block-txt-bot-bot"} >
                        <div>
                        <h4>ЦВЕТА НА ЛЮБОЙ ВКУС</h4>
                    <p>
                         BIODESIGN POOLS предлагает широкий выбор потрясающих природных цветов, которые прекрасно впишутся в любой внешней среде. Цвета, которые могут гарантировать только натуральный камень (такой как мрамор или кварц), способный воспроизвести цвета экзотического белого песка, самых красивых пляжей в мире или даже зелени альпийских озер.
                    </p>
                        </div>

                    </Col>
                    <Col lg={6} xl={6} md={6} sm={12} className={"bloc-order-2"} > <img src="/homerRght-img.jpg" alt="BIODESIGN POOLS предлагает широкий выбор потрясающих природных цветов" title="BIODESIGN POOLS предлагает широкий выбор потрясающих природных цветов"/></Col>
                </Row>
            {/* <Row className={`content-block-img-txt ${light}`}>
                <Col lg={6} xl={6} md={5} sm={12} >
                  
                    <div className={`advantage-blocks__img`}>
                    <img src="/homeLeft-img.jpg" alt="img" />
                    </div>
                       
                    
                </Col>
                <Col lg={6} xl={6} md={5} sm={12} className={"content-block-txt content-block-txt-bot-bot"}>
                    <h4>УНИКАЛЬНОСТЬ BIODESIGN POOLS</h4>
                    <p>
                        Годы научных исследований и разработок, опыт устройства сотен общественных и частных бассейнов, созданных во всем мире, позволили итальянской компании Api Italia разработать уникальную экотехнологию, запатентованную под брендом BIODESIGN POOLS.</p>
                        <p>
                        BIODESIGN POOLS – это абсолютное превосходство всех существующих материалов, методик и технологий в области устройства бассейнов с уникальной интеграцией их в естественную природную инфраструктуру.
                        Благодаря применению специально разработанной системе гидроизоляции и покрытия значительно увеличился срок службы и эксплуатационные характеристики. При этом BIODESIGN POOLS – это максимально комфортный и полностью экологичный бассейн.
                    </p>
                </Col>
            </Row> */}
            {/* <Row className={`content-block-img-txt ${light}`}>
                <Col lg={6} xl={6} md={12} sm={12} className={"content-block-txt content-block-txt-bot-bot"}>
                    <h4>ЦВЕТА НА ЛЮБОЙ ВКУС</h4>
                    <p>
                         BIODESIGN POOLS предлагает широкий выбор потрясающих природных цветов, которые прекрасно впишутся в любой внешней среде. Цвета, которые могут гарантировать только натуральный камень (такой как мрамор или кварц), способный воспроизвести цвета экзотического белого песка, самых красивых пляжей в мире или даже зелени альпийских озер.
                    </p>
                </Col>
                <Col lg={6} xl={6} md={12} sm={12} >
                    <LazyLoad>
                        <img src="/homerRght-img.jpg" alt="img" />
                    </LazyLoad>
                </Col>
            </Row> */}
            </div>
          

            <div className={`home-title-h3 ${light}`}>
            <div className={`pagep-bg__block-${light}`}></div>
                <h3>Фотоальбом BIODESIGN от KUPIBAS</h3>
                <p>Примеры пляжных бассейнов BIODESIGN POOLS</p>
                <div className={`container-2`}>
                        <a href={'/gallery'}>Cмотреть</a>
                </div>
            </div>      

              <SimpleSlider light={light}/>


            


 

    </>
}