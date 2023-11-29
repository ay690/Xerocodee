import React from "react";
import { heroImg } from "../assets";

const Hero = () => {
  return (
    <div className="w-full bg-white py-[50px]">
      <div className="md:max-w-[800px] m-auto max-w-[600px] px-4 md:px-0">
        <h1 className="text-center text-5xl font-bold text-black-100 py-5">
          Build your audience and grow your brand
        </h1>
        <p className="text-center text-[#536E96] text-xl py-5">
          no more, no less. Deploy from our single pane of glass, manage them
          with ease and scale up as fast as your workload grows.
        </p>
        <div className="flex justify-center items-center py-5">
          <button className="bg-[#0C5BC6] px-8 py-5 rounded-md text-white font-bold cursor-pointer">
            Get Started Now
          </button>
        </div>
      </div>
      <img src={heroImg} alt="Hero Image" className="w-full"/>
    </div>
  );
};

export default Hero;
