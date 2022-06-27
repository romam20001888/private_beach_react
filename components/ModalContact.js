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

export default function ModalContact({
    activeElement,
    setactiveElement,
    activeHoverElement,
    setactiveHoverElement,
        light,
        setShow,
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
        setFormContactbasNullik
    }){
    const router = useRouter();
    const [formContactName, setFormContactName] = useState("")
    const [formContactAddres, setFormContactAddres] = useState("")
    const [formContactPhone, setFormContactPhone] = useState("")
    const [formContactEmail, setFormContactEmail] = useState("")
    const [formContactComment, setFormContactComment] = useState("")
    const [ErrorForms, setErrorFormsComment] = useState("")
    const [ButtonLoad,SetButtonLoad]=useState(false)
    
    // const [activeElement, setactiveElement] = useState({"row":null,"tableId":null})
	// const [activeHoverElement, setactiveHoverElement]=useState({"row":null,"tableId":null})

    

    async function uploadBitrix(){
        SetButtonLoad(true)
        let response = await fetch(
            'https://kupibas.info/rest/1814/i0tchbp8h1p26zhh/crm.lead.add.json?fields[TITLE]='+"Лид с сайта собственный-пляж.рф (каталог)"
            +"&fields[ASSIGNED_BY_ID]=1575"
            +"&fields[NAME]="+formContactName

            +"&fields[UF_CRM_1647854479]="+formContactbasDepth
            +"&fields[UF_CRM_1647854513]="+formContactbasWidth
            +"&fields[UF_CRM_1647854522]="+formContactbasLength
            +"&fields[UF_CRM_1647854533]="+formContactbasType
            +"&fields[UF_CRM_1647854542]="+formContactbasName

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
                ModalTextResulteFunc("Спасибо! Ваша заявка отправлена")
                setalertModal("-show")
                setShow(false)
                setFormContactName('')
                setFormContactAddres('')
                setFormContactPhone('')
                setFormContactEmail('')
                setFormContactbasName('')
                setFormContactbasType('')
                setFormContactbasLength('')
                setFormContactbasWidth('')
                setFormContactbasDepth('')
                setFormContactComment('')
                setErrorFormsComment('')
                setactiveElement({"row":null,"tableId":null})
                // setactiveHoverElement({"row":null,"tableId":null})
            }else{
                setErrorFormsComment(result.error_description.split('<br />').join(''))
            }
            SetButtonLoad(false)
        });
    }
    function uploadContactsForm(){
        if(formContactName==""){
            setErrorFormsComment("Поле 'Ваше имя' пустое")
        }
        else if(formContactAddres==""){
            setErrorFormsComment("Поле 'Адрес обьекта' пустое")
        }
        else if((formContactPhone=="") || (ValidPhone(formContactPhone)==false)){
            setErrorFormsComment("Неверный номер телефона")
        }
        else if(formContactEmail==""){
            setErrorFormsComment("Поле 'E-mail' пустое")
        }
        else{
            uploadBitrix()
        }
    }
    
    return(
        <div className={`main-section-${light}`}>
            
                <Row>
                    <Col lg={`12`} xl={`12`} md={`12`} sm={`12`} className={`modal-cont__wrapp`}>

                        <div className={'contact-form-wrapp-input Modalcontact-form-wrapp-input'} id={'CONTACT-PROD'}>
                        <div className={`contact-form-txt`}>
                            <h3>Свяжитесь с нами!</h3>
                                <div className={`contact-form-txt-margin contact-form-txt-p`}>Чтобы сделать заказ или получить дополнительную информацию - свяжитесь с нами или заполните форму ниже.</div>
                                    <div className={`contact-form-txt-p`}>Расчет будет произведен в течение 12 ч.</div>
                            </div>
                                {ErrorForms!=""?(
                                    <div className={`contact-alert__wrapp`}>
                                        {ErrorForms}
                                    </div>
                                ):""}
                                
                                    <Form.Group className="mb-3" controlid="formGridName">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Ваше имя*"
                                        className="mb-3"
                                    >
                                        <Form.Control  placeholder="Ваше имя*" onInput={(event)=>{setFormContactName(event.target.value)}}/>
                                    </FloatingLabel>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlid="formGridAddress1">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Адрес объекта*"
                                        className="mb-3"
                                    >
                                        <Form.Control placeholder="Адрес объекта*" onInput={(event)=>{setFormContactAddres(event.target.value)}}/>
                                    </FloatingLabel>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlid="formGridPhone">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Телефон*"
                                        className="mb-3"
                                    >
                                        
                                    <InputMask 
                                        name='phoneNumber' 
                                        placeholder="Телефон*"  
                                        mask='8 (999) 999-99-99'  
                                        className="form-control"
                                        onChange={(event)=>{setErrorFormsComment("");setFormContactPhone(event.target.value)}}>
                                    </InputMask>
                                    </FloatingLabel>
                                        {/* <Form.Control placeholder="Телефон*" onInput={(event)=>{setFormContactPhone(event.target.value)}}/> */}
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlid="formGridMail">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="E-mail*"
                                        className="mb-3"
                                    >
                                        <Form.Control
                                         placeholder="E-mail*" 
                                         onInput={(event)=>{setFormContactEmail(event.target.value)}}/>
                                    </FloatingLabel>
                                    </Form.Group>
                                    {router.pathname=="/catalog"?(
                                        <>
                                          <Form.Group className="mb-3" controlid="basName">
                                          <FloatingLabel
                                        controlId="floatingInput"
                                        label="Модель бассейна*"
                                        className="mb-3 inp-disable"
                                    >
                                            <FormControl placeholder="Модель бассейна*" value={formContactbasName} onInput={(event)=>{setFormContactbasName(event.target.value)}}/>
                                        </FloatingLabel>
                                        </Form.Group>
                                            {/* <Form.Group className="mb-3" controlid="basName">
                                                <Form.Control placeholder="Название*" value={formContactbasName} onInput={(event)=>{setFormContactbasName(event.target.value)}}/>
                                                
                                            </Form.Group> */}
                                          <Form.Group className="mb-3" controlid="basType">
                                          <FloatingLabel
                                                controlId="floatingInput"
                                                label="Тип*"
                                                className="mb-3 inp-disable"
                                            >
                                            <FormControl placeholder="Тип*" value={formContactbasType} onInput={(event)=>{setFormContactbasType(event.target.value)}}/>
                                        </FloatingLabel>
                                        </Form.Group>
                                            {/* <Form.Group className="mb-3" controlid="basType">
                                                <Form.Control placeholder="Тип*" value={formContactbasType} onInput={(event)=>{setFormContactbasType(event.target.value)}}/>
                                            </Form.Group> */}
                                            <div className='CONTACT-PROD__wrapp'>
                                                <Col sm={`4`} className='CONTACT-PROD' >
                                                <label htmlFor='Length-prod'>
                                                    <InputGroup  className="mb-3 sm-3" controlid="basLength">
                                                        {/* <InputGroup.Text >Длина</InputGroup.Text> */}
                                                        <FloatingLabel
                                                        controlId="floatingInput"
                                                        label="Длина, м"
                                                        className="CONTACT-PROD__ithem inp-disable"
                                                        >
                                                            <FormControl className='Length-prod'aria-label="First name"  value={formContactbasLength} onInput={(event)=>{setFormContactbasLength(event.target.value)}} />
                                                            </FloatingLabel>
                                                        {/* <InputGroup.Text>м</InputGroup.Text> */}
                                                    </InputGroup>
                                                </label>

                                                </Col>
                                                <Col sm={`4`}>
                                                <label htmlFor='Width-prod'>
                                                <InputGroup className="mb-3 sm-3" controlid="basWidth">
                                                    {/* <InputGroup.Text>Ширина</InputGroup.Text> */}
                                                    <FloatingLabel
                                                        controlId="floatingInput"
                                                        label="Ширина, м"
                                                        className="CONTACT-PROD__ithem inp-disable"
                                                        >
                                                        <FormControl className='Width-prod' aria-label="First name"  value={formContactbasWidth} onInput={(event)=>{setFormContactbasWidth(event.target.value)}} />
                                                    
                                                </FloatingLabel>
                                                {/* <InputGroup.Text>м</InputGroup.Text> */}
                                                </InputGroup>
                                                </label>
                                                </Col>
                                                <Col sm={`4`}>
                                                <label htmlFor='Depth-prod'>
                                                    <InputGroup className="mb-3 sm-3" controlid="basDepth">
                                                        {/* <InputGroup.Text>Глубина</InputGroup.Text> */}
                                                        <FloatingLabel
                                                        controlId="floatingInput"
                                                        label="Глубина, м"
                                                        className="CONTACT-PROD__ithem inp-disable"
                                                        >
                                                            <FormControl className='Depth-prod' aria-label="First name"  value={formContactbasDepth} onInput={(event)=>{setFormContactbasDepth(event.target.value)}} />
                                                       
                                                    </FloatingLabel>
                                                    {/* <InputGroup.Text>м</InputGroup.Text> */}
                                                    </InputGroup>
                                                </label>

                                                </Col>
                                            </div>
                                        </> 
                                    ):""}
                                    <Form.Group className="contact-comment" >
                                    <FloatingLabel
                                        controlid="floatingTextarea2"
                                        label="Комментарий"
                                        className=""
                                    >
                                        <Form.Control 
                                         placeholder="Комментарий" 
                                         onInput={(event)=>{setFormContactComment(event.target.value)}}
                                         />
                                    </FloatingLabel>
                                    </Form.Group>
                                    
                                <Row className={'contact-form-wrapper-btn'}>
                                    <Col xl={`7`} lg={`7`} md={`12`} sm={`12`} className={'contact-polit'}>
                                        Нажимая кнопку &quot;Заказать расчет&quot; Вы соглашаетесь на обработку персональных данных в соответствии с ФЗ от 27.07.2006 г. №152-ФЗ, на условиях и для целей, определенных в  <a href={`/privacy-policy/`} target="blank"> Политике конфиденциальности</a>
                                    </Col>
                                    <Col xl={`5`} lg={`5`} md={`12`} sm={`12`} className={`contact-btn__wrapp${ButtonLoad===false?"":"-loaded"}`}>
                                        <button className={`contact-btn Container-Form-Button${ButtonLoad===false?"":"-loaded"}`} onClick={ButtonLoad===false?uploadContactsForm:function () {}  }>
                                            Заказать расчет
                                        </button>
                                    </Col>
                                </Row>
                        </div>

                    </Col>
                </Row>
        </div>
        
        

    )
}

