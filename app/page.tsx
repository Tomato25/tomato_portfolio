"use client";
import React, { useState} from "react";
import Menu from "./components/Menu";
import Roles from "./components/Roles";
import  WordCloud from "react-d3-cloud";


export default function Home() {
  const [menuToggle, setMenuToggle] = useState(false);

  const toggler = (menuToggle: boolean) => {
    setMenuToggle(!menuToggle);
    console.log(menuToggle);
  };

  function randomZeroOrNinety() {
    var num = Math.random();
    if (num < 0.25) {
      return 0;
    } else if (num > 0.25 && num < 0.5) {
      return 90;
    } else if (num > 0.5 && num < 0.75) {
      return 180;
    } else if (num > 0.75) {
      return 360;
    }
  }

  function wordColor(data: { value: number; }) {
    if (data.value > 200) {
      return "white";
    } else {
      return "black";
    }
  }


  const data = [
    { text: "Web designer", value: 200 },
    { text: "Full-stack developer", value: 200 },
    { text: "next.js", value: 200 },
    { text: "Projects", value: 250 },
    { text: "About", value: 250 },
    { text: "Contact", value: 250 },

    { text: "Figma", value: 200 },

    { text: "AdobeXd", value: 200 },

    { text: "HTML", value: 200 },
    { text: "CSS", value: 200 },

    { text: "React", value: 200 },
    { text: "JS", value: 200 },
    { text: "Express.js", value: 200 },
    { text: "MERN", value: 200 },
    { text: "Agile", value: 200 },
  ];

  return (
    <main>
      <div className="h-screen w-screen">
        <WordCloud
          data={data}
          rotate={randomZeroOrNinety}
          fontSize={30}
          padding={5}
          fill={wordColor}

        />
      </div>
    </main>
  );
}
