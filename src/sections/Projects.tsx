"use client";
import Image from "next/image";

import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";

import portfolioProjects from '@/assets/projectDb/projectDb';
import { useRouter } from 'next/navigation';

export const ProjectsSection = () => {
  const router = useRouter();
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
          Real-world Results
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-center mt-6">
          Featured Projects
        </h2>
        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 lg:max-w-2xl max-w-md mx-auto">
          I specialize in crafting user-friendly web and mobile applications.
          This section highlights my past projects. Let's explore and connect to
          discuss how I can help build your next innovative project!
        </p>
        <div className="lg:flex lg:flex-row lg:gap-5">
          <div className="flex flex-col mt-10 md:mt-20 gap-8">
            {portfolioProjects.map((projects, prjectsIndex) => (
              <div
                key={projects.title}
                className="bg-gray-800 rounded-3xl after:content-[''] after:absolute
                after:inset-0 z-0 after:z-10 overflow-hidden after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-4 md:pt-12 md:px-10 after:pointer-events-none lg:pt-8 lg:px-5 sticky lg:h-[49vh]"
                style={{
                  top: `calc(130px + ${prjectsIndex * 40}px`,
                }}
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

          <div className="sm:hidden md:hidden lg:flex flex-col mt-10 md:mt-20 lg:gap-8">
            {portfolioProjects.map((projects, prjectsIndex) => (
              <div
                key={projects.title}
                className="bg-gray-800 rounded-3xl after:content-[''] after:absolute after:inset-0 z-0 after:z-10 overflow-hidden after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 md:pt-12 md:px-10 after:pointer-events-none lg:pt-8 lg:px-10 sticky w-[50vw] h-[49vh]"
                style={{
                  top: `calc(130px + ${prjectsIndex * 40}px`,
                }}
              >
                <div className="lg:grid lg:grid-cols-2 lg:gap-10">
                  
                    
                  <div>
                    <Image
                      src={projects.image}
                      alt={projects.title}
                      className="mt-8 lg:mt-0 lg:absolute -mb-4 border border-white"
                    ></Image>
                  </div>
                  <div>
                    <Image
                      src={projects.image2}
                      alt={projects.title}
                      className="mt-8 lg:mt-0 lg:absolute -mb-4 border border-white"
                    ></Image>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <hr className="mt-10 -mb-8"/>
        <div className="text-center mt-8">
        <a onClick={()=>{
            router.push('/projects');
          }} target="_blank">
                      <button className="bg-white text-gray-950 h-10 w-full md:w-auto px-20 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-9 hover:bg-white/70 hover:text-gray-900">
                        <span>View All</span>
                        <ArrowUpRight className="size-5" />
                      </button>
                    </a>
        </div>
      </div>
    </section>
  );
};
