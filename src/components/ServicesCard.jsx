import React from "react";

const ServicesCard = ({ src, title, description }) => {
  return (
    <div className="category-card bg-white md:p-4 p-2 shadow-lg rounded-md flex items-center gap-4 justify-between border border-transperent hover:border-[#20B486] hover:cursor-pointer group/edit">
      <div className="flex justify-start gap-2">
        <div className="rounded-xl" >

        <img src={src} alt="src pic" className="shadow-lg h-[50px] rounded-xl" />
        </div>
        <div className="flex flex-col gap-1">
      <h1 className="max-w-[200px] truncate md:text-2xl text-lg font-semibold ">
        {title}
      </h1>
      <p className="text-[#536E96] text-gray-500 text-[13px]">{description}</p>
    </div>
      </div>
    </div>
  );
};

export default ServicesCard;
