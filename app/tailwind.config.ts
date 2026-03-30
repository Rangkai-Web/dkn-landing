import type { Config } from "tailwindcss";

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1F5E5A",
        secondary: "#2F7F7A",
        accent: "#8FD14F",
        dark: "#1A1A1A",
      },
      fontFamily: {
        sans: ["alegreyasansR", "sans-serif"],
        alegreya: ["alegreyasansR", "sans-serif"],
        alegreyaM: ["alegreyasansM", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
