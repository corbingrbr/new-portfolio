const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "white-black-pattern": "url('/backgrounds/white-black-pattern.jpg')",
      },
      backgroundColor: {
        cyan: "#00FFFF",
        magenta: "#FF00FF",
        yellow: "#FFFF00",
        green: "#00FF00",
        red: "#FF0000",
        blue: "#0000FF",
      },
      maxHeight: {
        128: "32rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  variants: {
    extend: {},
  },
};
