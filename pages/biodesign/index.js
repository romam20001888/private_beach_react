 

import React, { Component,useState, useEffect, useRef  } from "react";
import { Card, CardGroup,Row, Col,Form,Button  } from 'react-bootstrap'
import BiodisignIthem from "../../const/biodisign"
import LinkTileCatalog from '../../components/LinkTileCatalog'
import { Link, animateScroll as scroll } from "react-scroll";
import { useInView } from 'react-intersection-observer';
import Head from 'next/head'

export default function Biodisign({light}) {
   


    return(
        <>
        <Head>
            <meta name="description" content="Преимущества бассейнов BIODESIGN от компании QPkupibas: уникальные итальянские технологии и натуральный вид" />
        </Head>
        <div className={`head-margin ${light}`}></div>
            <div className={`mainContainer`}>
                <div className="title-page__50 biodisign-title">
                    <h2>Уникальные итальянские  технологии и натуральный вид собственного песчаного пляжа - это
                    <span className={'decor-bg-word'}><span className="decor-bg-word__ithem-bio"></span>РЕАЛЬНОСТЬ!</span> </h2>
                </div>
                
            </div>
            <div className={`pagep-bg__block-${light} pagep-bg__block-top-tech-link`}></div>
            <div className={`mainContainer`}>
                <div className={'KupibasTitleh2 KupibasTitleh2-bio'}>
                    <h1>
                        Что отличает бассейны <span className={'decor-bg-word main-yelow__span decor-bg-word-biodisign '}><span className="decor-bg-word__ithem-bio2"></span>BIODESIGN?</span>
                    </h1>
                </div>
                 <Row className={'content-block-img-txt'}>
                    <Col lg={6} xl={6} md={6} sm={12} className={"content-block-txt content-block-txt-bot-bot"}>
                        <div>
                            <p>
                            Технология Biodesign позволяет нам продумать вместе с заказчиком каждую деталь бассейна для расслабления и полноценного наслаждения отдыхом, включая пляжные зоны для принятия солнечных ванн, зоны средней глубины, места для сидения, подводные кресла, джакузи, фонтаны и массажные зоны и дополнительное оборудование без потери зон для купания, что делает продукт <span className="main-yelow__span upper">эксклюзивным</span>.
                            </p>
                            <p>
                            Затраты на его обслуживание ниже обычных, т.к. бассейн функционирует в зимнее время, как озеро. 
                            </p>
                            <p>Т. о., Biodesign Pools - это дополнительная инвестиция, которая увеличивает стоимость объекта недвижимости и <span className="main-yelow__span upper">ценность участка</span>, где он расположен каждый день зимой и летом.</p>
                        </div>
                    </Col>
                    <Col lg={6} xl={6} md={6} sm={12} className="bloc-order-2"> 
                    <img className="biodisign1desc-img biodisign1desc-img-tab-none" src="/biodisign/biodisign1.jpg" alt="Бассейн с мостиком" title="Бассейн с мостиком"/>

                    <img className="biodisign1desc-img biodisign1desc-img-tab" src="/biodisign/biodisign1tab.jpg" alt="Бассейн с мостиком" title="Бассейн с мостиком"/>
                  
                    </Col>
                </Row>
                <Row className={'content-block-img-txt'}>
                    <Col lg={6} xl={6} md={6} sm={12}>
                        <img className="biodisign1desc-img biodisign1desc-img-tab-none" src="/biodisign/biodisign2.jpg" alt="Девушка в бассейне" title="Девушка в бассейне"/>

                        <img className="biodisign1desc-img biodisign1desc-img-tab" src="/biodisign/biodisign2tab.jpg" alt="Девушка в бассейне" title="Девушка в бассейне"/>
                    </Col>
                    <Col lg={6} xl={6} md={6} sm={12} className={"content-block-txt content-block-txt-bot-bot bloc-order-1" }>
                        <p>
                        Используемые материалы, гидроизоляция, вес конструкции, который в среднем в 10 раз ниже по сравнению с традиционным бассейном - это настоящая инновация, которая создает 
                        <span className="main-yelow__span upper"> роскошь и благополучие</span>.
                        </p>
                        <p>Бассейны Biodesign изготавливаются по месту своего расположения. А существующий грунт используется в качестве формы при устройстве его чаши. Поэтому естественные формы, сочетающиеся с природными делает такие бассейны <span className="main-yelow__span upper">экологичными</span>.</p>
                    </Col>
                </Row>
                
                <Row className={'content-block-img-txt image-right' }>
                    <Col lg={6} xl={6} md={6} sm={12} className={"content-block-txt content-block-txt-bot-bot"} >
                        <div>
                            <p>
                            Благодаря свободной форме и наклонным стенкам у Вас будет больше места для плавания и погружения, а сидение станет <span className="main-yelow__span upper">удобным</span>. И даже дети могут легко играть, входить и выходить из бассейна самостоятельно. Это <span className="main-yelow__span upper">безопасно</span>, т.к. гибкая форма этих бассейнов предусматривает террасу глубиной 30-35 см, через которую вход в бассейн происходит постепенно.
                            </p>
                        </div>

                    </Col>
                    <Col lg={6} xl={6} md={6} sm={12} className="bloc-order-2">
                         <img className="biodisign1desc-img biodisign1desc-img-tab-none" src="/biodisign/biodisign13.jpg" alt="Дети в бассейне" title="Дети в бассейне" />

                         <img className="biodisign1desc-img biodisign1desc-img-tab" src="/biodisign/biodisign3tab.jpg" alt="Дети в бассейне" title="Дети в бассейне" />
                     </Col>
                </Row>
            </div>
            <div className={'pagep-bg__block-wrapp'}>
                <div className={`pagep-bg__block-${light} pagep-bg__block-nofix `}></div>  
            </div>
            <div className={`KupibasTitleh2 KupibasTitleh2-biodisign ${light} `}>
                    <h2>
                    <span className="upper bold tech-titleh2">Преимущества бассейнов</span>, <span className={'KupibasTitleh2-span'}>построенных по технологии <span className={'decor-bg-word'}><span className="decor-bg-word__ithem-bio3"></span>BIODESIGN</span> POOLS:</span>
                    </h2>     
            </div>

            <section className={`mainContainer`}>
                {
                    BiodisignIthem.map((index,num)=>{
                        return(

                            <div key={`bo-${num}`} className={`advantage-blocks__wrapp`}>

        
                            <Row >
                            
                            <div className={`advantage-blocks__title-line ${light}`} >
                                <h4 ><span>{index.name}</span> </h4>
                            </div>
                                {
                                    index.value.map((valueIndex,valueNum)=>{
                                        if(valueIndex.status=="old"){
                                            return(
                                                <Col lg={6} xl={6} md={6} sm={6} className={`advantage-block advantage-block-old`}> 
                                                
                                                <div className={`advantage-blocks__img`} >
                                                <img src={valueIndex.oldImg.image} alt={valueIndex.oldImg.alt}title={valueIndex.oldImg.title}/>
                                                </div>
                                                <div className={`advantage-blocks__txt ${light}`} >
                                                 
                                                    <div className={`${light} advantage-blocks__line advantage-blocks__line-bio`}></div>
                                                   
                                                    <h5>{valueIndex.oldTitle}</h5>
                                                    <p>{valueIndex.oldDescr}</p>
                                                </div>
                                           

                                            </Col>
                                            )
                                        }else{
                                            return(

                                                <Col lg={6} xl={6} md={6} sm={6} className={`advantage-block advantage-block-new ${light}`}> 
                                                <div className={`advantage-blocks__img advantage-blocks__img-new`} >
                                                <img src={valueIndex.newImg.image} alt={valueIndex.newImg.alt}title={valueIndex.newImg.title}/>
                                                </div>
                                                <div className={`advantage-blocks__txt ${light}`}>
                                                   
                                                    <div className={`${light} advantage-blocks__line advantage-blocks__line-bio`}></div>
                                                  
                                                    <h5 className={`main-yelow__span`}>{valueIndex.newTitle}</h5>
                                                    <p>{valueIndex.newDescr}</p>
                                                </div>
                                            </Col>
 
                                            )
                                        }
                                        
                                    })
                                }

                            </Row>
                        </div>
                        )
                    })
                }
            
            </section>
            <div className="LinkTile-bio">
                <LinkTileCatalog light={light}/>
            </div>
            
            <div className={'pagep-bg__block-wrapp'}>
                <div className={`pagep-bg__block-${light} pagep-bg__block-nofix `}></div>  
            </div>
            <section className={`mainContainer ${light}`}>
                <div className="title-page__100 titel-bottom">
                        <h3>Чтобы узнать подробнее об уникальности бассейна, подобрать идеальную форму и сделать ваш  BIODESIGN “изюминкой” территории -&nbsp; 
                        <Link
                        variant="outline-secondary" className='to-contact'
                        Link to="CONTACT-PROD"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {1000}
                        >
                        <span className={'decor-bg-word upper'}><span className="decor-bg-word__ithem-bio"></span>закажите звонок</span>
                        </Link> на нашем сайте или свяжитесь с нами самостоятельно! Мы проконсультируем Вас и сделаем ваш собственный песчаный пляж произведением искусства для отдыха премиум-класса!</h3>
                </div>
            </section>
        </>
    )
}