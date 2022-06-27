import React, { Component } from "react";
import Slider from "react-slick";


export default function HomeSlider({light}) {
 
    const settings = {
      centerMode: true,
      focusOnSelect: true,
      dots: true,
      arrows: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,

          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
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
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
            focusOnSelect: false,
          }
        }
      ]
    };
    return (
      <div className="slider-container">
     <div className={`home-Slider home-Slider-${light}`}>
        <Slider {...settings}>
          <div className={'slider__ithem'}>
            <img src="slides/slide1.png" alt="slde1"/>
          </div>
          <div className={'slider__ithem'}>
            <img src="slides/slide2.png" alt="slde2"/>
          </div>
          <div className={'slider__ithem'}>
            <img src="slides/slide3.png" alt="slde3"/>
          </div>
          <div className={'slider__ithem'}>
            <img src="slides/slide4.png" alt="slde4"/>
          </div>
          <div className={'slider__ithem'}>
            <img src="slides/slide5.png" alt="slde5"/>
          </div>

        </Slider>
      </div>
      </div>
 
    );
  }
