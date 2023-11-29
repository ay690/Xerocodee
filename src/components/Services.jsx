import React from "react";
import ServicesCard from "./ServicesCard";
import {
  Applications,
  infrastructure,
  Network,
  cyberSecurity,
} from "../assets";

const Services = () => {
  return (
    <div className="w-full bg-white py-[50px]">
      <div className="md:max-w-[800px] m-auto max-w-[600px] px-4 md:px-0">
        <h1 className="text text-center font-bold text-4xl py-2">
          Self serve infrastructure platform for{" "}
          <span className="text text-[#0C5BC6]">scaling teams</span>
        </h1>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 py-4">
          <ServicesCard
            src={infrastructure}
            title={"Infrastructure"}
            description={"Automated Cloud Infrastructure Workflow"}
          />
          <ServicesCard
            src={cyberSecurity}
            title={"Security"}
            description={"Modern Secure Infrastructure Approach"}
          />
          <ServicesCard
            src={Network}
            title={"Networking"}
            description={"Flexible Secure Application Connectivity"}
          />
          <ServicesCard
            src={Applications}
            title={"Applications"}
            description={"Automate Application Deployment for Agility"}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
