import React, { useState , useCallback } from 'react'
import {  Navbar,Container,Offcanvas,Nav,RowNav} from 'react-bootstrap'
import pagesNav from "../const/index"
import { useRouter } from "next/router";
export default function MobMenu({updateData,light,fixedHeader}){
    const router = useRouter();
    const [menuActive, setMenuActive] = useState("")
    function setActive() {
        if(menuActive=="active"){
            setMenuActive("")
            document.body.style.overflow = "scroll";
        }else{
            setMenuActive("active")
            document.body.style.overflow = "hidden";
        }
    }
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
        window.open('https://zen.yandex.ru/id/623023ccd50bc127b166321a/', "_blank")
    }
    function vkantakte(){
        ym(52791373,'reachGoal','soshal')
        window.open('https://vk.com/public211966100', "_blank")
    }
    return(
        <>
                <div className={`mob-menu`}>
                    <div className={'mob__burger-btn'} onClick={setActive} >
                        <span></span>
                    </div>
                    <Navbar.Brand className={`logo-tab-black mob${router.pathname=="/"?fixedHeader:""}${router.pathname=="/"?"-main-black":""}`}>
                            <a href={`/`}><img src={`/${light}/logo.svg`} alt="logo"/></a>
                    </Navbar.Brand>
                    <Navbar.Brand className={`logo-tab-white mob${router.pathname=="/"?fixedHeader:""}${router.pathname=="/"?"-main-white":""}`}>
                            <a href={`/`}><img src={`/night/logo.svg`} alt="logo" /></a>
                    </Navbar.Brand>
                    <div className={`header-tel`}>
                        <a href={'tel:88003507560'}>
                            <img src={`/${light}/header-mob-phone.svg`} alt="tel"/>
                        </a>
                        </div>

                </div>
                <div className={`mob-menu__content ${light}`}>
                        
                        <nav className={`mob-nav__menu ${menuActive} `}>
                            <div className={`mob-nav__close ${menuActive}`} onClick={setActive}>
                                <span><img src={`/${light}/close.svg`} alt="close"/></span>
                            </div>
                            <div className={'mob-menu-open__header-block'}>
                                <div className={'mob-menu-open__logo-block'}>
                                <Navbar.Brand>
                                    <a href={`/`}><img src={`/${light}/mob-menu-logo.svg`}  alt="menuLogo"/></a>
                                </Navbar.Brand>
                                    <div className={`ic-night light-info-day`} onClick={setlight}><span><img src={`/${light}/mob-menu-ic-light.svg`}  alt="info-day"/></span></div>
                                </div>
                                <div className={`mob-menu__tel`}>
                                <a href={'tel:88003507560'}> 8 (800) 350-75-60</a> 
                                </div>
                            </div>

                            {pagesNav.map(function(index,num) {
                                    return (
                                        <a key={num} href={index.url}  onClick={setActive} className={`top-menu__link nav-menu-${light} ${router.pathname==index.url?"active":""}`} >{index.name}</a>
                                    );
                                })}

                            <div className={`mob-menu__footer`}>
                                <div className={`mob-menu__social-wrapp`}>
                                    <div >
                                            <a onClick={vkantakte}>
                                            <img src={`/${light}/mob-menu-inst.svg`}  alt="vk"/>
                                            </a>
                                    </div>
                                        <div className={`social-board ${light}`}>|</div>
                                        <div>
                                                <a onClick={openDZEN}>
                                                <img src={`/${light}/mob-menu-fb.svg`}  alt="DZEN"/>
                                                </a>
                                        </div>
                                    </div>
                                <div className={`mob-menu__contacts ${light}`}>
                                    <div>г. Ростов-на-Дону, ул. Особенная 116</div>
                                    <div>Пн-Пт: 9.00-18.00 Сб-Вс: выходной</div>
                                    <div>
                                        <a href={'tel:88633226019'}>
                                            8 (863) 322-60-19;
                                        </a>
                                        <a href={'tel:88003507560'}>
                                        &nbsp; 8 (800) 350-75-60
                                        </a>
                                        </div>
                                    <div>
                                        <a href={'mailto:info@kupibas.ru'}>
                                            info@kupibas.ru
                                        </a>
                                    </div>
                                </div>

                                <div className={`mob-menu__polit ${light}`}>
                                    <div>© 2022 Сайт создан <a href='https://twcompany.ru/'>TW company</a>. Все права защищены.
                                    </div>
                                    <div>Материалы использованы на сайте с разрешения правообладателя:</div>
 <div>API Italia SRL Via Terradura, 106 - 35020 Maserà di Padova (PD) Тел. +39.049.88.62.961 - +39.88.63.067 Факс. +39.049.88.69.414 CF / P. Iva: 05842170150 - Numero iscrizione registro imprese di Padova: 05842170150 Capitale Sociale: € 46,800,00 iv - REA.</div>
                                </div>
                            </div>
                        </nav>

                    </div>
                <div className={`backModalMenu ${menuActive}`} onClick={setActive}>
                    
                </div>

        </>
    )

}