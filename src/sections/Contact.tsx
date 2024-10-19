"use client";

import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import { useRouter } from 'next/navigation'

export const ContactSection = () => {
  const router = useRouter();
  return <div className='py-12 pt-16'>
    <div className="container">
    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center relative">
    <h2 className='font-serif text-2xl '>Let's create something amazing together</h2>
    <p className='text-sm mt-2'>Ready to bring your next project to life? Let's connect and discuss how I can help you achieve your goals.</p>
    <a onClick={()=>{
            router.push('/contactme');
          }}>
    <button className='text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 mt-8 hover:bg-gray-600'>
      <span className='font-semibold'>Contact Me</span>
      <ArrowUpRightIcon className="size-4"/>
    </button>
    </a>
    
    </div>
    </div>
  </div>;
};
