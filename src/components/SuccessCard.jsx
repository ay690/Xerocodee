import React from "react";
import { Quotation, Avatar, Avatar2 } from "../assets";

const SuccessCard = ({ name, designation, description, src }) => {
  return (
    <div className="bg-white rounded-[50px] shadow-xl my-8 mx-2 overflow-hidden">
      <div className="flex justify-between">
        <div className="bg-[#0C5BC6] flex items-center justify-center w-1/6 p-8">
          <img src={Quotation} alt="Quotation" className="h-8" />
        </div>
        <div className="flex flex-col justify-start items-center">
          <p className="text text-xl p-8">
            {description}
          </p>
          <div className="flex flex-col justify-end items-center ml-auto p-2" >
          <p className="text text-xl">-{name}</p>
          <p className="text text-gray-500">{designation}</p>
          </div>
        </div>
        <div className="relative flex justify-center items-center p-8">
          <div className="w-[100px] h-[100px] border-4 border-blue-500 rounded-full overflow-hidden">
            <img
              src={src} 
              alt="Pics"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessCard;
