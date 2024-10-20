"use client";

import type { NextPage } from "next";
import { Inter, Calistoga } from "next/font/google";
import { twMerge } from "tailwind-merge";

import Circles from "@/components/Circles";
import ParticlesContainer from "@/components/ParticlesContainer";

import { BsArrowRight } from "react-icons/bs";
import { Footer } from "@/sections/Footer";
import { FloatingNav } from "@/components/ui/floating-navbar";

import Swal from 'sweetalert2';
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

const ContactMePage: NextPage = () => {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "/projects" },
    { name: "Contact", link: "/contactme" },
  ];

  async function handleSubmit(event:any) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "2ff9d239-e1ce-401b-9821-4f461cce0139");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success"
      });
    }
  }
  return (
    <div
      className={twMerge(
        inter.variable,
        calistoga.variable,
        " text-white antialiased font-sans"
      )}
    >
      <Circles />
      <FloatingNav navItems={navItems}></FloatingNav>

      <div className="mt-40 mb-10">
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
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-16 mb-10 md:w-[70%] w-[95%]">
            {/* input form */}
            <div className="flex gap-x-6">
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input focus:border-emerald-300"
                required
              ></input>
              <input
                type="text"
                placeholder="Email"
                name="email"
                className="input focus:border-emerald-300"
                required
              ></input>
            </div>
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              className="input focus:border-emerald-300"
              required
            ></input>
            <textarea
              placeholder="Message"
              name="message"
              className="textarea focus:border-emerald-300"
              required
            ></textarea>
            <button type="submit" className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:focus:border-emerald-300 group">
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
