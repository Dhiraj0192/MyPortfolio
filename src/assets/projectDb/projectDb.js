// projectImage--bugFinder
import bugFinderSignupPage from '@/assets/images/bugFinderProject/signup-page.png';
import bugFinderLandingPage from '@/assets/images/bugFinderProject/landing-page.png'
// projectImage--xetoXchange
import xetoXchangeHomePage from '@/assets/images/xetoXchangeProject/home-page.png';
import xetoXchangeAdminPage from '@/assets/images/xetoXchangeProject/admin-dashboard-page.png';

const portfolioProjects = [
    {
      id:1,
      company: "College Project",
      year: "2024",
      title: "Bug Finder System",
      desc: "The Bug Finder System is a web-based application designed to assist users in identifying and resolving bugs in their code. The system leverages Large Language Models....",
      des: "The Bug Finder System is a web-based application designed to debug code.",
      link: "https://github.com/Dhiraj0192/Bugs-Finder-main",
      img: bugFinderSignupPage,
      image:bugFinderSignupPage,
      image2: bugFinderLandingPage,
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    },
    {
        id:2,
        company: "Xeto Xchange",
        year: "2024",
        title: "Currency Exchanger",
        desc: "The Xeto Xchange is a web-based currency exchanger application, where convenience meets efficiency in the world of digital asset transactions....",
        des: "The Xeto Xchange is a web-based currency exchanger application",
        link: "https://github.com/Dhiraj0192/currency-exchanger",
        img: xetoXchangeHomePage,
        image:xetoXchangeHomePage,
        image2: xetoXchangeAdminPage,
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    },
    
  ];

  export default portfolioProjects