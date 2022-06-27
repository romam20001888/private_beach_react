
import React from 'react';
import LazyLoad from 'react-lazyload'
import CatalogSlider from '../components/CatalogSlider'
import TableCatalog from "../components/TableCatalog"
import { Card, CardGroup,Row, Col,Form,Button,Table  } from 'react-bootstrap'
import ModalBtn from "../components/ModalBtn"

export default function SectionElement({num,setalertModal,index,sliderslickGoToClickFun,sliderslickGoToClick,light,SetInfoTable,openImageModal,
    activeElement,
    Modalbymore,
    ModalModalbymore,
    ModalbymoreGlobal,
    ModalModalbymoreGlobal,
    setactiveElement,
    activeHoverElement,
    setactiveHoverElement,
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
    ModalTextResulteFunc}) {
    return (
        <>
            <div className={`gallery-tab__wrapp`} key={num}>
                <div key={`${num}-gallery-tab__txt`} className={`gallery-tab__txt`}>
                    <h4 key={`${num}-h4-1`}>{index.name}</h4>
                    <p key={`${num}-p-1`}>{index.description}</p>
                </div>
                <div className={`catalog-txt-right`}>Размеры указаны в метрах. Длина и ширина включают внешний край 0,3 м.</div>
                <TableCatalog
                            Modalbymore={Modalbymore}
                            ModalModalbymore={ModalModalbymore}
                            ModalbymoreGlobal={ModalbymoreGlobal}
                            ModalModalbymoreGlobal={ModalModalbymoreGlobal}
                            activeElement={activeElement}
                            setactiveElement={setactiveElement}
                            activeHoverElement={activeHoverElement}
                            setactiveHoverElement={setactiveHoverElement} 
                            funSliderRef={sliderslickGoToClickFun} 
                            key={`${num}-TableCatalog-1`} 
                            light={light}  
                            tableInfo={index.table} 
                            tableId={num} 
                            SetInfoTable={SetInfoTable}
                />
                <Row key={`${num}-Row-1`}>
                    <Col key={`${num}-Col-1`}className={`gallery-tab__slide`}>
                        <CatalogSlider openImageModal={openImageModal} funSliderRef={sliderslickGoToClick} tableId={num} key={`${num}-CatalogSlider-1`} light={light} imagesSlider={index.slider} />
                    </Col>
                    <Col key={`${num}-Col-2`} className={`gallery-tab__img`}>
                        {index.images?.map((indexImages,numImages) => {
                            return (
                                <LazyLoad key={`${numImages}-LazyLoad-1`}>
                                    <img key={`${numImages}-img-1`} src={`/day${indexImages.image}`} alt={indexImages.alt} title={indexImages.title}/>
                                </LazyLoad>
                            );
                        })}
                    </Col>
                </Row>
                <div className={`gallery-tab__buy`} id={'PROD-WRAPP'}>
                    <div className="catalog-btn__title">
                    {/* <div className="decor-bg-word decor-bg-word-catalog__ithem"></div> */}
                    <h4 key={`${num}-h4-2`}>Для заказа этой модели бассейна выберите подходящий по размерам тип в таблице и нажмите кнопку заказа для оформления запроса на <span className="decor-bg-word"><span className="decor-bg-word__ithem-catalog3"></span>расчет!</span> </h4>
                    
                    </div>

                    {/* <ModalBtn 
                        ModalTextResulteFunc={ModalTextResulteFunc}
                        setalertModal={setalertModal}
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
                    /> */}
                </div>
            </div>
        </>
    )
}