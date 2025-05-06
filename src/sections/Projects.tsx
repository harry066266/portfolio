import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import React, { useContext } from "react";
import { useRefStore } from "@/util/useRefStore";
const portfolioProjects = [
  {
    company: "My-Chat",
    year: "2024",
    title: "Real-Time Messaging Application",
    results: [
      { title: "Enabled real-time chat with <200ms latency via Socket.io" },
      { title: "Implemented JWT auth supporting 100+ simulated users" },
      { title: "Built responsive UI with Zustand and TailwindCSS" },
    ],
    link: "https://mychat.theharry.codes/",
    image: darkSaasLandingPage,
  },
  {
    company: "My e-commerce",
    year: "2024",
    title: "Full-Stack E-Commerce Platform",
    results: [
      {
        title: "Reduced page load times by 30% with Redis caching.",
      },
      {
        title: "Cut admin tasks by 40% with the admin dashboard.",
      },
      {
        title:
          "Achieved 99.9% transaction success rate with Stripe integration",
      },
    ],
    link: "https://ecommerce.theharry.codes/",
    image: lightSaasLandingPage,
  },
  {
    company: "My-Disscussion",
    year: "2025",
    title: "Modern SSR Forum with Next.js and OAuth Integration",
    results: [
      {
        title:
          "Built responsive forum UI with Next.js 15, NextUI, and Tailwind CSS",
      },
      { title: "integrated Prisma + SQLite for smooth data ops" },
      {
        title:
          "Implemented GitHub & Gitee OAuth via Auth.js with secure session handling",
      },
    ],
    link: "https://disscussion.theharry.codes/",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  const { projectRef } = useContext(useRefStore);
  return (
    <section className="pb-16 lg:py-24" ref={projectRef}>
      <div className="container relative overflow-visible">
        <SectionHeader eyebrow="Real-world Result" title="Featured Projects" />

        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 20}px)`, // 动态设置 top
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm bg-clip-text text-transparent">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-20 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex  gap-2 text-sm text-white/50 md:text-base"
                      >
                        <CheckCircleIcon className="w-4 h-4 flex-none" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-8 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span> View Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-lg"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
