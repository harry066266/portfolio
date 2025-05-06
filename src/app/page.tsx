"use client";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import React, { useRef } from "react";
import { useRefStore } from "@/util/useRefStore";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <useRefStore.Provider value={{ heroRef, projectRef, aboutRef, contactRef }}>
      <div className=" max-w-full overflow-x-hidden">
        <Header />
        <HeroSection />
        <ProjectsSection />
        <TapeSection />
        <TestimonialsSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </div>
    </useRefStore.Provider>
  );
}
