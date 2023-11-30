import React from "react";
import { logo, mobLogo } from "../assets";
import {
  FaFacebookF,
  FaDribbble,
  FaLinkedinIn,
  FaInstagram,
  FaBehance,
  FaGithub
} from "react-icons/fa";
import { CiMail } from "react-icons/ci";


const Footer = () => {
  return (
    <div className="w-full bg-white py-24 px-20">
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-5 max-[780px]:grid-cols-2  gap-8 max-w-[600px]  px-4 md:px-0">
        <div className="col-span-2">
          <img src={mobLogo} className="h-[25px]" />
          <h3 className="py-2 text-[#6D737A]">
            You get just what you need to run your cloud <br />
            workloads--no more, no less.
            <br />
            Deploy from our single pane of glass,
            <br />
            manage them with ease and scale <br />
            up as fast as your workload grows
          </h3>
        
          <div className="flex gap-2 py-3">
            <div className="p-4 cursor-pointer">
              <FaGithub size={25} />
            </div>
          
            <div className="p-4 cursor-pointer cursor-pointer">
              <FaLinkedinIn size={25} />
            </div>
           
            <div className="p-4 cursor-pointer cursor-pointer">
              <CiMail size={25} />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold">Our Links</h3>
          <ul className="py-6 text-[#6D737A]">
            <li className="py-2 hover:text-blue-500 cursor-pointer">Home</li>
            <li className="py-2  hover:text-blue-500 cursor-pointer">About us</li>
            <li className="py-2 hover:text-blue-500 cursor-pointer">Integrations</li>
            <li className="py-2 hover:text-blue-500 cursor-pointer">Team</li>
            <li className="py-2 hover:text-blue-500 cursor-pointer">Blog</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold">Our Services</h3>
          <ul className="py-6 text-[#6D737A]">
            <li className="py-2 hover:text-blue-500 cursor-pointer">Infrastructure provisioning</li>
            <li className="py-2 hover:text-blue-500 cursor-pointer">Network Infrastructure automation</li>
            <li className="py-2 hover:text-blue-500 cursor-pointer">Cost optimization</li>
            <li className="py-2 hover:text-blue-500 cursor-pointer">Cloud migration</li>
            <li className="py-2 hover:text-blue-500 cursor-pointer">Kubernates at scale</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-bold">Other Links</h3>
          <ul className="py-6 text-[#6D737A]">
            <li className="py-2 hover:text-blue-500 cursor-pointer">FAQ</li>
            <li className="py-2 hover:text-blue-500 cursor-pointer">Careers</li>
            <li className="py-2 hover:text-blue-500 cursor-pointer">Privacy Policy</li>
            <li className="py-2 hover:text-blue-500 cursor-pointer">Terms & Conditions</li>
            <li className="py-2 hover:text-blue-500 cursor-pointer">Support</li>
          </ul>
        </div>

        
      </div>

      <div className="border border-b"></div>

      <div className="md:max-w-[1480px] max-w-[600px] mt-[-20px]">
        <div className="grid md:grid-cols-2 grid-cols-1 py-20 ">
          <h3 className="py-2  md:ml-[-400px] text-center">
            Terms & Condition | Privacy Policy
          </h3>
          <p className="py-3 md:ml-[20px] text-center">
            Copyright &copy; 2023 <span className="text text-sm text-bold">EXOCODE TECHNOLOGIES</span> | <span className=" whitespace-nowrap">All Rights Reserved</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
