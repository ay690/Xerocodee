import React from "react";
import { Line } from "../assets";
import { pageThree } from "../data/pageThree";

const PageThree = () => {
  return (
    <div className="w-full bg-white py-[50px]">
      <div className="md:max-w-[800px] m-auto max-w-[600px] px-4 md:px-0">
        <div className="flex flex-col justify-center items-center py-10">
          <h1 className="text text-center text-[25px] font-bold">03</h1>
          <img src={Line} alt="Line" />
        </div>
        <div className="py-10">
          <h1 className="text text-center text-[25px] text-[#332C5C] font-bold capitalize">
            Visibility into costs and metrics
          </h1>
          <p className="text text-center text-sm text-[#5E587A] font-bold py-2">
            {" "}
            Automatically track resource costs, across clouds, on every change.
            Visualize k8s pod metrics - CPU, Network, and Memory.
          </p>
        </div>
        {pageThree.map((items, i) => (
          <div
            key={i}
            className={`md:max-w-[1100px] m-auto grid md:grid-cols-2 gap-8 max-w-[600px] items-center  px-4 md:px-0 ${
              i % 2 === 0 ? "md:flex-row-reverse" : "" // Conditionally reverse the order
            }`}
          >
            {i % 2 === 0 ? ( // Check if index is even
              <>
                <img src={items.img} alt="Images" className={`w-1/2 mx-auto`} />
                <div>
                  <h1 className="py-2 text text-[#332C5C] text-[20px] font-semibold w-1/2 capitalize">
                    {items.title}
                  </h1>
                  <p className="py-2 text-sm text-[#5E587A] font-[12px]">
                    {items.description}
                  </p>
                </div>
              </>
            ) : (
              <>
                <div>
                  <h1 className="py-2 text text-[#332C5C] text-2xl font-semibold capitalize">
                    {items.title}
                  </h1>
                  <p className="py-2 text-sm text-[#5E587A] font-[12px]">
                    {items.description}
                  </p>
                </div>
                <img
                  src={items.img}
                  alt="Images"
                  className={`w-1/2 mx-auto md:order-last order-first`}
                />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageThree;
