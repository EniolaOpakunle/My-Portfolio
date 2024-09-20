/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "rgb(18, 14, 110)",
        backgroundBlue: "rgb(252, 254, 255)",
        backgroundBlue2: "rgb(159, 192, 245)",
        titleBlue: "rgb(72, 70, 122)"
      },
    },
  },
  plugins: [],
};
