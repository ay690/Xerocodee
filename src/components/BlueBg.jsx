import React from "react";
import { blueBg } from "../data/blue";

const BlueBg = () => {
  return (
    <div className="w-full bg-[#0C5BC6] rounded-[40px] py-24">
      <div className="md:max-w-[1400px] m-auto max-w-[600px] px-4 md:px-0 mb-[80px]">
        <h1 className="text text-center text-white font-bold text-[56px] capitalize">
          Modernize apps, infrastructure with cloud native Tech for resilience,
          scalability.
        </h1>
      </div>
      {blueBg.map((items, i) => (
        <div
          key={i}
          className={`md:max-w-[1100px] m-auto grid md:grid-cols-2 gap-8 max-w-[600px] items-center  px-4 md:px-0 ${
            i % 2 === 0 ? "md:flex-row-reverse" : "" // Conditionally reverse the order
          }`}
        >
          {i % 2 === 0 ? ( // Check if index is even
            <>
              <img
                src={items.img}
                alt="Images"
                className={`w-[650px] mx-auto`}
              />
              <div>
                <h1 className="py-2 text text-white text-3xl font-semibold w-1/2 capitalize">
                  {items.title}
                </h1>
                <p className="py-2 text-sm text-white font-[12px]">
                  {items.description}
                </p>
              </div>
            </>
          ) : (
            <>
              <div>
                <h1 className="py-2 text text-white text-3xl font-semibold capitalize">
                  {items.title}
                </h1>
                <p className="py-2 text-sm text-white font-[12px]">
                  {items.description}
                </p>
              </div>
              <img
                src={items.img}
                alt="Images"
                className={`w-[400px] mx-auto md:order-last order-first`}
              />
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default BlueBg;
