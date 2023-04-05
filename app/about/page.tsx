"use client"

import React from "react";

import PageWrapper from "../projects/page-wrapper";
import LandingComponent from "./components/landingComponent";
import ExperienceComponent from "./components/Experience";
import EducationComponent from "./components/Education";
import SoftSkillsComponent from "./components/SoftSkills";

export default function About() {
  return (
    <PageWrapper>
      <main className="flex flex-col  flex-grow ">
        <LandingComponent />
        <ExperienceComponent />
        <EducationComponent />
        <SoftSkillsComponent />
      </main>
    </PageWrapper>
  );
}
