import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import Card from "./Card";

import languages from '../../values/carouselValues';

import useWindowDimensions from "../../Hooks/useWindowSize";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'


export default function Carousel() {

  const { width } = useWindowDimensions();
  let numOfCards = width > 1000 ? 5 : 3; 

  function NextArrow(props) {
    const { style, onClick } = props;
    return (
      <div
        className="c-slick c-slick__next"
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    );
  }
  
  function PrevArrow(props) {
    const { style, onClick } = props;
    return (
      <div
        className="c-slick c-slick__prev"
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
    );
  }
 
  // cards need hard coded amount if trouble shooting different views if using dev tools in browser to see mobile -- this is cause its dynamic to window size not view port
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: numOfCards,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <div className='slider__container'> 
      <Slider {...settings}>
        {languages.map((obj, index) => (<Card key={index} icon={obj.icon} name={obj.name}/>))}
      </Slider>
    </div>
    
  );
}