"use client";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import CypressIcon from "@/assets/icons/cypress.svg";
import NodeIcon from "@/assets/icons/nodejs.svg";
import MongoDBIcon from "@/assets/icons/mongodb.svg";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import React, { useContext, useRef } from "react";
import { useRefStore } from "@/util/useRefStore";
const toolboxItems = [
  { title: "JavaScript", iconType: JavaScriptIcon },
  { title: "HTML", iconType: HTMLIcon },
  { title: "CSS", iconType: CSSIcon },
  { title: "React", iconType: ReactIcon },
  { title: "Github", iconType: GithubIcon },
  { title: "Node.js", iconType: NodeIcon }, // Node.js for backend development
  { title: "MongoDB", iconType: MongoDBIcon }, // NoSQL database for storing data
  { title: "Cypress", iconType: CypressIcon }, // For end-to-end testing
];

const hobbies = [
  { title: "hiking", emoji: "🥾", left: "5%", top: "5%" },
  { title: "movie", emoji: "🎞️", left: "50%", top: "5%" },
  { title: "traveling", emoji: "🧳", left: "30%", top: "35%" },
  { title: "paniting", emoji: "🎨", left: "15%", top: "60%" },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  const { aboutRef } = useContext(useRefStore);
  return (
    <div className="py-20" ref={aboutRef}>
      <div className="container">
        <SectionHeader eyebrow="About me" title="Into My World" />
        <div className="mt-20 flex flex-col gap-8 md:grid md:grid-cols-5 md:gap-8">
          <Card className="h-[320px]  md:col-span-3 ">
            <CardHeader
              title="My Toolbox"
              description="Explore the technologies and tools I use"
              className=""
            />
            <ToolboxItems
              toolboxItems={toolboxItems}
              itemsWrapperClassName="animate-move-left [animation-duration:30s]"
            />
            <ToolboxItems
              toolboxItems={toolboxItems}
              className="mt-6"
              itemsWrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:30s]"
            />
          </Card>
          <Card className="h-[320px]  flex flex-col md:col-span-2 ">
            <CardHeader
              title="Beyond the Code"
              description="Explore my interests and hobbies beyond the digital realm"
              className="px-6 py-6"
            />
            <div className="relative flex-1" ref={constraintRef}>
              {hobbies.map((hobby) => (
                <motion.div
                  key={hobby.title}
                  className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute "
                  style={{
                    left: hobby.left,
                    top: hobby.top,
                  }}
                  drag
                  dragConstraints={constraintRef}
                >
                  <span className="font-medium text-gray-950">
                    {hobby.title}
                  </span>
                  <span>{hobby.emoji}</span>
                </motion.div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
