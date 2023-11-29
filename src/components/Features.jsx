import React, { useState, useEffect } from "react";
import { Frame, withPic, without } from "../assets";

const Features = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // You can adjust the breakpoint as needed
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <div className="w-full bg-white py-[50px]">
      <div className="md:max-w-[1400px] m-auto max-w-[600px] px-4 md:px-0">
        <div className="flex justify-center items-center">
          <p className="bg-[#4192FF] rounded-[30px] text-center text-[#0C5BC6] text-xl py-5 w-[170px]">
            Features
          </p>
        </div>

        <h1 className="text-center text-3xl font-bold text-black-100 py-5">
          <span className="text-blue-500">Save 1000s</span> of expensive coder
          hours
        </h1>
        <p className="text-center text-[#536E96] text-[14px] py-0">
          With cloud native technologies, we assist in modernising
          infrastructure and applications for resilience and scalability.
        </p>

        <ul
          className={`grid grid-cols-8 gap-4 py-6 ${
            isSmallScreen ? "hidden" : ""
          }`}
        >
          <li
            className={`bg-transparent rounded-lg text-center text-gray-600 cursor-pointer ${
              selectedItem === 0 ? "border-b-2 border-blue-600 font-bold" : ""
            }`}
            onClick={() => handleItemClick(0)}
          >
            Apps
          </li>
          <li
            className={`bg-transparent rounded-lg text-center text-gray-600 whitespace-nowrap cursor-pointer ${
              selectedItem === 1 ? "border-b-2 border-blue-600 font-bold" : ""
            }`}
            onClick={() => handleItemClick(1)}
          >
            App Configs
          </li>
          <li
            className={`bg-transparent rounded-lg text-center text-gray-600 cursor-pointer ${
              selectedItem === 2 ? "border-b-2 border-blue-600 font-bold" : ""
            }`}
            onClick={() => handleItemClick(2)}
          >
            Pipelines
          </li>
          <li
            className={`bg-transparent rounded-lg text-center text-gray-600 whitespace-nowrap cursor-pointer ${
              selectedItem === 3 ? "border-b-2 border-blue-600 font-bold" : ""
            }`}
            onClick={() => handleItemClick(3)}
          >
            Infra Creation
          </li>
          <li
            className={`bg-transparent rounded-lg text-center text-gray-600 cursor-pointer ${
              selectedItem === 4 ? "border-b-2 border-blue-600 font-bold" : ""
            }`}
            onClick={() => handleItemClick(4)}
          >
            Cost
          </li>
          <li
            className={`bg-transparent rounded-lg text-center text-gray-600 whitespace-nowrap cursor-pointer ${
              selectedItem === 5 ? "border-b-2 border-blue-600 font-bold" : ""
            }`}
            onClick={() => handleItemClick(5)}
          >
            Add-Ons
          </li>
          <li
            className={`bg-transparent rounded-lg text-center text-gray-600 cursor-pointer ${
              selectedItem === 6 ? "border-b-2 border-blue-600 font-bold" : ""
            }`}
            onClick={() => handleItemClick(6)}
          >
            Monitoring
          </li>
          <li
            className={`bg-transparent rounded-lg text-center text-gray-600 cursor-pointer ${
              selectedItem === 7 ? "border-b-2 border-blue-600 font-bold" : ""
            }`}
            onClick={() => handleItemClick(7)}
          >
            Connections
          </li>
        </ul>

        <img
          alt="Frame"
          src={Frame}
          className="w-full flex justify-center items-center py-2"
        />

        <div className="grid md:grid-cols-2 grid-cols-1 py-5">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text text-center font-bold text-xl">
              Without Xerocodee
            </h1>
            <img
              alt="With Xerocodee pic"
              src={without}
              className=" h-25 py-5"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text text-center font-bold text-xl">
              With Xerocodee
            </h1>
            <img
              alt="Without Xerocodee pic"
              src={withPic}
              className="h-25 py-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
