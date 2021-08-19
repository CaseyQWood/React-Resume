import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import Card from "./Card";

import useWindowDimensions from "../../Hooks/useWindowSize";

import jsIcon from '../../images/card-img/js_prev_ui (2).png'
import nodeIcon from '../../images/card-img/nodeJs_prev_ui.png'
import psqlIcon from '../../images/card-img/slazzer-edit-image (6).png'
import reactIcon from '../../images/card-img/react_prev_ui.png'
import sassIcon from '../../images/card-img/sass_prev_ui.png'
import threeIcon from '../../images/card-img/three.png'




export default function Carousel() {

  const { height, width } = useWindowDimensions();
  let numOfCards = width > 1000 ? 3 : 1 
 
  // cards need hard coded amount if trouble shooting different views if using dev tools in browser to see mobile -- this is cause its dynamic to window size not view port
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: numOfCards,
    slidesToScroll: 1
  };

  

  const language = [
    {
      icon: jsIcon,
      name: 'JavaScript'
    },
    {
      icon: nodeIcon,
      name: 'NodeJs'
    },
    {
      icon: psqlIcon,
      name: 'PostresSql'
    },
    {
      icon: reactIcon,
      name: 'React'
    }
  ]


  return (
    <div className='slider__container'> 
      <Slider {...settings}>
        {language.map((obj, index) => (<Card key={index} icon={obj.icon} name={obj.name}/>))}
      </Slider>
    </div>
    
  );
}