import React from "react";
import { Arrow, Plane } from "../assets";

const NewsLetter = () => {
  return (
    <div className="w-full bg-[#90BFFF] rounded-xl py-[50px]">
      <div className="md:max-w-[800px] m-auto max-w-[600px] px-4 md:px-0">
        <div className="flex justify-center items-center mb-[50px]">
          <img alt="Plane" src={Plane} />
        </div>
        <h1 className="text-center text-[40px] font-bold text-black-100 ">
          Subscribe to Our Newsletter & get the Coupon code.
        </h1>
        <p className="text-center text-[#536E96] text-xl py-3">
          All your information is completely confidential
        </p>

        <form className="flex justify-center items-center py-4 gap-3">
          <input
            className="w-3/4 bg-white outline-none mr-2 input-box-shadow rounded-md px-4 py-4 truncate"
            type="text"
            placeholder="Type your email"
          />

          <button className="bg-[#0C5BC6] text-white rounded-xl px-4 py-4 cursor-pointer w-[150px]">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
