import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      'xl': {'max': '1160px'},
      'lg': {'max': '1023px'},
      'Md': { 'max': '920px' },
      'md': {'max': '800px'},
      'sm': {'max': '639px'},
      'mm': {'max' : '350px'},
    },
    extend: {
      colors: {
        'lightBlue': '#00A8FF',
        'darkBlue' : '#001A38',
        'mediumBlue' : '#002E63',
        'lightGray' : '#C7C7C7',
      },
    },
  },
  plugins: [],
};
export default config;
