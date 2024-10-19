'use client';

import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import aadiImage from '@/assets/images/aadi.png';

import ParticlesContainer from "@/components/ParticlesContainer";
import { useRouter } from 'next/navigation'
export const HeroSection = () => {
  const router = useRouter();
  return (
    <div className="py-32 md:py-38 lg:py-40 lg:flex lg:gap-10 lg:px-20 overflow-x-clip">
      <div className="w-full h-full fixed right-0 top-0 -z-20">
      <ParticlesContainer></ParticlesContainer>
      </div>

      <div className="hidden md:block absolute inset-0 md:w-[850px] md:h-[600px] border-2 lg:top-[55%] lg:left-[35%] -translate-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5 pointer-events-none"></div>
      
      <div className="container lg:mr-28">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Person peeking behind laptop"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full animate-ping"></div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-3xl md:text-4xl text-center mt-8 tracking-wide">
            Dhiraj Yadav
          </h1>
          <h2 className="font-serif text-3xl md:text-4xl text-center mt-0 tracking-wide">
            As <span className="text-emerald-300 to-sky-500">Core Developer</span>
          </h2>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            Hi, I'm Dhiraj Yadav! I'm a passionate developer with experience
            building web, mobile, and even machine learning applications. I
            enjoy the challenge of taking ideas and turning them into functional
            realities through code.
          </p>
          <p className="mt-4 text-center text-emerald-300 to-sky-500 font-semibold">
            Feel free to explore my portfolio to see what I've been working on!
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4 lg:mt-16">
          <button onClick={()=>{
            router.push('/projects');
          }} className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4"></ArrowDown>
          </button>
          <button onClick={()=>{
            router.push('/contactme');
          }} className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl hover:bg-green-500">
            <span>👋</span>
            <span className="font-semibold">Let's Connect</span>
          </button>
        </div>
      </div>
      <div className="hidden lg:block lg:ml-[-250px] lg:mt-[0px] z-20">
        <Image src={aadiImage} alt="My Image" className=""></Image>
      </div>
    </div>
  );
};
