/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Bricolage Grotesque Variable",
          "Inter Variable",
          "Inter",
          ...defaultTheme.fontFamily.sans,
        ],
        angus: ['"Angus"', 'sans-serif'],
        ibmPlexMono: ['"IBM Plex Mono"', 'monospace'],
      },
      fontWeight: {
        light: 400,
        mediumItalic: 400,
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
