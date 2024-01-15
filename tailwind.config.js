/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      orange: {
        100: "#FFF2DC",
        200: "#F8D6B3",
        300: "#F2BB89",
        400: "#EB9F60",
        500: "#E48336",
        600: "#CA722E",
        700: "#B16027",
        800: "#974F1F",
        900: "#7D3E17",
        1000: "#632D0F",
        1100: "#4A1B08",
        1200: "#300A00",
      },
    },
  },
  plugins: [],
};
