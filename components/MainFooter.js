
import { Card, CardGroup,Row, Col,Form,Button,FloatingLabel   } from 'react-bootstrap'
export default function MainFooter({updateData,light}){
    return(
        <footer className={`footer-${light}`}>
            {/* <div className={'footer-waves-wrapp'}>

                <div className={'footer-wave footer-wave1'}></div>
                <div className={'footer-wave footer-wave2'}></div>
                <div className={'footer-wave footer-wave3'}></div>
                <div className={'footer-wave footer-wave4'}></div>
            </div> */}



            <div className={'footer-link-wrapp'}>
                <div className={`footer-logo ${light}`}>
                    <img src={`/${light}/footer-logo.svg`} alt="logo qpkupibas"/>
                    <div className={`footer-circle__wrapp`}>
                        <div className={`footer-circle`}></div>
                        <div className={`footer-circle`}></div>
                        <div className={`footer-circle`}></div>
                    </div>


                </div>
                <div className={`vertical-line__footer`}></div>
                <div className={'footer-time-work'}>
                    <ul>
                        <li>г. Ростов-на-Дону, ул. Особенная 116</li>
                        <li>Пн-Пт: 9.00-18.00 Сб-Вс: выходной</li>
                            <li className='footer-phone'>
                                 <a href={'tel:88003507560'}>8 (800) 350-75-60;&nbsp; </a>
                                <a href={'tel:88633226019'}>8 (863) 322-60-19; </a>
                            </li>
                        <li>
                        <a href={'mailto:info@kupibas.ru'}>info@kupibas.ru</a>
                        </li>
                    </ul>
                </div>

            </div>
            <div className={'footer-copyright'}>
                    <div>© 2022 Сайт создан <a href='https://twcompany.ru/' rel="noreferrer" target="_blank">TW company</a>. Все права защищены.</div>
                    <div>Материалы использованы на сайте с разрешения правообладателя:</div>
                    <br></br>
                    <div>
                    API Italia SRL Via Terradura, 106 - 35020 Maserà di Padova (PD) <div>Тел. +39.049.88.62.961 - +39.88.63.067 Факс. +39.049.88.69.414 CF / P. Iva: 05842170150 - Numero iscrizione registro imprese di Padova: 05842170150 Capitale Sociale: € 46,800,00 iv - REA.</div>
                    </div>
                </div>
        </footer>
    )
}