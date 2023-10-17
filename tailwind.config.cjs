/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      transparent: "transparent",
      accent: "#e7424f", // rgb(231, 66, 79)
      accentDark: "#b9353f",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
