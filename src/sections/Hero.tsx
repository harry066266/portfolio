"use client";
import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import React, { useContext } from "react";
import { useRefStore } from "@/util/useRefStore";

export const HeroSection = () => {
  const { heroRef, projectRef, contactRef } = useContext(useRefStore);
  const scrollToProject = () => {
    projectRef.current?.scrollIntoView({ behavior: "smooth" });
    console.log("scroll to contact");
  };
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
    console.log("scroll to project");
  };
  return (
    <div className=" py-32 md:py-48 lg:py-60 relative z-0" ref={heroRef}>
      <div
        className="absolute inset-0 -z-10"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)",
        }}
      >
        <div
          className="absolute inset-0 -z-30 opacity-5 "
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>

        <HeroOrbit size={800} rotation={-72} shouldSpin spinDuration="30s">
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>

        <HeroOrbit size={550} rotation={20} shouldSpin spinDuration="10s">
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>

        <HeroOrbit size={590} rotation={98} shouldSpin spinDuration="10s">
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>

        <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration="30s">
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit size={440} rotation={79} shouldSpin spinDuration="10s">
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit size={530} rotation={180} shouldOrbit orbitDuration="10s">
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit size={710} rotation={144} shouldSpin spinDuration="10s">
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit size={720} rotation={85} shouldSpin spinDuration="10s">
          <div className="size-3 rounded-full bg-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="10s">
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="w-[100px]"
            alt="Person peeking from behind laptop"
          />

          <div className="bg-gray-950 border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 w-2.5 h-2.5 rounded-full relative">
              <div className="absolute bg-green-500 inset-0 rounded-full animate-ping-large "></div>
            </div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building Exceptional User Experiences
          </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4 ">
          <button
            onClick={scrollToProject}
            className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl"
          >
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="w-4 h-4" />
          </button>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl"
          >
            <span>👋</span>
            <span className="font-semibold">Let&apos;s Connect</span>
          </button>
        </div>

        <div className="flex justify-center items-center">
          <a href="/docs/Resume.pdf" download={"Resume"}>
            <button className="bg-emerald-500 text-gray-950 h-12 w-full md:w-auto px-8 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-4">
              <span> View My Resume</span>
              <span>😊</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
