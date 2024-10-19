import StarIcon from '@/assets/icons/star.svg';
import bookImage from '@/assets/images/book-cover.png';
import Image from 'next/image';

// icons
import { FaHtml5,FaCss3,FaReact,FaLaravel,FaWordpress } from "react-icons/fa";
import { TbBrandJavascript,TbBrandDjango,TbBrandReactNative } from "react-icons/tb";
import { RiNextjsFill,RiFlutterFill } from "react-icons/ri";
import { SiAndroidstudio } from "react-icons/si";
import { TechIcon } from '@/components/TechIcon';

// mapimage
import mapImage from '@/assets/images/map.png';
import smileImage from '@/assets/images/memoji-smile.png';
import { Fragment } from 'react';

const toolboxItems =[
  {
    title: 'HTMl5',
    iconType: FaHtml5,
  },
  {
    title: 'CSS3',
    iconType: FaCss3,
  },
  {
    title: 'JavaScript',
    iconType: TbBrandJavascript,
  },
  {
    title: 'React',
    iconType: FaReact,
  },
  {
    title: 'NextJs',
    iconType: RiNextjsFill,
  },
  {
    title: 'Laravel',
    iconType: FaLaravel,
  },
  {
    title: 'Django',
    iconType: TbBrandDjango,
  },
  {
    title: 'Wordpress',
    iconType: FaWordpress,
  },
]

const appToolboxItems = [
  {
    title: 'Flutter',
    iconType : RiFlutterFill,
  },
  {
    title: 'Android-Studio',
    iconType : SiAndroidstudio,
  },
  {
    title: 'React-Native',
    iconType: TbBrandReactNative,
  },
]

const hobbies = [
  {
    title : "Painting",
    emoji : "🖌️"
  },
  {
    title : "Gaming",
    emoji : "🎮"
  },
  {
    title : "Music",
    emoji : "🎵"
  },
  {
    title : "Readind",
    emoji : "📚"
  },
]

