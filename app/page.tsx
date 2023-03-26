"use client";
import React, { useState } from "react";
import Menu from "./components/Menu";
import Roles from "./components/Roles";
import { TagCloud, TagCloudOptions } from "@frank-mayer/react-tag-cloud";
import { FaGithubSquare, FaLinkedin, FaTelegram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Link from "next/link";
import Particlesbackground from "./components/particles/Particlesbackground" 


export default function Home() {
  const [menuToggle, setMenuToggle] = useState(false);

  const toggler = (menuToggle: boolean) => {
    setMenuToggle(!menuToggle);
    console.log(menuToggle);
  };


  function wordColor(data: { value: number }) {
    if (data.value > 200) {
      return "white";
    } else {
      return "black";
    }
  }

  return (
    <main className="h-screen w-screen flex flex-col justify-start">
      <Particlesbackground />
      <div className="flex flex-row h-100 justify-between items-center  mx-16 text-4xl mt-4 z-10">
        <div className="flex flex-row h-100 justify-between items-start gap-16 mx-16">
          <h1>
            <FaGithubSquare />
          </h1>
        </div>
        <div className="flex flex-row h-100 justify-between items-start gap-16 mx-16 text-2xl">
          <h1>TomiCode</h1>
        </div>
      </div>
      <div className="h-900 w-screen flex flex-row justify-center gap-20 items-center  text-2xl relative mx-auto z-10">
      <Link href="./projects">Projects</Link>
      <Link href="./about">About</Link>
      <Link href="./contact">Contact</Link>
      </div>
      <div className="flex flex-row h-100 justify-between items-center  mx-16 text-4xl z-10">
        <div className="flex flex-row h-100 justify-between items-center gap-16 mx-16">
          <a href="https://github.com/Tomato25/" target="_blank">
            <FaGithubSquare />
          </a>
          <a href="https://www.linkedin.com/in/hrvoje-tomic/" target="_blank">
            <FaLinkedin />
          </a>
        </div>
        <div className="flex flex-row h-100 justify-between  items-center gap-16 mx-16">
        <a href="mailto:htomic4@gmail.com" target="_blank">
            <SiGmail />
          </a>
          <a href="https://t.me/H_Tomic" target="_blank">
            <FaTelegram />
          </a>
        </div>
      </div>
    </main>
  );
}


