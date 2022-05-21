import { defineConfig } from "vite-plugin-windicss";

export default defineConfig({
  mode: "jit",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1760px",
      },
    },
  },
  plugins: [],
});
