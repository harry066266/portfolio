"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import grainImage from "@/assets/images/grain.jpg";
import { HeroOrbit } from "@/components/HeroOrbit";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { sendEmail } from "./sendEmail";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 h-screen overflow-hidden">
      <Toaster />
      <div
        className="absolute inset-0 -z-10"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)",
        }}
      >
        <div
          className="absolute inset-0 -z-30 opacity-5"
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
      <div className="flex flex-col justify-center items-center w-full py-12 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-md w-full mx-auto p-6 bg-gray-600 rounded-lg shadow-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl text-center text-emerald-400 font-bold mb-6">
            Contact Me
          </h2>

          <form
            ref={formRef}
            onSubmit={async (event) => {
              event.preventDefault(); // 防止默认提交
              const formData = new FormData(formRef.current!);
              await sendEmail(formData);
              toast.success("Email sent successfully");
              if (formRef.current) {
                formRef.current.reset(); // 清空表单
              }
              setTimeout(() => {
                router.push("/"); // 跳转到主页
              }, 2000); // 3000 毫秒 = 3 秒
            }}
          >
            <div className="mb-4">
              <label
                className="block text-white text-sm font-semibold mb-2"
                htmlFor="name"
              >
                Your Email
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500 focus:outline-none"
                required
                placeholder="example@ex.com"
                name="email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white text-sm font-semibold mb-2"
                htmlFor="Your Message"
              >
                Name
              </label>
              <textarea
                className="w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500 focus:outline-none"
                required
                placeholder="Type your message here..."
                rows={4}
                name="message"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-emerald-400 text-white font-semibold px-4 py-2 hover:bg-emerald-500 focus:outline-white rounded-lg"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;
