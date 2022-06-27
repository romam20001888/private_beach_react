import React, { useState , useCallback } from 'react'
import { Navbar,Nav, Container,Row } from 'react-bootstrap'
import pagesNav from "../const/index"
import { useRouter } from "next/router";
export default function NaviBar({updateData,light}){
    const router = useRouter();
    function setlight() {
        if(light=="day"){
            localStorage.setItem('light', "night");
            updateData("night")
        }else{
            localStorage.setItem('light', "day");
            updateData("day")
        }
    }
    function openDZEN(){
        ym(52791373,'reachGoal','soshal')
        window.open('https://zen.yandex.ru/id/623023ccd50bc127b166321a/', "_blank")
    }
    function vkantakte(){
        ym(52791373,'reachGoal','soshal')
        window.open('https://vk.com/public211966100', "_blank")
    }
    return(
        <>
                <Navbar className={`mainHeader navbar-${light}`} collapseOnSelect expand="xl">       
                        <Navbar.Brand><a href={`/`} ><img src={`/${light}/logo.svg`} alt="qpkupibas logo" /></a></Navbar.Brand> 
                        <Navbar.Collapse className="justify-content-end">
                        <div className={`navbar-navigate light-info-${light}`}>
                            <div className="navbar-contacnt__wrapp">
                                <div className="navbar-contacnt">
                                    <div className={`header-tel`}>
                                        <a href={'tel:88003507560'}> 8 (800) 350-75-60</a> 
                                    </div>
                                    <div className='header-social'>
                                        <a target="_blank" rel='noreferrer' onClick={vkantakte}><img src={`/${light}/ic-inst.svg`} alt="vk" /></a>
                                    </div>
                                    <div className={`social-board`}>|</div>
                                    <div className='header-social'>
                                        <a target="_blank" rel='noreferrer' onClick={openDZEN}><img style={{display:"block !important"}} src={`/${light}/ic-fb.svg`} alt="dzen" /></a></div>
                            </div>
                            <div className={`ic-night light-info-day`} onClick={setlight}><span><img src={`/${light}/ic-light.svg`} alt="light" /></span></div>
                        </div>
                            <nav className="justify-content-end header-nav">
                                {pagesNav.map((index,num) => {
                                    return (
                                        <a key={num} href={index.url} className={`top-menu__link nav-menu-${light} ${router.pathname==index.url?"active":""}`} >{index.name}</a>
                                    );
                                })}
                            </nav>
                        </div>
                        </Navbar.Collapse>
                </Navbar>
                
        </>
    )
}