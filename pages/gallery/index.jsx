import React, {useState,useEffect} from "react"
import { useRouter } from "next/router";
import { Card, CardGroup,Row, Col,Form,Button  } from 'react-bootstrap'
import LinkTileCatalog from '../../components/LinkTileCatalog'
import Navig from '../../components/Navig'
import gallery from "../../const/gallery"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft,faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import * as Scroll from 'react-scroll';
import Head from 'next/head'

import ReactPlayer from 'react-player'

export default function Gallery({light,openImageModal}){
    const router = useRouter();
    const [gallerywd, setGallery] = useState([])
    const [navigation, setNavigation] = useState([])
    const [animation, setAnimation] = useState(false)
    const [NumPageStat, setNumPageStat] = useState([])
    let scroll    = Scroll.animateScroll;
    
    

    useEffect(() => {
        setAnimation(true)
        const data = {
            NumPage: NumPageStat,
            countElements: 15
        };
        const endpoint = 'https://kupibas.ru/api/index.php';
        
        scroll.scrollTo("mainContainer",{
            isDynamic:true
        });
        setTimeout(()=>{
            fetch(endpoint, {
                method: 'POST',
                body: JSON.stringify(data)
            })
            .then((resp) => resp.json())
            .then(function(response) {
                setGallery(response.ELEMENTS)
                setNavigation(response.NAVIGATION)
                setAnimation(false)
            });
        })
    }, [NumPageStat]);
    return(
        <>
        <Head>
            <meta name="description" content="Галерея фото и видео итальянских пляжных бассейнов BIODESIGN от QPkupibas: примеры уникальной формы под любой ландшафт" />
        </Head>
        <div className={`head-margin ${light}`}></div>
        <div className={`pagep-bg__block-${light} pagep-bg__block-top-gl`}></div> 
            <div className={`mainContainer container__margin-top ${light}`}>
            <div className="title-page__50-center title-page__50-center-gallery">
                <h1>Галерея работ компании  <span className="decor-bg-word span-block bold upper"><span className="decor-bg-word__ithem-bio-gallery"></span>KUPIBAS GROUP</span></h1>
            </div>
                {NumPageStat==1 || NumPageStat.length==0?
                    <>

                        <div className="descr-page descr-gl">
                            <p>
                            Каждый из нас, мечтает жить на вилле с садом и красивым современным бассейном, чтобы наслаждаться его прохладой жаркими летними днями. Естественный бассейн BIODESIGN - это чрезвычайно удобная жилая зона, смоделированная итальянскими инженерами для удовлетворения потребностей в купании с учетом адаптации к окружающему ландшафту.</p> 
                            <p>
                            <a href={'/biodesign'}>BIODESIGN</a>
                            - это также проект строительства, который может быть полностью реализован в модульных наборах по желанию заказчика. Ведь в зависимости от потребностей бассейн может иметь безопасное место для детей, оборудоваться погруженными в воду стульями, шезлонгами и даже аэро терапевтической массажной зоной.</p>
                            <p>
                            В этом разделе Вы можете видеть примеры бассейнов Biodesign, которые не имеют себе равных и оценить всю прелесть атмосферы такого VIP-пляжа!
                            </p>
                        </div>
                    </>
                :""}
            </div>
            <section className={`mainContainer ${light}`}>
                {!animation?
                <div className="gallery">
                    {gallerywd.map(function(index,num) {
                        if(index.UF_TYPE_FILE== 17){
                            return (
                                <>
                                    <div key={`col-1-${num}`}  className={`pics`}>
                                        <img src={index.UF_IMAGE} alt={index.UF_ALT} title={index.UF_TITLE} onClick={(event)=>{openImageModal(index)}} />                                  
                                    </div>
                                </>
                            );
                        }
                        if(index.UF_TYPE_FILE== 18){
                            return(
                                <div key={`col-1-${num}`}  className={`pics`}>
                                <ReactPlayer
                                    className={`movie`}
                                    controls
                                    url={index.UF_IMAGE} type='video/ogg; codecs="theora, vorbis"' 
                                />
                                    {/* <video className={`movie`} controls poster={index.UF_VIDEO_PREV}> 
                                        <source src={index.UF_IMAGE} type='video/ogg; codecs="theora, vorbis"'/>
                                    </video>   */}
                                </div>
                            )
                        }
                    })}


                </div>
                :<div className={`Gallery-preloyder-${light}`}>
                    <span></span>
                </div>}
                <div className={`pagination-wrapp ${light}`}>
                   <Navig datanavigation={navigation} setNumPageStatEl={setNumPageStat} />
                </div>
           </section>
           <LinkTileCatalog light={light}/>
        </>
    )
    
}