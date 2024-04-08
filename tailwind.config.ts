import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "384px",
      md: "576px",
      lg: "864px",
      xlg: "1232px",
    },
    extend: {},
  },
  plugins: [],
};
export default config;
