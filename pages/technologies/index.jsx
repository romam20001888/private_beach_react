import React from "react";
import { Card, CardGroup,Row, Col,Form,Button  } from 'react-bootstrap'
import LinkTileCatalog from '../../components/LinkTileCatalog'
import TechIthem from "../../const/technology"
import Head from 'next/head'
import QueueAnim from 'rc-queue-anim';


export default function Technologies({light}) {
    
    return(
        <>
        <Head>
            <meta name="description" content="Запатентованная итальянская технология и этапы строительства песчаных бассейнов BIODESIGN от компании QPkupibas" />
        </Head>
        <div className={`head-margin ${light}`}></div>
            <div className={`mainContainer ${light}`}>
                <div className="title-page__60-center">
                    <h1>Собственный пляжный бассейн по запатентованной итальянской <span className="title-upper-page">технологии </span>BIODESIGN! </h1>
                </div>
            </div>
            <div className={'pagep-bg__block-wrapp'}>
                <div className={`pagep-bg__block-${light} pagep-bg__block-top-tech`}></div>  
            </div>

            <section className={`mainContainer ${light}`}>
               
                <div className={`about-txt-img__wrapp`}>
                    <div className={`about-img__list`}>
                        <div>
                            <img src="/img-tech.png" alt="технологии BIODESIGN"/>
                        </div> 
                    <div>

                    <ol className={`techno-list`}>
                    
                        <li key="a">– КОТЛОВАН</li>
                        <li key="b">– ЗАЩИТНАЯ ТКАНЬ</li>
                        <li key="c">– ГИДРОИЗОЛЯЦИОННЫЙ ЛАЙНЕР</li>
                        <li key="d">– СЕТКА КОНСОЛИДАЦИИ</li>
                        <li key="e">– ОСНОВНОЙ СЛОЙ</li>
                        <li key="f">– ПРОМЕЖУТОЧНАЯ АРМИРУЮЩАЯ СЕТКА</li>
                        <li key="g">– ОТДЕЛОЧНО-ЗАЩИТНЫЙ СЛОЙ  </li>
                    
                    </ol>
    
                    </div>

                    </div>
                
                    <div className={`about-txt`}>
                        <p className="about-txt-up techno-descr-big">
                        Biodesign имеет технологические характеристики, превышающие традиционные системы строительства бетонных бассейнов по большинству показателей. 
                            При прочности, которая вдвое выше традиционного бетона, покрытие обладает:
                            </p>
                            <ul className="techno-list-2 techno-descr-small">
                                <li>- дополнительной упругостью и эластичностью +300%;</li>
                                <li>- устойчивостью к ультрафиолетовому излучению;</li>
                                <li>- устойчивостью к перепадам температур;</li>
                                <li>- стойкостью к химическим продуктам;</li>
                                <li>- низким уровнем воздействия на экологическую среду и никакой   
                            цементированной подпочвы и бетона;</li>
                                <li>- более длительным сроком службы.</li>
                            </ul>   
                            <p className="techno-descr-small">Эти уникальные качества способствуют значительному увеличению продолжительности эксплуатации бассейна в различных климатических условиях. Такие характеристики стали возможными благодаря использованию специально разработанному и запатентованному составу покрытия на основании композитных смол и кварцевого песка. </p>                                                               
                    </div>
                </div>
               
            </section>

            <div className={`mainContainer ${light}`}>
                <div className={'content-txt-right-bg'}>
                    <h5 className="about-title-h5">
                        <div>Технология Biodesign использует</div>
                       <span className={'main-yelow__span'}> ВОДОНЕПРОНИЦАЕМЫЙ ЛАЙНЕР из EPDM</span>, расположенный над землей и защищенный с помощью специальной ткани, с доказанной аттестацией гидроизоляции. 
                    </h5>
                    <p>
                    EPDM – это синтетический полимер, который на протяжении более чем 40 лет используется в автомобильной промышленности и гражданском строительстве. Это эластомер, полученный путём вулканизации от сополимеризации Этилена, Пропилена и Диенового Мономера.</p>
                    <p>
                    Длинные молекулы каучука при его получении соединяются с помощью химических связей, образуя эластичный, химически стабильный продукт с уникальной устойчивости к УФ-излучению, озону, перепадам температур и к воздействию химических веществ.</p>
                    <p>
                    Т.о., EPDM – химически стойкий, полностью инертный материал, который не содержит вредных веществ, опасных добавок, не выделяет с течением времени никаких компонентов, способных загрязнять окружающую среду. Старые отработавшие пленки, как и отходы новых могут быть утилизированы на любых общих свалках, сожжены для получения энергии или отправлены на переработку, для новых EPDM. Благодаря высокой экологичности Greenpeace рекомендует EPDM в качестве альтернативы не экологичному ПВХ.
                    </p>
                    <div className={`content-txt-right-bg-block1 ${light}`} ></div>
                    <div className={`content-txt-right-bg-block2 ${light}`} ></div>
                </div>
            </div>
            <div className={'pagep-bg__block-wrapp'}>
                <div className={`pagep-bg__block-${light} pagep-bg__block-top-tech-link`}></div>  
            </div>
            <div className={`Link-techno`} >
                 <LinkTileCatalog light={light}/>
            </div>

            <div className="mainContainer">
            <div className={`text-title-wrapp ${light}`}>
                    <h2 className="upper bold tech-titleh2">
                        Этапы строительства 
                    </h2>
                    <h3 className=" tech-titleh3">песчаных бассейнов BIODESIGN</h3>
                    <p className={'PromoBlockTxt PromoBlockTxt-tech'}>
                        Работы по концептуально новому устройству бассейна <a href={'/biodesign'} className="underline">Biodesign</a> проводятся по заранее разработанному плану, который также является частью запатентованной технологии. Условно процесс можно разбить на 7 этапов строительства:
                    </p>
                </div>
            </div>


              
                   
                    {
                        TechIthem.map((index,num)=>{
                            if(( num % 2 == 0) && (index.bg==true)){
                                return (
                                    
                                    <div key={`tech-${num}`} className={`tchno-block__bg-top tchno-block__bg`}>
                                        <div className={`mainContainer ${light}`}>
                                            <Row className={'content-block-img-txt__bg-left'}>
                                                <Col lg={6} xl={6} md={6} sm={12} className={"content-block-img-txt__bg-txt-wrapp"}>
                                                    <div  className={"content-block-img-txt__bg-txt"}>
                                                    {/* <div className={'content-title-vertical-line'}></div> */}
                                                    <div className="border-wrapp-title">
                                                        <h4>
                                                            <span className={'content-block-img-txt__bg-num'}>{index.num}</span>
                                                            <span className="content-block-img-txt__bg-numName">{index.numName}</span>
                                                            {index.name}
                                                        </h4>
                                                        <h3>{index.title}</h3>
                                                    </div>
                
                                                        <p>{index.descr}</p>
                                                    </div>
                                                </Col>
                                                <Col lg={6} xl={6} md={6} sm={12} className={'content-block-img-txt__bg-img  content-block-img-txt__bg-img-tech'}>
                                                    <img src={index.Img.image} alt={index.Img.alt}title={index.Img.title} />
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>  
                                    

                                   
                                )
                            }if ((num % 2 != 0) && (index.bg==true)) {
                                return (
                                    
                                    <div key={`tech-${num}`} className="tchno-block__bg-bot tchno-block__bg">
                                        <div className={`mainContainer ${light}`}>
                                            <Row className={'content-block-img-txt__bg-right'}>
                                            {function (){
                                            if(index.id == bg){ return (
                                                <div className={`pagep-bg__block-${light} pagep-bg__block-top-tech-link`}></div>  
                                            )} 
                                            }}
                                        <Col lg={6} xl={6} md={6} sm={12} className={'content-block-img-txt__bg-img content-block-img-txt__bg-img-tech'}>
                                        <img src={index.Img.image} alt={index.Img.alt}title={index.Img.title} />
                                        </Col>
                
                                        <Col lg={6} xl={6} md={6} sm={12} className={"content-block-img-txt__bg-txt-wrapp"}>
                                        <div  className={`content-block-img-txt__bg-txt ${light}`}>
                                        
                                        <div className="border-wrapp-title">
                                            <h4>
                                                <span className={'content-block-img-txt__bg-num'}>{index.num} </span>
                                                <span className="content-block-img-txt__bg-numName">{index.numName}</span>
                                                {index.name}
                                            </h4>
                                            <h3>{index.title}</h3>
                                        </div>
                                        <p>{index.descr}</p>
                                        </div>
                                        </Col>
                                    </Row>
                                    </div>
                                </div>
                                    

                                )
                            }if ((num % 2 == 0)) {
                                return(
                                    
                                    <div key={`tech-${num}`} className={`mainContainer ${light}`}>
                                    <Row className={'content-block-img-txt__bg-left'}>
                                        <Col lg={6} xl={6} md={6} sm={12} className={"content-block-img-txt__bg-txt-wrapp"}>
                                        <div  className={"content-block-img-txt__bg-txt"}>
                                        {/* <div className={'content-title-vertical-line'}></div> */}
                                        <div className="border-wrapp-title">
                                            <h4>
                                                <span className={'content-block-img-txt__bg-num'}>{index.num}</span>
                                                <span className="content-block-img-txt__bg-numName">{index.numName}</span>
                                                {index.name}
                                            </h4>
                                            <h3>{index.title}</h3>
                                        </div>
    
                                            <p>{index.descr}</p>
                                        </div>
            
                                        </Col>
            
                                        <Col lg={6} xl={6} md={6} sm={12} className={'content-block-img-txt__bg-img content-block-img-txt__bg-img-tech'} >
                                        <img src={index.Img.image} alt={index.Img.alt}title={index.Img.title} />
                                        </Col>
                                    </Row>
                                    </div>
                                    
                                )
                            }else {
                                return(
                                    
                                    <div key={`tech-${num}`} className={`mainContainer ${light}`}>
                                    <Row className={'content-block-img-txt__bg-right'}>
                                       {function (){
                                         if(index.id == bg){ return (
                                            <div className={`pagep-bg__block-${light} pagep-bg__block-top-tech-link`}></div>  
                                         )} 
                                       }}
                                    <Col lg={6} xl={6} md={6} sm={12} className={'content-block-img-txt__bg-img content-block-img-txt__bg-img-tech'} >
                                    <img src={index.Img.image} alt={index.Img.alt}title={index.Img.title} />
                                    </Col>
            
                                    <Col lg={6} xl={6} md={6} sm={12} className={"content-block-img-txt__bg-txt-wrapp"}>
                                    <div  className={`content-block-img-txt__bg-txt ${light}`}>
                                   
                                    <div className="border-wrapp-title">
                                        <h4>
                                            <span className={'content-block-img-txt__bg-num'}>{index.num} </span>
                                            <span className="content-block-img-txt__bg-numName">{index.numName}</span>
                                            {index.name}
                                        </h4>
                                        <h3>{index.title}</h3>
                                    </div>
                                    <p>{index.descr}</p>
                                    </div>
                                    </Col>
                                </Row>
                                </div>
                                    
                                )
                            }


                        })
                    }






                <div  className={`mainContainer ${light}`}>
                    <div  className={`text-center techno-text-center`}>Технологии, уникальные материалы, соблюдение этапов строительства и индивидуальный подход в работе с каждым клиентом - основа принципов сотрудничества <a href={'/about'}>KUPIBAS GROUP</a>. Позвольте себе великолепный бассейн Biodesign и инвестируйте в запатентованные инновации и красоту!</div>
                </div>




      </>  
    )
}
