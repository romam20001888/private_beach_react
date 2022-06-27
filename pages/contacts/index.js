import React from "react"
import Router from "next/router"
import {Row, Col} from 'react-bootstrap'
import MapQP from "../../components/MapQP"
import Link from 'next/link'
import Head from 'next/head'
export default function Contacts({light}){

    return(
        <>
        <Head>
            <meta name="description" content="Контакты QPkupibas в Ростове-на-Дону, официального партнёра производителя песчаных бассейнов BIODESIGN в России" />
        </Head>
        <div className={`head-margin ${light}`}></div>
            <div className={`mainContainer`}>
                
                <div className="title-page__70-center">
                <h1><span className="span-block"> Контакты <span className="decor-bg-word-gallery decor-bg-word-bold decor-bg-word-brend"> KUPIBAS GROUP,</span></span>
                        официального партнёра BIODESIGN POOLS в России  
                    </h1>
                </div>
            </div>
            <section className={`mainContainer ${light}`}>
                <p className={`descr-page`}>Мы ждем Вашего <a href={'#CONTACT-PROD'}>звонка</a>, чтобы уникальный песчаный бассейн <a href={'/biodesign'}>Biodesign</a> стал Вашим индивидуальным “кусочком моря” и радовал Вас и Ваших гостей!</p>
            <Row className={`contact-content-wrapp`}>
                <Col lg={12} md={12} sm={8}  className={`contact-info-wrapp ${light}`}>
                    <Row>
                        <Col lg={5} md={5} sm={12} className={`contact-info`}>
                            <div className="contact-adres__ithem">г. Ростов-на-Дону, <span className={`span-block`}>ул. Особенная 116</span> </div>
                            <div className="contact-adres__ithem">Пн-Пт: 9.00-18.00 <span className={`span-block`}>Сб-Вс: выходной</span> </div>
                        </Col>
                        <Col lg={2} md={3} sm={6} className={`contact-info-tel`}>
                        <div className="contact-first-tel"><a href={`tel:88003507560`}>8 (800) 350-75-60</a></div>
                            <div><a href={`tel:88633226019`}>8 (863) 322-60-19</a></div>
                           
                        </Col>
                        <Col lg={5} md={4} sm={6} className={`contact-info-tel contact-info-mail`}>
                            <div><a href={`mailto:info@kupibas.ru`}>info@kupibas.ru</a> </div>
                        </Col>
                    </Row>
                </Col>

                    <Col lg={12} md={12} sm={4} className={`contacts-img-wrapp`}>
                        <Row>
                            <Col lg={5} md={5} className={`contacts-img contacts-img1`}>
                            <img src="/contacts/contact1.jpg" alt="contact1" title="Офис QPkupibas"/> 
                            </Col>
                            <Col lg={2} md={3} className={`contacts-img contacts-img2`}>
                            <img src="/contacts/contacts2.jpg" alt="contacts2" title="вход в офис QPkupibas"/> 
                            </Col>
                            <Col lg={5} md={4} className={`contacts-img contacts-img3`}>
                            <img src="/contacts/contacts3.jpg" alt="contacts3" title="логотип QPkupibas"/> 
                            </Col>
                        </Row>
                    </Col>
            </Row>

            </section>
            <MapQP />
        </>
    )
    
}