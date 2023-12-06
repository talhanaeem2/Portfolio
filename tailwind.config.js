/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts,tsx}", "./index.html"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      onyx: "#121212",
      silverChalice: "#aaaaaa",
    },
    fontFamily: {
      poppins: ["poppins", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
}
