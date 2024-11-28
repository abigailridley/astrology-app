import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkest-blue': '#0B132B', 
        'darker-blue': '#1C2541', 
        'dark-blue': '#3A506B', 
      },
    },
  },
  plugins: [],
} satisfies Config;
