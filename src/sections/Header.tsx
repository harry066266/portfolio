import { useRefStore } from "@/util/useRefStore";
import { useContext, useState } from "react";

export const Header = () => {
  const { heroRef, projectRef, contactRef, aboutRef } = useContext(useRefStore);
  const [activeSection, setActiveSection] = useState<string>("");

  const scrollToSection = (
    section: string,
    ref: React.RefObject<HTMLDivElement>
  ) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(section); // 设置当前激活的按钮
    console.log(`scroll to ${section}`);
  };

  return (
    <div className="w-full fixed top-3 flex justify-center items-center z-10">
      <nav className="inline-flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <button
          onClick={() => scrollToSection("hero", heroRef)}
          className={`nav-item ${
            activeSection === "hero"
              ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
              : ""
          }`}
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection("project", projectRef)}
          className={`nav-item ${
            activeSection === "project"
              ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
              : ""
          }`}
        >
          Project
        </button>
        <button
          onClick={() => scrollToSection("about", aboutRef)}
          className={`nav-item ${
            activeSection === "about"
              ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
              : ""
          }`}
        >
          About
        </button>
        <button
          onClick={() => scrollToSection("contact", contactRef)}
          className={`nav-item ${
            activeSection === "contact"
              ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
              : ""
          }`}
        >
          Contact
        </button>
      </nav>
    </div>
  );
};
