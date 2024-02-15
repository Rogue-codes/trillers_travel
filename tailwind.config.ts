import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      color: {
        green: {
          300:"#425c5a",
          700: "#3d5654"
        },
        blue: {
          200: "#e2eceb"
        }
      },
      backgroundImage: {
        // "desktop": "url('../assets/background.jpg')" 
        // 'hero-pattern': "url('/img/hero-pattern.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
