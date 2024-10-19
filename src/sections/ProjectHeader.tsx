"use client";
import { useRouter } from 'next/navigation'

export const ProjectHeader = () => {
  const router = useRouter();
  return <div className="flex justify-center items-center fixed top-3 lg:top-10 w-full z-50">
    <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
      <a onClick={()=>(
        router.push('/')
      )} className="cursor-pointer nav-item">Home</a>
      <a onClick={()=>(
        router.push('/projects')
      )} className="cursor-pointer nav-item">Projects</a>
      <a onClick={()=>(
        router.push('/contactme')
      )} className="cursor-pointer nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">Contact</a>
    </nav>
  </div>;
};
