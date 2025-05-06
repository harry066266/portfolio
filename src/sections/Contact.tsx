import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { useRefStore } from "@/util/useRefStore";
import React, { useContext } from "react";
import { useRouter } from "next/navigation";
export const ContactSection = () => {
  const { contactRef } = useContext(useRefStore);
  const router = useRouter();
  return (
    <div className="py-16 pt-14 lg:py-24 lg:pt-20" ref={contactRef}>
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 md:text-left text-gray-900 rounded-3xl py-8 px-10 text-center relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 justify-center items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Have an idea or opportunity in mind?
              </h2>
              <p className="text-sm mt-2 md:text-base">
                Let&apos;s bring it to life together. I&apos;d love to hear from
                you!
              </p>
            </div>
            <div>
              <button
                onClick={() => router.push("/contactForm")}
                className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900"
              >
                <span className="font-semibold">Contact Me</span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
