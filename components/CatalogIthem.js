import React,{useState} from "react"
import Router from "next/router"
import SectionElement from "../components/SectionElement"

import CatalogTable from "../const/catalog"
import { Link, animateScroll as scroll } from "react-scroll";

export default function CatalogIthem({
    light,
   
    activeElement,
    setactiveElement,
    activeHoverElement,
    setactiveHoverElement,
    Modalbymore,
    ModalModalbymore,
    ModalbymoreGlobal,
    ModalModalbymoreGlobal,
    openImageModal,
    ModalTextResulteFunc,
    setalertModal,
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
    }){
    function SetInfoTable(tableId,rowId) {
        var name = CatalogTable[tableId].name;
        var type = CatalogTable[tableId].table.type.value[rowId];
        var length = CatalogTable[tableId].table.length.value[rowId];
        var width = CatalogTable[tableId].table.width.value[rowId];
        var depth = CatalogTable[tableId].table.depth.value[rowId];
        var nullik = tableId;
        if(CatalogTable[tableId].elementId[rowId]>=0){
            sliderslickGoToClick[tableId]=CatalogTable[tableId].elementId[rowId]
        }
        sliderslickGoToClickFun(sliderslickGoToClick)
        setFormContactbasName(name)
        setFormContactbasType(type)
        setFormContactbasLength(length)
        setFormContactbasWidth(width)
        setFormContactbasDepth(depth)
        setFormContactbasNullik(nullik)
    }
    
	// const [activeElement, setactiveElement] = useState({"row":null,"tableId":null})
	// const [activeHoverElement, setactiveHoverElement]=useState({"row":null,"tableId":null})
    const [sliderslickGoToClick, sliderslickGoToClickFun] = useState({});
    return(
        <>
            <section className={`mainContainer`}>
                {CatalogTable.map(function(index,num) {
                    return(
                        <SectionElement 
                            Modalbymore={Modalbymore}
                            ModalModalbymore={ModalModalbymore}
                            ModalbymoreGlobal={ModalbymoreGlobal}
                            ModalModalbymoreGlobal={ModalModalbymoreGlobal}
                            activeElement={activeElement}
                            setactiveElement={setactiveElement}
                            activeHoverElement={activeHoverElement}
                            setactiveHoverElement={setactiveHoverElement}
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
                            key={num} 
                            num={num} 
                            setalertModal={setalertModal} 
                            ModalTextResulteFunc={ModalTextResulteFunc} 
                            light={light} 
                            openImageModal={openImageModal} 
                            SetInfoTable={SetInfoTable} 
                            sliderslickGoToClick={sliderslickGoToClick} 
                            sliderslickGoToClickFun={sliderslickGoToClickFun} 
                            index={index} 
                        />
                    )
                })}
            </section>
            
        </>
    )
}