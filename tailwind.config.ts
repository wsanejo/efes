import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        steel: "rgb(var(--steel) / <alpha-value>)",
        graphite: "rgb(var(--graphite) / <alpha-value>)",
        mist: "rgb(var(--mist) / <alpha-value>)",
        slate: "rgb(var(--slate) / <alpha-value>)",
        ember: "rgb(var(--ember) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
        panel: "rgb(var(--panel) / <alpha-value>)"
      },
      boxShadow: {
        soft: "0 20px 50px rgba(15, 23, 42, 0.12)",
        glass: "0 24px 60px rgba(15, 23, 42, 0.22)"
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"]
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(148, 163, 184, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.08) 1px, transparent 1px)"
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        pulseline: "pulseline 4s ease-in-out infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        pulseline: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.95" }
        }
      }
    }
  },
  plugins: []
};

export default config;
