import React, {useState,useEffect} from "react"
import Router from "next/router"
import { useRouter } from "next/router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft,faChevronRight } from '@fortawesome/free-solid-svg-icons'
const Navig = (params) =>{
    const [navigations, setNavigations] = useState([])
    useEffect(() => {
        setNavigations(params.datanavigation)
    }, [params]);
    const router = useRouter();
    if(Number(navigations.LAST_PAGE)==1){
        return (<> </>)
    }
    if(Number(navigations.NUMBER_PAGE)==1){
        return (
            <>
                <span className={`NUMBER_PAGE`}>{Number(navigations.NUMBER_PAGE)}&nbsp;</span>
                <span onClick={()=>{params.setNumPageStatEl((Number(navigations.NUMBER_PAGE)+1))}}>{(Number(navigations.NUMBER_PAGE)+1)}</span>&nbsp;
                ...&nbsp;<span onClick={()=>{params.setNumPageStatEl((navigations.LAST_PAGE))}}>{navigations.LAST_PAGE}</span>&nbsp;
                <span onClick={()=>{params.setNumPageStatEl((Number(navigations.NUMBER_PAGE)+1))}}><FontAwesomeIcon icon={faChevronRight} /></span>&nbsp;
            </>
        )
    }
    if(Number(navigations.NUMBER_PAGE)==navigations.LAST_PAGE){
        return (
            <>
                <span onClick={()=>{params.setNumPageStatEl((Number(navigations.NUMBER_PAGE)-1))}}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                    </span>&nbsp;
                <span onClick={()=>{params.setNumPageStatEl(1)}}>1</span> &nbsp; ... &nbsp;
                <span onClick={()=>{params.setNumPageStatEl((navigations.LAST_PAGE-1))}}>{(navigations.LAST_PAGE-1)}</span>&nbsp;
                {navigations.LAST_PAGE}&nbsp;
            </>
        )
    }
    if(Number(navigations.NUMBER_PAGE)==2){
        return (
            <>
                <span onClick={()=>{params.setNumPageStatEl(1)}}><FontAwesomeIcon icon={faChevronLeft} /></span>&nbsp;
                <span onClick={()=>{params.setNumPageStatEl(1)}}>{(Number(navigations.NUMBER_PAGE)-1)}</span>&nbsp;
                <span className={`NUMBER_PAGE`}>{Number(navigations.NUMBER_PAGE)}&nbsp;</span>
                <span onClick={()=>{params.setNumPageStatEl((Number(navigations.NUMBER_PAGE)+1))}}>{(Number(navigations.NUMBER_PAGE)+1)}</span>&nbsp;
                ...&nbsp;<span onClick={()=>{params.setNumPageStatEl((navigations.LAST_PAGE))}}>{navigations.LAST_PAGE}</span>&nbsp;
                <span onClick={()=>{params.setNumPageStatEl((Number(navigations.NUMBER_PAGE)+1))}}><FontAwesomeIcon icon={faChevronRight} /></span>&nbsp;
            </>
        )
    }
    return (
        <>
            <span onClick={()=>{params.setNumPageStatEl((Number(navigations.NUMBER_PAGE)-1))}}><FontAwesomeIcon icon={faChevronLeft} /></span>&nbsp;
            <span onClick={()=>{params.setNumPageStatEl((Number(navigations.NUMBER_PAGE)-1))}}>{(Number(navigations.NUMBER_PAGE)-1)}</span>&nbsp;
            <span className={`NUMBER_PAGE`}>{Number(navigations.NUMBER_PAGE)}&nbsp;</span>
            <span onClick={()=>{params.setNumPageStatEl((Number(navigations.NUMBER_PAGE)+1))}}>{(Number(navigations.NUMBER_PAGE)+1)}</span>&nbsp;
            ...&nbsp;<span onClick={()=>{params.setNumPageStatEl((navigations.LAST_PAGE))}}>{navigations.LAST_PAGE}</span>&nbsp;
            <span onClick={()=>{params.setNumPageStatEl((Number(navigations.NUMBER_PAGE)+1))}}><FontAwesomeIcon icon={faChevronRight} /></span>&nbsp;
        </>
    )
}
export default Navig