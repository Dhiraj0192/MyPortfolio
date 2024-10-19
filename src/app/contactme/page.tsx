"use client";

import type { NextPage } from "next";
import { Inter, Calistoga } from "next/font/google";
import { twMerge } from "tailwind-merge";

import Circles from "@/components/Circles";
import ParticlesContainer from "@/components/ParticlesContainer";

import { BsArrowRight } from "react-icons/bs";
import { Footer } from "@/sections/Footer";
import { ContactHeader } from "@/sections/ContactHeader";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

const ContactMePage: NextPage = () => {
  return (
    
    <div
      className={twMerge(
        inter.variable,
        calistoga.variable,
        " text-white antialiased font-sans"
      )}
    >
      
      
      <Circles />
      <ContactHeader/>

      <div className="mt-40 mb-10" >
      <div className="w-full h-full fixed right-0 top-0 -z-20">
        <ParticlesContainer></ParticlesContainer>
      </div>
        <div className="container flex flex-col items-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
            Let's Connect
          </p>

          <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 lg:max-w-2xl max-w-md mx-auto">
            Ready to bring your next project to life? Let's connect and discuss
            how I can help you achieve your goals..
          </p>
          {/* form */}
          <form className="flex flex-col gap-6 mt-16 mb-10 md:w-[70%] w-[95%]">
            {/* input form */}
            <div className="flex gap-x-6">
              <input
                type="text"
                placeholder="Name"
                className="input focus:border-emerald-300"
              ></input>
              <input
                type="text"
                placeholder="Email"
                className="input focus:border-emerald-300"
              ></input>
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="input focus:border-emerald-300"
            ></input>
            <textarea
              placeholder="Message"
              className="textarea focus:border-emerald-300"
            ></textarea>
            <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:focus:border-emerald-300 group">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let's Talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </form>
        </div>
      </div>

      <div className="relative lg:relative md:absolute md:bottom-0 w-full">
      <Footer />
      </div>
    </div>
  );
};

export default ContactMePage;
