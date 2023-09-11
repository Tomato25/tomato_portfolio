"use client"

import React from "react";

import LandingComponent from "./components/landingComponent";
import ExperienceComponent from "./components/Experience";
import EducationComponent from "./components/Education";
import SoftSkillsComponent from "./components/SoftSkills";

export default function About1() {
  return (
      <main className="flex flex-col flex-grow overflow-x-hidden">
        <LandingComponent />
        <ExperienceComponent />
        <EducationComponent />
        <SoftSkillsComponent />
      </main>
  );
}
