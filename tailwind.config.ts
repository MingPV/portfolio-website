import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        customColor: {
          light: '#abcdef', // custom light shade
          DEFAULT: '#123456', // custom default shade
          dark: '#654321', // custom dark shade
        },
        dark: {
          1:'#171717',
          2:'#222222',
          3:'#343434',
          4:'#484848',
          5:'#666666',
          6:'#B0B0B0',
          7:'#F1F1F1',
        }
      },
      screens: {
        'sm-screen': '850px', // Add this custom breakpoint
      },
    },
  },
  plugins: [],
};
export default config;