export const AboutSection = () => {
  return <div className='py-18'>
    <div className="container">
    <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
      About Me
    </p>
      <h2 className="font-serif text-3xl md:text-4xl text-center mt-6">A Glimpse Into My World</h2>
      <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 lg:max-w-2xl max-w-md mx-auto">2 years ago, I began freelancing as a developer. Since then, I've
            done remote work for different companies, consulted for startups,
            and collaborated on digital products for business and consumer use.
      </p>
      <p className="hidden lg:block text-center md:text-lg lg:text-xl text-white/60 mt-4 lg:max-w-4xl max-w-md mx-auto">Whether you need a user-friendly website, a powerful mobile app, or
            something in between, I can help you create it. I enjoy working on
            projects from the ground up, and I'm always eager to learn new
            technologies.
      </p>
      <div className='mt-20 flex flex-col gap-6 -z-10 '>
        <div className=" md:grid md:grid-cols-5 lg:grid-cols-3 md:gap-8 flex flex-col gap-6">

        
        {/* card */}
        <div className="md:col-span-2 lg:col-span-1 bg-gray-800 rounded-3xl relative after:content-[''] after:absolute after:inset-0 overflow-hidden after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-5 pt-8 md:pt-12 md:px-10  lg:pt-8 lg:px-10 after:pointer-events-none hover:-rotate-3 transition duration-300">
        <div className='flex flex-col'>
          <div className="inline-flex items-center gap-2">
          <StarIcon className="size-9 text-emerald-300"/>
          <h3 className='font-serif text-3xl'>My Reads</h3>
          </div>
          <p className='text-sm w-full text-white/60 mt-2'>Explore the books shaping my perspectives.</p>
        </div>
        <div className="w-40 mx-auto mt-6 ">
        <Image src={bookImage} alt='Book Cover'style={{width:"100%",height:230,marginBottom:20}}/>
        </div>

        </div>
        {/* end card */}
        {/* card */}
        <div className="md:col-span-3 lg:col-span-2 bg-gray-800 rounded-3xl relative after:content-[''] after:absolute after:inset-0 z-0 after:z-10 overflow-hidden after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-5 pt-8 md:pt-12 md:px-10 after:pointer-events-none lg:pt-8 lg:px-10 hover:rotate-3 transition duration-300">
        <div className='flex flex-col'>
          <div className="inline-flex items-center gap-2">
          <StarIcon className="size-9 text-emerald-300"/>
          <h3 className='font-serif text-3xl'>My Toolbox</h3>
          </div>
          <p className='text-sm w-full text-white/60 mt-2'>Explore the technologies and tools I use to craft exceptional digital experiences.</p>
        </div>
        
        <div className='py-4'>
          <p className='text-lg font-bold '>Web Development</p>
        </div>
        <div className='flex     [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
        <div className="flex flex-none py-0.5 gap-6 pr-6 animate-move-left [animation-duration:30s] -translate-x-1/2">
        {[...new Array(2)].fill(0).map((_, index)=>(
          <Fragment key={index}>
            {
            toolboxItems.map(item => (
              <div className="inline-flex items-center gap-6 py-2 px-3 outline outline-2 outline-white/10 rounded-lg" key={item.title}>
                <TechIcon component={item.iconType} />
                <span className='font-semibold'>{item.title}</span>
              </div>
            ))
          }

          </Fragment>
        ))}
        
          
        </div>
        </div>

        <div className='py-4'>
          <p className='text-lg font-bold '>App Development</p>
        </div>
        <div className=" flex flex-row overflow-y-auto py-0.5 gap-6 mb-6">
          {
            appToolboxItems.map(item => (
              <div className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg" key={item.title}>
                <TechIcon component={item.iconType} />
                <span className='font-semibold'>{item.title}</span>
              </div>
            ))
          }
        </div>
        

        </div>
        {/* end card */}
        </div>
        <div className="md:grid md:grid-cols-5 lg:grid-cols-3 md:gap-8 flex flex-col gap-6">

        
        {/* card */}
        <div className="lg:h-[190px] md:col-span-3 lg:col-span-2 bg-gray-800 rounded-3xl relative after:content-[''] after:absolute after:inset-0 z-0 after:z-10 overflow-hidden after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-5 pt-8 md:pt-12 md:px-10 after:pointer-events-non lg:pt-8 lg:px-10 hover:rotate-3 transition duration-300">
        <div className='flex flex-col'>
          <div className="inline-flex items-center gap-2">
          <StarIcon className="size-9 text-emerald-300"/>
          <h3 className='font-serif text-3xl'>Beyond the Code</h3>
          </div>
          <p className='text-sm w-full text-white/60 mt-2'>Explore my interest and hobbies beyond the digital realm</p>
        </div>
        
        <div className='mb-6'>
          {
            hobbies.map(hobby =>(
              <div key={hobby.title} className='inline-flex items-center gap-2 px-6 mt-6 mr-2 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5'>
                <span className='font-medium text-gray-950'>{hobby.title}</span>
                <span>{hobby.emoji}</span>
              </div>
            ))
          }
        </div>
        

        </div>
        {/* end card */}
        {/* card */}
        <div className="md:col-span-2 lg:col-span-1 lg:h-[190px] h-[320px] bg-gray-800 rounded-3xl relative after:content-[''] after:absolute after:inset-0 z-0 after:z-10 overflow-hidden after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 p-0 after:pointer-events-non hover:-rotate-3 transition duration-300">
        <Image className='h-full w-full object-cover' src={mapImage} alt="mapImage"/>
        <div className=' absolute top-1/2 left-32 -translate-y-1/2 size-20 rounded-full'>
        <div className='absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]'></div>
        
        <div className='absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10'></div>

        
        <Image className='size-20' src={smileImage} alt='smile emoji'/>
        </div>
        

        </div>
        {/* end card */}
        </div>
      </div>
    </div>

  </div>;
};
