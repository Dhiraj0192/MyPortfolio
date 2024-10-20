import React from "react";
import { Button } from '@/components/ui/MovingBorders';

const Experience = () => {
    const workExperience = [
        {
          id: 1,
          title: "Frontend Development",
          desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
          className: "md:col-span-2",
          thumbnail: "/exp1.svg",
        },
        {
          id: 2,
          title: "Mobile App Development",
          desc: "Designed and developed mobile app for both iOS & Android platforms using React Native or Flutter.",
          className: "md:col-span-2", // change to md:col-span-2
          thumbnail: "/exp2.svg",
        },
        {
          id: 3,
          title: "Freelance Dev Project",
          desc: "Led the dev of a mobile app and web-based app for a client, from initial concept to deployment on stores.",
          className: "md:col-span-2", // change to md:col-span-2
          thumbnail: "/exp3.svg",
        },
        {
          id: 4,
          title: "Backend Development",
          desc: "Developed and maintained backend with features using modern backend technologies.",
          className: "md:col-span-2",
          thumbnail: "/exp4.svg",
        },
      ];
  return (
    <div className="container py-16 md:py-10 w-full">
        <h2 className="font-serif text-3xl md:text-4xl text-center mt-6">
          My Work Experience
        </h2>
        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 lg:max-w-4xl max-w-md mx-auto">
          Whether you need a user-friendly website, a powerful mobile app, or
          something in between, I can help you create it. I enjoy working on
          projects from the ground up, and I'm always eager to learn new
          technologies.
        </p>
    
      <div className="w-full mt-12 grid md:grid-cols-4 lg:grid-cols-4 grid-cols-1 gap-5">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            //   random duration will be fun , I think , may be not
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              //   add these two
              //   you can generate the color from here https://cssgradient.io/
              
              
              // add this border radius to make it more rounded so that the moving border is more realistic
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            // remove bg-white dark:bg-slate-900
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col md:items-center lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;