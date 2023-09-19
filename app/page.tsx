"use client";
import About from "./components/About";
import Home from "./components/Home";
import Particlesbackground from "./components/Particlesbackground";
import Projects from "./projects/page";
import Contact from "./components/Contact";
import PageBreak from "./components/PageBreak";
import dynamic from "next/dynamic";

export default function Page() {


  return (
    <main className="flex flex-col justify-start overflow-x-hidden ">
      <Particlesbackground />
     
      <Home />
      <PageBreak />
      <Projects />
      <PageBreak />
      <About />
      <PageBreak />
      <Contact />
    </main>
  );
}
