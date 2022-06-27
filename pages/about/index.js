import React from "react"
import Router from "next/router"
import { Card, CardGroup,Row, Col,Form,Button  } from 'react-bootstrap'
import LinkTileCatalog from '../../components/LinkTileCatalog'
import Link from 'next/link'
import Head from 'next/head'
export default function About({light}){
    const LinkBack = () => {
        Router.push('/')
    }

    return(
        <>
        <Head>
            <meta name="description" content="О компании QPkupibas: строительство песчаных бассейнов BIODESIGN индивидуальной формы на выгодных условиях" />
        </Head>
        <div className={`head-margin ${light}`}></div>
            <div className={`title-block__bg ${light}`}>
                <div className={`mainContainer`}>
                    
                    <div className="decor-bg-word-catalog"></div>
                    <h1 className="title-page title-page__90">
                        <div>Производство песочных бассейнов </div>
                      по технологии Biodesign от <span className="bold upper">KUPIBAS GROUP</span>, официального партнёра <span className={'upper'}><span className={'decor-bg-word'}><span className="decor-bg-word__ithem-about"></span>BIODESIGN POOLS</span>  </span>  в России
                      </h1>
                </div>
            </div>

            <section className={`mainContainer`}>
              <Row className={'content-block-img-txt '}>
                    <Col lg={6} xl={6} md={12} sm={12} className="content-block-img-about"><img src="/about/image 30.jpg" alt="УНИКАЛЬНОСТЬ BIODESIGN POOLS" title="УНИКАЛЬНОСТЬ BIODESIGN POOLS"/></Col>
                    <Col lg={6} xl={6} md={12} sm={12} className={"content-block-txt text-down"}>
                        <p>
                        Команда технических специалистов <span className="upperBold">KUPIBAS GROUP </span>может установить Biodesign площадью 20 кв. м &#34;под ключ&#34; за 10 рабочих дней, в комплекте с системой фильтрации, кромкой, воздушными струями, гидромассажными струями и освещением, и все это без необходимости прерывать работы на объекте. Это исключение лишних неудобств для Вас, как пользователя и вреда с точки зрения состояния окружающей среды. </p>
                        <p>
                        Выбор проекта песчаного пляжа, строительство и обслуживание объекта – всё должно быть максимально комфортным для клиента при работе с нашей компанией! Для этого мы с 2008 г. оптимизируем и отлаживаем все бизнес-процессы и поддерживаем сотрудничество только с надежными поставщиками лучшего оборудования,  материалов и передовых технологий. А Вы можете отдыхать в бассейнах, построенных нами и наслаждаться его совершенством!

                        </p>
                    </Col>
                </Row>
            </section>
            <div className={'pagep-bg__block-wrapp'}>
                <div className={`pagep-bg__block-${light} pagep-bg__block-top-tech-link`}></div>  
            </div>
            <LinkTileCatalog light={light}/>
            <div className={`KupibasTitleh2 about-page  ${light}` }>
                    <h3>
                        Партнерство
                    </h3>
                    <h2><div className={'decor-bg-word-gallery bold upper'}>KUPIBAS GROUP!</div></h2>
            </div>

              <section className={`mainContainer`}>
                <Row className={'content-block-img-txt'}>
                    <Col lg={6} xl={6} md={6} sm={12} ><img src="/about/image 31.jpg" alt="УНИКАЛЬНОСТЬ BIODESIGN POOLS" title="УНИКАЛЬНОСТЬ BIODESIGN POOLS"/></Col>
                    <Col lg={6} xl={6} md={6} sm={12} className={`content-block-txt text-down ${light}`}>
                        <p>
                            Сделайте выбор в пользу эстетики и неинвазивного подхода к экологии!</p>
                           <p> <a href={'/biodesign'}>BIODESIGN POOLS</a> -  это комплексное решение обустройства бассейна и прилегающей территории, в которое входит дизайн пляжа с продуманной зоной отдыха, бассейном с зонами для плавания и развлечений, фильтрацией, освещением и т.п. Поэтому Ваши фантазии могут быть смелее обычных!</p>
                            <p>
                            При создании проектов дизайнеры имеют возможность использовать запатентованные материалы и технологии, применяя и комбинируя их в зависимости от окружающей обстановки, ландшафта и предпочтений заказчика в любое время года.
                        </p>
                    </Col>
                </Row>
                <Row className={'content-block-img-txt'}>
                    <Col lg={6} xl={6} md={6} sm={12} className={"content-block-txt text-down"}>
                        <p>
                        Пляжи, склоны, террасы, гидромассажные кресла, шезлонги имеют высокий эстетический показатель и максимальную степень комфортности.
                        Все элементы, которые используются для устройства и создания различных композиций экологичны и адаптированы к длительному воздействию водной среды, поэтому такой бассейн может быть полностью персонализирован под Ваши желания.</p>
                        <p>
                        И если Вы ландшафтный дизайнер или потенциальный дилер, ищите готовое решение для строительства бассейна сверхнового уровня, то Biodesign от компании </p>
                        <p>
                        <span className="bold"> KUPIBAS GROUP</span> - идеальный выбор!
                        </p>
                    </Col>
                    <Col lg={6} xl={6} md={6} sm={12} className={"bloc-order-2"}><img src="/about/image 32.jpg" alt="УНИКАЛЬНОСТЬ BIODESIGN POOLS" title="УНИКАЛЬНОСТЬ BIODESIGN POOLS"/></Col>
                </Row>
            </section>

            <section className={`mainContainer about-ifo-block`}>
            <p>Сотрудники компании KUPIBAS GROUP помогут с выбором и реализуют Ваши смелые идеи на высоком уровне. Инженеры KUPIBAS GROUP имеют большой опыт реализации подобных проектов, полностью соблюдая технологию компании-производителя. KUPIBAS GROUP гарантирует наилучшие условия приобретения и заявленное качество применяемых материалов и выполненных работ.</p>

            <div className="about-ifo-block-rec">Общество с ограниченной ответственностью «Купибас Трейд»</div>
            <div className="about-ifo-block-rec">Юр. адрес: 344064, г. Ростов-на-Дону, ул. Особенная, д. 116</div>
            <div className="about-ifo-block-rec">Тел.: (800) 350-75-60, (863) 322-60-19 </div>
            <div className="about-ifo-block-rec">e-mail: info@kupibas.ru</div>
            <div className="about-ifo-block-rec">ИНН 6165203490, КПП 616501001, БИК 046015602</div>
            <div className="about-ifo-block-rec">Р/с 40702810552090027499, К/с 30101810600000000602, ЮГО-ЗАПАДНЫЙ БАНК ПАО СБЕРБАНК, г. Ростов-на-Дону</div>
            <div className="about-ifo-block-rec">ОГРН 1166196099585, ОКПО 04695447, ОКВЭД 45.11.2, 45.11.3, 45.11.31, 45.11.39, 46.46, 46.49.3, 46.49.49, 46.73.3, 46.75.1, 46.75.2, 46.76, 46.90, 47.61, 47.78.9, 47.81, 47.89, 47.91.2.</div>
            <div className="about-ifo-block-rec">Управляющий (на основании Устава) - Белоглазов Виктор Юрьевич</div>

            </section>


        </>
    )
    
}