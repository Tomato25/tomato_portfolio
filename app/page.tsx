"use client";
import About from "./components/About";
import Home from "./components/Home"
import Particlesbackground from "./components/Particlesbackground";
import Projects from "./projects/page";

export default function Page() {

  return (
    <main className="flex flex-col justify-start">
      <Particlesbackground />
      <Home />
      <Projects />
      <About />
    </main>
  );
}
