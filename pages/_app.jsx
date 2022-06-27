import '../styles/globals.css'
import '../styles/gallery.css'
import '../styles/AnimatePage.css'
import '../styles/TableCatalog.css'
import '../styles/night.css'
import '../styles/slider.css'
import '../styles/catalogSlider.css'
import '../styles/ContactForm.css'
import '../styles/NaviBar.css'
import '../styles/MainFooter.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import NaviBar from '../components/NaviBar'
import React,{ useState } from 'react'
import Router ,{ useRouter } from "next/router";
import MobMenu from '../components/MobMenu'
import MainFooter from "../components/MainFooter"
import ContactForm from '../components/ContactForm'
import pagesNav from "../const/index"
import Script from 'next/script'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


import ModalBtn from "../components/ModalBtn"

export default function MyApp({ Component, pageProps,handleClickEr }) {

  const router = useRouter();
  const [light, setLightinfo] = useState("day");
  const [fixedHeader, setfixedHeader] = useState("");
  const [alertModal, setalertModal] = useState("");
  const [ModalTextResulte, ModalTextResulteFunc] = useState("");

  const [Modalbymore, ModalModalbymore] = useState("");
  const [ModalbymoreGlobal, ModalModalbymoreGlobal] = useState("");

  async function openOrCroseByMore(param) {
    ModalModalbymore(param)
  }

  const [formContactbasName, setFormContactbasName] = useState("")
  const [formContactbasType, setFormContactbasType] = useState("")
  const [formContactbasLength, setFormContactbasLength] = useState("")
  const [formContactbasWidth, setFormContactbasWidth] = useState("")
  const [formContactbasDepth, setFormContactbasDepth] = useState("")
  const [formContactbasNullik, setFormContactbasNullik] = useState("")
  
  const [animatedPagesTest, setAnimatedPagesTest] = useState("animateds-off");


  React.useEffect(() => {
    AOS.init();

    // You can also pass an optional settings object
    // below listed default settings
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });
  }, []);

  const updateData = (value) => {
      setLightinfo(value)
      document.getElementById("bidyMain").classList.remove("day")
      document.getElementById("bidyMain").classList.remove("night")
      document.getElementById("bidyMain").classList.add(value)
  }
  const funcfixedHeader = () => {
    if(window.scrollY>90){
      setfixedHeader("-fixed")
    }else{
      setfixedHeader("")
    }
  }
  var chengeAnimated = () => {
    window.scroll({
      top: 0,
      left: 0,
    });
    if(animatedPagesTest=="animateds-off"){
      setAnimatedPagesTest("animateds-on")
    }else{
      setAnimatedPagesTest("animateds-off")
    }
  };


  const [idImageModal, setidImageModal] = useState([])
  const [idImageModalstate, setidImageModalstate] = useState("")
  async function openImageModal(gallerywd) {
    setidImageModalstate("active")
    setidImageModal(gallerywd)
  }
  
  async function closeImageModal() {
    setidImageModalstate("")
  }

    
	const [activeElement, setactiveElement] = useState({"row":null,"tableId":null})
	const [activeHoverElement, setactiveHoverElement]=useState({"row":null,"tableId":null})

  Router.events.on('routeChangeComplete', chengeAnimated )
  Router.events.on('routeChangeStart', chengeAnimated )

  React.useEffect(() => {
    window.addEventListener('scroll', funcfixedHeader);

    if (localStorage) {
      const timeHours = (new Date()).getHours();
      const getLocalState = localStorage.getItem('light');
      if(getLocalState){
        setLightinfo(getLocalState)
        document.getElementById("bidyMain").classList.add(getLocalState)
      }else{
        if(timeHours>8 && timeHours<20 ){
          setLightinfo("night")
          document.getElementById("bidyMain").classList.add("night")
        }else{
          setLightinfo("day")
          document.getElementById("bidyMain").classList.add("day")
        }
      }
    }
  });
 

  return (
    <>
      {pagesNav.map(function (index, num) {
        if (router.pathname == index.url) {
          return (
            <Head key ={index}>
              <title>{index.title}</title>
              <meta name="Keywords" content={index.keywords} /> 
              <meta charSet='utf-8' />
              <meta property="og:title" content="QPkupibas"/>
                <meta property="og:image" content="https://собственный-пляж.рф/contacts/contact1.jpg"/>
                <meta property="og:url" content= "https://xn----9sbdmgqpnafspco3lwc.xn--p1ai" />
                <meta property="og:type" content="website"/>
              <link type="Image/x-icon" href="/favicon.png" rel="icon" />
            </Head>
          );
        }else{
          if(router.pathname == "/privacy-policy"){
            return (
              <Head key ={index}>
                <title>ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ | QPkupibas</title>
                <meta name="Keywords" content="Бассейн, Биодизайн" /> 
                <meta charSet='utf-8' />
                <link type="Image/x-icon" href="/favicon.png" rel="icon" />
              </Head>
            );
          }else if(router.pathname == "/"){
            return (
              <Head key ={index}>
                <title>ГЛАВНАЯ | QPkupibas</title>
                <meta name="Keywords" content="Бассейн, Биодизайн" /> 
                <meta charSet='utf-8' />
                <meta property="og:title" content="QPkupibas"/>
                <meta property="og:image" content="https://собственный-пляж.рф/contacts/contact1.jpg"/>
                <meta property="og:url" content= "https://xn----9sbdmgqpnafspco3lwc.xn--p1ai" />
                <meta property="og:type" content="website"/>
                <link type="Image/x-icon" href="/favicon.png" rel="icon" />
              </Head>
            );
          }
        }
      })}
  
        <header className={`main-header__wrapp header-${light} header-state${fixedHeader} header-state${fixedHeader}-${light}`}>
          <NaviBar updateData={updateData} light={light}/>
          <MobMenu updateData={updateData} light={light} fixedHeader={fixedHeader}/>

        </header>
        <div className={`${animatedPagesTest}`}>
        <main key={router.route} className={`main-section-margin main-section-${light}`}>
          <Component 
            {...pageProps} 
            light={light}
            activeElement={activeElement}
            setactiveElement={setactiveElement}
            activeHoverElement={activeHoverElement}
            setactiveHoverElement={setactiveHoverElement}
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
            openImageModal={openImageModal}
            Modalbymore={Modalbymore}
            ModalModalbymore={ModalModalbymore}
            ModalbymoreGlobal={ModalbymoreGlobal}
            ModalModalbymoreGlobal={ModalModalbymoreGlobal}
          />
        </main>
        <ContactForm 
          light={light}  
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
        />
        <MainFooter light={light} />
      </div>
      
      <div className={`modalImage ${idImageModalstate}`}>
            <div className="modalImageClose" onClick={closeImageModal}>
            </div>
            <div className="modalImageimage">
                <img src={idImageModal.UF_IMAGE?idImageModal.UF_IMAGE:"/day"+idImageModal.image} alt={idImageModal.UF_ALT} title={idImageModal.UF_TITLE} />
              <span className="modalImageCloseButton" onClick={closeImageModal}></span>
            </div>
      </div>
      <div className={`allert-modal${alertModal}`}>
        <div className="allert-modal-background" onClick={()=>{ModalTextResulteFunc("");setalertModal("");}}></div>
        <div className="allert-modal-container">
          <span className="allert-modal-container-close" onClick={()=>{ModalTextResulteFunc("");setalertModal("");}}>🗙</span>
          {ModalTextResulte}
        </div>
      </div>
      {router.asPath == "/catalog/"?
        <>

          <div className={`modal-btn__hide`}>
            <span className={`ShowBlock`}> Развернуть</span>

              <ModalBtn 
                  light={light}  
                  activeElement={activeElement}
                  setactiveElement={setactiveElement}
                  activeHoverElement={activeHoverElement}
                  setactiveHoverElement={setactiveHoverElement}
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
                />
             <span className={` HideBlock`} onClick={()=>{openOrCroseByMore("")}}> Свернуть</span>
          </div>
        </>
      :""}
      
      <Script
        id="stripe-js"
        src="../b24.js"
      />
      <Script
        id="yandexMet-js"
        src="../yandexMet.js"
      />
      <noscript><div><img src="https://mc.yandex.ru/watch/52791373" style={{position:"absolute",left:"-9999px"}} alt="" /></div></noscript>
    </>
  )
}

  
 