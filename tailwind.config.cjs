/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Neo Sans", "sans-serif"],
      },
      colors: {
        accent: "#e7424f", // rgb(231, 66, 79)
        accentDark: "#b9353f",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
