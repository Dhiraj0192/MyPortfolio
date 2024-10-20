"use client";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import TopLeftImg from "@/components/TopLeftImg";
import { TapeSection } from "@/sections/Tape";
import Circles from "@/components/Circles";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";


import { useEffect, useRef, useState } from 'react';
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FaHome } from "react-icons/fa";
import Experience from "@/sections/Experience";
import Approach from "@/sections/Approach";

const ScrollAudio: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [hasPlayed, setHasPlayed] = useState(false); // State to track if audio has played

  const handlePlay = async () => {
    if (audioRef.current && !hasPlayed) {
      try {
        await audioRef.current.play();
        setHasPlayed(true); // Set to true after playing
      } catch (error) {
        console.error("Audio playback failed:", error);
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      handlePlay(); // Play audio on scroll
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasPlayed]); // Re-run effect if hasPlayed changes

  return (
    <div>
      <audio ref={audioRef} src="/welcome.mp3" preload="auto" />
    </div>
  );
};



export default function Home() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "/contactme" },
  ];
  return (
    <div>
      
      <Circles/>
      <FloatingNav navItems={navItems}></FloatingNav>
      <HeroSection/>
      <TapeSection/>
      <ProjectsSection/>
      <TapeSection/>
      <AboutSection/>
      <Experience/>
      <Approach/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}
