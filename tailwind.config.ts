import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "inter": "var(--font-inter)",
      },
      keyframes: {
        "fade-out-down": {
          from: {
            opacity: "1",
            transform: "translateY(0)",
          },
          to: {
            opacity: "0",
            transform: "translateY(40%)",
          },
        },
        "expand": {
          from: {
            width: "2rem",
            background: "rgb(71, 85, 105)",
          },
          to: {
            width: "4rem",
            background: "rgb(226, 232, 240)",
          }
        },
        "colorized": {
          from: {
            color: "rgb(100, 116, 139)"
          },
          to: {
            color: "rgb(226, 232, 240)"
          },
        },
      },
      animation: {
        "fade-out-down": "fade-out-down linear forwards",
        "expand": "expand linear forwards",
        "colorized": "colorized linear forwards",
        "make-it-bigger": "make-it-bigger linear forwards",
      },
      supports: {
        "no-scroll-driven-animations": "not(animation-timeline: scroll())",
        "no-view-driven-animations": "not(animation-timeline: view())",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
