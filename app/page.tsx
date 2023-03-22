"use client";
import React, { useState } from "react";
import Menu from "./components/Menu";
import Roles from "./components/Roles";
import { TagCloud, TagCloudOptions } from "@frank-mayer/react-tag-cloud";
import { FaGithubSquare, FaLinkedin, FaTelegram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Link from "next/link";

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
      <div className="flex flex-row h-10 justify-between items-center  mx-16 text-4xl mt-4">
        <div className="flex flex-row h-10 justify-between items-start gap-16 mx-16">
          <h1>
            <FaGithubSquare />
          </h1>
        </div>
        <div className="flex flex-row h-10 justify-between items-start gap-16 mx-16 text-2xl">
          <h1>TomiCode</h1>
        </div>
      </div>
      <div className="h-90 w-1/2 text-xl relative mx-auto">
        <TagCloud
          style={{
            width: "fit-content",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            margin: "0 auto",
            opacity: "0.4",
          }}
          options={(w: Window & typeof globalThis): TagCloudOptions => ({
            radius: Math.min(600, w.innerWidth, w.innerHeight) / 1.4,
            maxSpeed: "fast",
          })}
          onClickOptions={{ passive: true }}
        >
          {[
            "VSCode",
            "Web designer",
            "TypeScript",
            "Full-stack developer",
            "React",
            "Figma",
            "AdobeXd",
            "CSS",
            "HTML",
            "Next",
            "JavaScript",
            "Express.js",
            "MongoDB",
            "MERN",
            "Framer Motion",
            "Agile",
            "SCRUM",
          ]}
        </TagCloud>
        <TagCloud
          style={{
            width: "fit-content",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            margin: "0 auto",
            fontSize: "4rem",
          }}
          options={(w: Window & typeof globalThis): TagCloudOptions => ({
            radius: Math.min(600, w.innerWidth, w.innerHeight) / 1.4,
            maxSpeed: "fast",
          })}
          onClick={(tag: string, ev: MouseEvent) => {
            if (tag == "Projects") {
              location.href = "http://localhost:3000/projects";
            } else if (tag == "About") {
              location.href = "http://localhost:3000/about";
            } else if (tag == "Contact") {
              location.href = "http://localhost:3000/contact";
            }
          }}
          onClickOptions={{ passive: true }}
        >
          {["Projects", "About", "Contact"]}
        </TagCloud>
      </div>
      <div className="flex flex-row h-10 justify-between items-center  mx-16 text-4xl">
        <div className="flex flex-row h-10 justify-between items-center gap-16 mx-16">
          <a href="https://github.com/Tomato25/" target="_blank">
            <FaGithubSquare />
          </a>
          <a href="https://www.linkedin.com/in/hrvoje-tomic/" target="_blank">
            <FaLinkedin />
          </a>
        </div>
        <div className="flex flex-row h-10 justify-between items-center gap-16 mx-16">
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


