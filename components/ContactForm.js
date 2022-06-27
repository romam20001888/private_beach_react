import {Card, CardGroup,Row, Col,Form,Button,FloatingLabel,InputGroup,FormControl   } from 'react-bootstrap'
import React, { useState } from 'react'
import LazyLoad from 'react-lazyload'
import { useRouter } from "next/router";
import { Link, animateScroll as scroll } from "react-scroll"
import InputMask from 'react-input-mask';


 
function ValidPhone(myPhone) {
    var re =/^[\d]{1}\ \([\d]{2,3}\)\ [\d]{2,3}-[\d]{2,3}-[\d]{2,3}$/;
    var valid = re.test(myPhone);
    return valid;
}  

export default function ContactForm({
        light,
        Modalbymore,
        ModalModalbymore,
        ModalbymoreGlobal,
        ModalModalbymoreGlobal,
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
    const router = useRouter();
    const [formContactName, setFormContactName] = useState("")
    const [formContactAddres, setFormContactAddres] = useState("")
    const [formContactPhone, setFormContactPhone] = useState("")
    const [formContactEmail, setFormContactEmail] = useState("")
    const [formContactComment, setFormContactComment] = useState("")
    const [ErrorForms, setErrorFormsComment] = useState("")
    const [ButtonLoad,SetButtonLoad]=useState(false)


    async function uploadBitrix(){
        SetButtonLoad(true)
        let response = await fetch(
            'https://kupibas.info/rest/1814/i0tchbp8h1p26zhh/crm.lead.add.json?fields[TITLE]='+"Лид с сайта собственный-пляж.рф (форма связи)"
            +"&fields[ASSIGNED_BY_ID]=1575"
            +"&fields[NAME]="+formContactName


            +"&params[WEB][0][VALUE_TYPE]=HOME&fields[WEB][0][VALUE]=Biodesign"
            +"&params[REGISTER_SONET_EVENT]=Y&fields[EMAIL][0][VALUE_TYPE]=WORK&fields[EMAIL][0][VALUE]="+formContactEmail
            +"&fields[PHONE][0][VALUE_TYPE]=WORK&fields[PHONE][0][VALUE]="+formContactPhone+"&fields[STATUS_ID]=NEW"
            +"&fields[ADDRESS]="+formContactAddres+"&fields[COMMENTS]="+formContactComment, 
            {
                method: 'GET',
            }
        )
        .then(response => response.json())
        .then(result => {
            if(result.result>0){
                ym(52791373,'reachGoal','send_form')
                ModalTextResulteFunc("Спасибо! Ваша заявка отправлена!")
                setalertModal("-show")
                setFormContactName('')
                setFormContactAddres('')
                setFormContactPhone('')
                setFormContactEmail('')
                setFormContactComment('')
                setErrorFormsComment('')
                
            }else{
                setErrorFormsComment(result.error_description.split('<br />').join(''))
            }
            SetButtonLoad(false)
        });
    }
    async function uploadContactsForm(){
        setErrorFormsComment("")
        if(formContactName===""){
                setErrorFormsComment("Поле 'Ваше имя' пустое")
        }
        else if(formContactAddres===""){
            setErrorFormsComment("Поле 'Адрес обьекта' пустое")
        }
        else if((formContactPhone=="") || (ValidPhone(formContactPhone)==false)){
            setErrorFormsComment("Неверный номер телефона")
        }
        else if(formContactEmail===""){
            setErrorFormsComment("Поле 'E-mail' пустое")
        }
        else{
            setErrorFormsComment("")
            uploadBitrix()
        }
    }
    return(
        <div className={`main-section-${light} wrapper-contact-form`} id="Contact-form">
            <div className={` ${light}`}>
                <Row>
                    <Col lg={`6`} xl={`6`} md={`6`} sm={`12`} className={`water-effect__img-wrapp ${light}`}>
                    <LazyLoad className={`water-effect__img`}>
                        <img src={`/${light}/bg-contact.jpg`} alt="Девушка под водой" title="Девушка под водой"/>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                        <defs>   
                            <filter id="goovey">
                                    <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="1" result="warpper"/>
                                <feColorMatrix in="warpper" type="hueRotate">
                                        <animate attributeType="XML" attributeName="values" values="0;110;150;210;360" dur="2s" repeatCount="indefinite"/>
                                </feColorMatrix>
                                <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="20" in="SourceGraphic"/>
                            </filter>
                        </defs>
                        </svg> */}
                    </LazyLoad>
                    </Col>
                    <Col lg={`6`} xl={`6`} md={`6`} sm={`12`} >
                        <div className={'contact-form-wrapp-input'} id={'CONTACT-PROD'}>
                            <div className={`contact-form-txt`}>
                            <h3>Свяжитесь с нами!</h3>
                                <div className={`contact-form-txt-p`}>Чтобы сделать заказ или получить дополнительную информацию - свяжитесь с нами или заполните форму ниже.</div>
                                    <div className={`contact-form-txt-p`}>Расчет будет произведен в течение 12 ч.</div>
                            </div>

                                {ErrorForms!=""?(
                                    <div className={`contact-alert__wrapp`}>
                                        {ErrorForms}
                                    </div>
                                ):""}
                                    <Form.Group className="form-input-wrapp" controlid="formGridName">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Ваше имя*"
                                        className=""
                                    >
                                        <Form.Control  placeholder="Ваше имя*" value={formContactName} onInput={(event)=>{setErrorFormsComment("");setFormContactName(event.target.value)}}/>
                                    </FloatingLabel>
                                    </Form.Group>

                                    <Form.Group className="form-input-wrapp" controlid="formGridAddress1">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Адрес объекта*"
                                        className=""
                                    >
                                        <Form.Control placeholder="Адрес объекта*" value={formContactAddres} onInput={(event)=>{setErrorFormsComment("");setFormContactAddres(event.target.value)}}/>
                                    </FloatingLabel>
                                    </Form.Group>

                                    <Form.Group className="form-input-wrapp" controlid="formGridPhone">
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Телефон*"
                                            className=""
                                        >
                                            <InputMask 
                                                name='phoneNumber' 
                                                placeholder="Телефон*"  
                                                mask='8 (999) 999-99-99'  
                                                className="form-control" 
                                                value={formContactPhone}
                                                onChange={(event)=>{setErrorFormsComment("");setFormContactPhone(event.target.value)}}>
                                            </InputMask>
                                            </FloatingLabel>
                                    </Form.Group>

                                    <Form.Group className="form-input-wrapp" controlid="formGridMail">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="E-mail*"
                                        className=""
                                    >
                                        <Form.Control
                                         placeholder="E-mail*" 
                                         value={formContactEmail}
                                         onInput={(event)=>{setErrorFormsComment("");setFormContactEmail(event.target.value)}}/>
                                    </FloatingLabel>
                                    </Form.Group>

                                    {/* <FloatingLabel controlid="floatingTextarea2">
                                   
                                        <Form.Control as="textarea" placeholder="Комментарий" 
                                        style={{ height: '60px'}}
                                        onInput={(event)=>{setFormContactComment(event.target.value)}}/>
                                
                                    </FloatingLabel> */}
                                    <Form.Group className="form-input-wrapp contact-comment" >
                                    <FloatingLabel
                                        controlid="floatingTextarea2"
                                        label="Параметры бассейна (длина, м*ширина, м*глубина, м)/ комментарий)"
                                        className=""
                                        
                                    >
                                        <Form.Control 
                                        value={formContactComment}
                                         placeholder="Параметры бассейна (длина, м*ширина, м*глубина, м)/ комментарий)" 
                                         onInput={(event)=>{setFormContactComment(event.target.value)}}
                                         />
                                    </FloatingLabel>
                                    </Form.Group>
                                    
                                <Row className={'contact-form-wrapper-btn contact-form-wrapper-btn-home'}>
                                    <Col xl={`7`} lg={`8`} md={`12`} sm={`12`} className={`contact-polit ${light}` }>
                                        Нажимая кнопку &quot;Заказать расчет&quot; Вы соглашаетесь на обработку персональных данных в соответствии с ФЗ от 27.07.2006 г. №152-ФЗ, на условиях и для целей, определенных в&nbsp;  
                                        <a href={`/privacy-policy/`} target="blank">Политике конфиденциальности</a>
                                    </Col>
                                    <Col xl={`5`} lg={`4`} md={`12`} sm={`12`} className={`contact-btn__wrapp${ButtonLoad===false?"":"-loaded"}`}>
                                        <button className={`contact-btn Container-Form-Button${ButtonLoad===false?"":"-loaded"}`} onClick={ButtonLoad===false?uploadContactsForm:function () {}}>
                                            Заказать расчет
                                        </button>
                                        
                                    </Col>
                                </Row>
                        </div>

                    </Col>
                </Row>
            </div>
        </div>
        
        

    )
}

