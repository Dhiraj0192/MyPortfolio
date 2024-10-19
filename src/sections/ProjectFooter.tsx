import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';

const footerLinks = [
  {
    title: "Discord",
    href: "#"
  },
  {
    title: "Twitter",
    href: "#"
  },
  {
    title: "LinkedIn",
    href: "#"
  },
  {
    title: "Facebook",
    href: "#"
  },
]

export const ProjectFooter = () => {
  return <footer className='relative -z-10 overflow-x-clip'>
    <div className="absolute h-[400px] w-full bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/40 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
    <div className="container">
      <div className='border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8'>
        
        <nav className='flex flex-col md:flex-row items-center gap-8'>
          {
            footerLinks.map(link =>(
              <a href={link.href} key={link.title} className='inline-flex items-center gap-1.5'>
                <span className='font-semibold'>{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))
          }
        </nav>
      </div>

    </div>
  </footer>;
};
