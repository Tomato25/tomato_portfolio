"use client";
import React from "react";
import Image from "next/image";
import Screen1 from "public/Images/SnagaPrirode/screen1.png";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import { GrReactjs } from "react-icons/gr";
import { SiAdobexd, SiCss3 } from "react-icons/si";
import Link from "next/link";
import Carousel from "../components/Carousel";

export default function Projects() {
  const imageUrl = [
    "/Images/SnagaPrirode/screen1.png",
    "/Images/SnagaPrirode/screen2.png",
    "/Images/SnagaPrirode/screen3.png",
  ];

 return (
    <div className="flex flex-col justify-center items-center gap-8  mb-16">
      <div className="flex flex-col justify-center items-center gap-8 mt-16 mb-16">
        <div className="flex flex-row gap-4 px-4 2xl:flex-nowrap md:flex-wrap lg:gap-20 lg:px-14 justify-between w-screen ">
          <h1 className="text-xl lg:text-5xl self-center vertical-rl">2022</h1>
          <Carousel images={imageUrl} />
          <div className="flex flex-col justify-center items-center gap-4 ">
            <a
              href="https://github.com/Tomato25/SnagaPrirode"
              target="_blank"
              className="text-xl lg:text-4xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://snagaprirode.com.hr"
              target="_blank"
              className="text-xl lg:text-5xl"
            >
              <HiExternalLink />
            </a>
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
            <h1>React</h1>
            <h1>
              <GrReactjs />
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <h1>AdobeXd</h1>
            <h1>
              <SiAdobexd />
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <h1>CSS</h1>
            <h1>
              <SiCss3 />
            </h1>
          </div>
        </div>
        <div className="w-screen h-fit bg-slate-200 text-green text-xl p-40 shadow-large">
          <h2>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
            repellat dolores, quis, provident suscipit officiis magni laboriosam
            explicabo aut repellendus est sunt vel, nemo maxime commodi
            architecto. Deleniti hic illo quisquam sed rerum illum quaerat
            mollitia tempore iure molestiae aliquam reiciendis, adipisci, sequi
            vitae. In aperiam facilis modi aliquid consequatur omnis magni
            suscipit harum illo consequuntur nam iste odio, nihil possimus a ea.
            Dolorum praesentium excepturi earum pariatur quae aut dolorem libero
            voluptatum nesciunt, laborum non magni optio inventore obcaecati eos
            nisi laudantium ab architecto quam, quas sapiente voluptas! Quas
            tempora hic dicta doloremque possimus dolore sunt quasi voluptas
            esse?
          </h2>
        </div>
      </div>
    </div>
  );
}
