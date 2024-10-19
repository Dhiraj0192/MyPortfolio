"use client";

import type { NextPage } from "next";
import { Inter, Calistoga } from "next/font/google";
import { twMerge } from "tailwind-merge";

import Circles from "@/components/Circles";
import ParticlesContainer from "@/components/ParticlesContainer";

import Image from "next/image";

import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import { Footer } from "@/sections/Footer";
import { ProjectHeader } from "@/sections/ProjectHeader";

import portfolioProjects from "@/assets/projectDb/projectDb";

import { useRouter } from "next/navigation";
import { ProjectFooter } from "@/sections/ProjectFooter";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

const ProjectsPage: NextPage = () => {
  const router = useRouter();
  return (
    <div
      className={twMerge(
        inter.variable,
        calistoga.variable,
        " text-white antialiased font-sans "
      )}
    >
      <Circles />
      <div className="">
      <ProjectHeader />
      </div>

      <div className="mt-24 mb-10 w-full">
        <div className="w-full h-full fixed right-0 top-0 -z-20">
          <ParticlesContainer></ParticlesContainer>
        </div>
        <div className="px-10 w-full">
          <div className=" lg:top-[20%] lg:fixed lg:w-[32%] h-[80%]">
            <h2 className="font-serif text-3xl md:text-4xl text-center mt-6">
              My Featured Projects
            </h2>
            <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 lg:max-w-2xl max-w-md mx-auto lg:mt-10">
              I specialize in crafting user-friendly web and mobile
              applications. This section highlights my past projects. Let's
              explore and connect to discuss how I can help build your next
              innovative project!
            </p>

            <div className="sm:hidden md:hidden lg:block">
              <p className="mt-4 text-center text-emerald-300 to-sky-500 font-semibold">
                Let's connect and discuss how I can help you achieve your
                goals..
              </p>

              <div className="text-center mt-12">
                <button
                  onClick={() => {
                    router.push("/contactme");
                  }}
                  className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl hover:bg-green-500"
                >
                  <span>👋</span>
                  <span className="font-semibold">Let's Connect</span>
                </button>
              </div>
              <div className="lg:absolute bottom-0 w-full">
        <ProjectFooter />
      </div>
            </div>
            
          </div>
          <div className="lg:flex lg:flex-row lg:gap-5 lg:ml-[39%] ">
            <div className="flex flex-col mt-10 md:mt-20 gap-8">
              {portfolioProjects.map((projects, prjectsIndex) => (
                <div
                  key={projects.title}
                  className="bg-gray-800 rounded-3xl after:content-[''] after:absolute
                after:inset-0 z-0 after:z-10 overflow-hidden after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-4 md:pt-12 md:px-10 after:pointer-events-none lg:pt-8 lg:px-5 relative lg:h-[49vh]"
                >
                  <div className="">
                    <div className="lg:pb-8">
                      <div className=" bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm gap-2 text-transparent bg-clip-text">
                        <span>{projects.company}</span>
                        <span>&bull;</span>
                        <span>{projects.year}</span>
                      </div>

                      <h3 className="font-serif text-2xl md:text-2xl mt-2 md:mt-5">
                        {projects.title}
                      </h3>
                      <hr className="border-t-2 border-white/5 mt-4" />
                      <p className="text-white/60 mt-4">{projects.desc}</p>
                      <a href={projects.link} target="_blank">
                        <button className="bg-white text-gray-950 h-10 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-9 hover:bg-white/70 hover:text-gray-900">
                          <span>View In Details</span>
                          <ArrowUpRight className="size-4" />
                        </button>
                      </a>
                    </div>
                    <div>
                      <Image
                        src={projects.image}
                        alt={projects.title}
                        className="mt-8 lg:mt-0 lg:hidden lg:h-full -mb-4"
                      ></Image>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="sm:hidden md:hidden lg:flex flex-col mt-10 md:mt-20 lg:gap-8 ">
              {portfolioProjects.map((projects, prjectsIndex) => (
                <div
                  key={projects.title}
                  className="bg-gray-800 rounded-3xl after:content-[''] after:absolute after:inset-0 z-0 after:z-10 overflow-hidden after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 md:pt-12 md:px-10 after:pointer-events-none lg:pt-8 lg:px-10 relative w-[30vw] h-[49vh]"
                >
                  <div className="lg:grid lg:grid-cols-2 lg:gap-10">
                    <div>
                      <Image
                        src={projects.image}
                        alt={projects.title}
                        className="mt-8 lg:mt-1/2 lg:absolute -mb-4 border border-white"
                      ></Image>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative lg:hidden md:absolute md:bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default ProjectsPage;
