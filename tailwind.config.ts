import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      fontFamily:{
        sans: 'var(--font-sans)',
        serif:'var(--font-serif)',
      },
      animation:{
        "move-left": 'move-left 1s linear infinite',
        "scroll-to-section": '0.5s ease-in-out'

      },
      keyframes:{
        'move-left':{
          '0%':{
            transform: 'translateX(0%)'
          },
          '100%':{
            transform: 'translateX(-50%)'
          }
        },
        'scroll-to-section': {
          '0%': {
            transform: 'translateY(0)'
          },
          '100%': {
            transform: 'translateY(-100%)'
          }
        }
      }
    },
  },
  plugins: [],
};
export default config;
