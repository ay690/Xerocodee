import React from 'react'
import SuccessCard from './SuccessCard';
import Slider from "react-slick";
import { Quotation,Avatar, Avatar2 } from '../assets';

const Success = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
              dots: true,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
              dots: true,
            },
          },
        ],
      };
  return (
    <div className="w-full bg-white py-32">
    <div className="md:max-w-[1480px] m-auto max-w-[600px] px-4 md:px-0">
      <div className="py-4">
        <h1 className="py-3 text text-center text-3xl font-bold">
        See our success stories
        </h1>
       
      </div>
      <Slider {...settings}>
        <SuccessCard src={Avatar} name={"Jenny Wilson"} designation={"Frontend Engineer"} description={" There are many variations of passages of Lorem Ipsum available but the majority have sufferg alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage."} />
        <SuccessCard src={Avatar2} name={"Guy Hawkins"} designation={"UI-UX Designer"} description={" There are many variations of passages of Lorem Ipsum available but the majority have sufferg alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage."} />
        
      </Slider>
    </div>
  </div>
  )
}

export default Success
