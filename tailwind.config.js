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
      blackOpacity: "rgba(18, 18, 18, 0.99)",
    },
    fontFamily: {
      poppins: ["poppins", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
}
