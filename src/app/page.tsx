"use client";

import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import EducationPage from "./components/EducationPage";
import FootPage from "./components/FootPage";
import HomePage from "./components/HomePage";
import ProjectPage from "./components/ProjectPage";
import Navbar from "./components/Navbar";
import { useRef } from "react";

export default function Home() {
  const homeRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const footRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div>
        <Navbar
          homeRef={homeRef}
          projectRef={projectRef}
          educationRef={educationRef}
          contactRef={contactRef}
          footRef={footRef}
        />
        <div ref={homeRef}>
          <HomePage />
        </div>
        <div ref={projectRef}>
          <ProjectPage />
        </div>
        <div ref={educationRef}>
          <EducationPage />
        </div>
        <div ref={contactRef}>
          <ContactPage />
        </div>
        <div ref={footRef}>
          <FootPage />
        </div>
      </div>
    </>
  );
}
