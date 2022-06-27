import React, { Component,useRef} from "react";
import Slider from "react-slick";
import LazyLoad from 'react-lazyload';

export default function CatalogSlider({light,imagesSlider,funSliderRef,tableId,openImageModal}){
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 787,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  const sliderRef = useRef();
  React.useEffect(() => {
    sliderRef.current.slickGoTo(funSliderRef[tableId]);
	}, [funSliderRef[tableId]]);
  return(
      <>
        <div className={`catalog-Slider ${light}`}>
          <Slider {...settings} ref={sliderRef}>
            {imagesSlider?.map((index,num) => {
              return (
                <div className={'catalog-slider__ithem'} key={num}>
                  <LazyLoad>
                    <img src={`/day${index.image}`} alt={index.alt} title={index.title}  onClick={(event)=>{openImageModal(index)}}/>
                  </LazyLoad>
                </div>
              );
            })}
          </Slider>
        </div>
      </>
  )
}