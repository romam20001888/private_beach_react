import React from "react"
import Router from "next/router"
import Link from 'next/link'
import LazyLoad from 'react-lazyload';
import { Card, CardGroup,Row, Col,Form,Button,Table  } from 'react-bootstrap'
import CatalogSlider from '../../components/CatalogSlider'
import TableCatalog from "../../components/TableCatalog"
import CatalogIthem from "../../components/CatalogIthem"
import Head from 'next/head'

export default function Catalog({

   
    activeElement,
    setactiveElement,
    activeHoverElement,
    setactiveHoverElement,
        light,
        ModalTextResulteFunc,
        setalertModal,
        openImageModal,
        formContactbasName,
        formContactbasType,
        formContactbasLength,
        formContactbasWidth,
        formContactbasDepth,
        formContactbasNullik,
        setFormContactbasName,
        setFormContactbasType,
        setFormContactbasLength,
        setFormContactbasWidth,
        setFormContactbasDepth,
        setFormContactbasNullik,
        Modalbymore,
        ModalModalbymore,
        ModalbymoreGlobal,
        ModalModalbymoreGlobal,
    }){
        React.useEffect(() => {
            var showHide = document.querySelector('.modal-btn__hide');
            var ShowBlock = document.querySelector('.ShowBlock');
            var HideBlock = document.querySelector('.HideBlock');
            HideBlock.onclick = function(){
                showHide.classList.add("hideBlock")
            }
            ShowBlock.onclick = function(){
                showHide.classList.remove("hideBlock")
            }
        })
    return(
        <>
        <Head>
            <meta name="description" content="Пляжные бассейны BIODESIGN в каталоге QPkupibas: разнообразные формы, размеры под любой участок, 12 моделей" />
        </Head>
        <div className={`head-margin ${light}`}></div>

            <div className={`mainContainer`}>
                <div className="title-page__50-center">
                    <h1>Каталог бассейнов &nbsp;
                        <span className="title-upper-page ">BIODESIGN POOLS</span>
                        &nbsp; от &nbsp;
                     <span className="title-upper-page">KUPIBAS</span>
                      <span className="decor-bg-word title-upper-page bold"><span className="decor-bg-word__ithem-catalog1">
                          </span>&nbsp;GROUP</span>
                     </h1>
                </div>
            </div>

            <section className={`mainContainer ${light}`}>
                <Row className={'content-block-img-txt'}>
                    <Col lg={6} xl={6} md={12} sm={12} className={"content-block-txt text-top content-block-txt-catalog"}>
                        <p>
                            С бассейнами Biodesign Вы можете создать уникальный объект, а не просто оформить зону отдыха для любого времени года!</p>
                            <p><a href={'/biodesign'}>Biodesign</a> позволяет саду стать частным SPA-салоном с возможностью размещения гидромассажа, гейзеров для аэромассажа, кресел-шезлонгов и плавательных зон. Отделка натуральным камнем в сочетании с водой, обогащенной полезными минералами, такими как гималайские соли, делают бассейн не только местом веселья, но и местом для релаксации и медитации.</p>
                           <p>Biodesign - это <a href={'/technologies'}>технология строительства</a>, которая требует минимального вложения средств, предусматривает быструю установку и минимум подготовки, что исключает необходимость проведения крупных работ по восстановлению территории после монтажа бассейна.</p>
                           <p> Выберите форму бассейна, следуя Вашему воображению, украсив каждую деталь Вашего райского уголка!</p>
                    </Col>
                    <Col lg={6} xl={6} md={12} sm={12} className={"content-block-img content-block-img-catalog"}>
                        <div className={`water-effect__img-catalog`}>
                            <img src="/day/catalog/image 39.jpg" alt="Biodesign" title="Biodesign"/>
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                        <defs>   
                            <filter id="goovey">
                                    <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="1" result="warpper"/>
                                <feColorMatrix in="warpper" type="hueRotate">
                                        <animate attributeType="XML" attributeName="values" values="0;110;150;210;360" dur="2s" repeatCount="indefinite"/>
                                </feColorMatrix>
                                <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="20" in="SourceGraphic"/>
                            </filter>
                        </defs>
                        </svg>
                        </div>
                    </Col>
                    <Col lg={12} xl={12} md={12} sm={12} className={`catlog-small__img`}>
                        <div>
                            <img src="/day/catalog/image 40 1.jpg" alt="Biodesign performans" title="Biodesign performans" />
                        </div>
                    </Col>
                </Row>
            </section>
            <div className={'pagep-bg__block-wrapp'}>
                <div className={`pagep-bg__block-${light} pagep-bg__block-top-catalog`}></div>  
            </div>
            <div className={`KupibasTitleh2 KupibasTitleh2-catalog ${light}`}>
                
                <h3 className={``}>Модели бассейнов <span className=" main-yelow__span decor-bg-word"><span className="decor-bg-word__ithem-catalog"></span>BIODESIGN</span></h3>
            </div>
            <CatalogIthem 
   
                activeElement={activeElement}
                setactiveElement={setactiveElement}
                activeHoverElement={activeHoverElement}
                setactiveHoverElement={setactiveHoverElement}
                Modalbymore={Modalbymore}
                ModalModalbymore={ModalModalbymore}
                ModalbymoreGlobal={ModalbymoreGlobal}
                ModalModalbymoreGlobal={ModalModalbymoreGlobal}
                openImageModal={openImageModal}
                ModalTextResulteFunc={ModalTextResulteFunc}
                setalertModal={setalertModal} 
                light={light}
                formContactbasName={formContactbasName}
                formContactbasType={formContactbasType}
                formContactbasLength={formContactbasLength}
                formContactbasWidth={formContactbasWidth}
                formContactbasDepth={formContactbasDepth}
                formContactbasNullik={formContactbasNullik} 
                setFormContactbasName={setFormContactbasName}
                setFormContactbasType={setFormContactbasType}
                setFormContactbasLength={setFormContactbasLength}
                setFormContactbasWidth={setFormContactbasWidth}
                setFormContactbasDepth={setFormContactbasDepth}
                setFormContactbasNullik={setFormContactbasNullik}
            />
            <section className={`mainContainer`}>
                <div className="text-center-catalog">
                    <p>Технология Biodesign, используемая для строительства бассейнов и защищена международными технологическими патентами, зарегистрированными во многих странах мира. Несмотря на простоту монтажа и наличие натуральных материалов, это высокотехнологичный продукт, установкой которого может заниматься только лицензированный подрядчик - такой как <a href={`/about`} className="text-link">KUPIBAS GROUP!</a> 
                    Сотрудники нашей компании помогут с выбором и реализуют Ваши самые смелые идеи на высоком уровне. KUPIBAS GROUP гарантирует наилучшие условия приобретения и заявленное качество применяемых материалов и выполненных работ.
                    </p>
                </div>
            </section>

        </>
    )
    
}