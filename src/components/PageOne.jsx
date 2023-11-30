import React, { useState } from "react";
import { Rocket, Line, cloud } from "../assets";

const PageOne = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <div className="w-full bg-white py-[50px]">
      <div className="md:max-w-[800px] m-auto max-w-[600px] px-4 md:px-0">
        <div className="flex justify-center items-center gap-2">
          <h1 className="text text-center text-[25px] font-bold">
            The Xerocodee way
          </h1>
          <img src={Rocket} alt="Rocket" className="h-8" />
        </div>
        <div className="flex flex-col justify-center items-center py-10">
          <h1 className="text text-center text-[25px] font-bold">01</h1>
          <img src={Line} alt="Line" />
        </div>

        <div className="py-10">
          <h1 className="text text-center text-[25px] text-[#332C5C] font-bold capitalize">
            Self serve Infrastructure
          </h1>
          <p className="text text-center text-sm text-[#5E587A] font-bold capitalize py-2">
            {" "}
            Accelerate by self-serving production-ready infrastructure and
            customize as you scale.
          </p>
        </div>

        <div className="md:max-w-[1100px] m-auto grid md:grid-cols-2 gap-8 max-w-[600px] items-center px-2 md:px-0">
          <>
            <div>
              <ul className="grid grid-cols-3 gap-4 py-6 ">
                <li
                  className={`bg-transparent rounded-lg text-center text-gray-600 cursor-pointer ${
                    selectedItem === 0
                      ? "border-b-2 border-blue-600 font-bold"
                      : ""
                  }`}
                  onClick={() => handleItemClick(0)}
                >
                  Your Cloud
                </li>
                <li
                  className={`bg-transparent rounded-lg text-center text-gray-600 cursor-pointer ${
                    selectedItem === 1
                      ? "border-b-2 border-blue-600 font-bold"
                      : ""
                  }`}
                  onClick={() => handleItemClick(1)}
                >
                  Infra Components
                </li>
                <li
                  className={`bg-transparent rounded-lg text-center text-gray-600 cursor-pointer ${
                    selectedItem === 2
                      ? "border-b-2 border-blue-600 font-bold"
                      : ""
                  }`}
                  onClick={() => handleItemClick(2)}
                >
                  Self-Hosted Apps
                </li>
              </ul>
              <img src={cloud} alt="Images" className={`w-[650px] mx-auto`} />
            </div>
            <div>
              <h1 className="py-2 text text-gray text-3xl font-semibold w-1/2 capitalize">
                In your cloud
              </h1>
              <p className="py-2 text-sm text-gray-500 font-[12px]">
                Your infrastructure runs on your AWS or GCP account. Never get
                locked in. Infinitely scalable.Azure support coming soon
              </p>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default PageOne;
