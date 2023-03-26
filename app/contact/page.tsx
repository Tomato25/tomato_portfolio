"use client"
import React from 'react'
import { TagCloud, TagCloudOptions } from "@frank-mayer/react-tag-cloud";


function Contact() {
  return (
    <div className='flex flex-row items-center justify-center h-900 '>
      <h1 className="text-6xl self-center vertical-rl pl-14 ">Get in touch</h1>
      <div className="w-1/3 flex flex-col justify-center gap-28 items-center h-full">
        <h1>Email</h1>
        <h1>Email</h1>
        <h1>Email</h1>
        <h1>Email</h1>
      </div>
      <div className="w-2/3 h-600 relative">
      <TagCloud
          style={{
            width: "fit-content",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            margin: "0 auto",
            opacity: "0.",
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
      </div>

    </div>
  )
}

export default Contact