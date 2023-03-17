import React from "react";
import Image from "next/image";
import Screen1 from "public/Images/SnagaPrirode/screen01.png";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import {GrReactjs} from "react-icons/gr"
import {SiAdobexd, SiCss3} from "react-icons/si"






export default function Projects() {
  return (
    
      <div className="flex flex-col justify-center items-center gap-8 h-fit mt-32 mb-16">
      <div className="flex flex-row gap-4 px-4 2xl:flex-nowrap md:flex-wrap lg:gap-20 lg:px-14 justify-between w-screen">
      <h1 className="text-xl lg:text-5xl self-center vertical-rl">2022</h1>
        <Image
          className="w-1/2 shadow-lg shadow-gray-800"
          src={Screen1}
          width={1000}
          height={600}
          alt="screenshotMobile"
        />
        <div className="flex flex-col justify-center items-center gap-4 ">
        <h1 className="text-xl lg:text-4xl">
          <FaGithub />
        </h1>
        <h1 className="text-xl lg:text-5xl">
          <HiExternalLink />
        </h1>
      </div>
      </div>
        <div className="flex flex-row justify-center gap-4 items-center">
          <h1 className="text-4xl">1</h1>
          <svg
            width="6"
            height="60"
            viewBox="0 0 6 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 0.5V100.5" stroke="white" stroke-width="5" />
          </svg>
          <h1 className="text-4xl">Snaga prirode </h1>
        </div>
        <div className="flex flex-row justify-between items-center gap-8 opacity-40 text-xl">
          <div className="flex flex-col justify-center items-center gap-3">
            <h1 >React</h1>
            <h1 ><GrReactjs /></h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <h1 >AdobeXd</h1>
            <h1 ><SiAdobexd /></h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <h1>CSS</h1>
            <h1><SiCss3 /></h1>
          </div>
        </div>
      </div>
      
  );
}
