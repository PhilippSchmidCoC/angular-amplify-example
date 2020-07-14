module.exports = {
  purge: {
    mode: "all",
    content: ["src/**/**/*.{html,js,jsx,ts,tsx}"]
  },
  theme: {
    fontFamily: {
      sans: ['"Open Sans"', "sans-serif"]
    },
    extend: {
      colors: {
        "light-blue": "#e1eaf0",
        "medium-blue": "#608ca1",
        "dark-blue": "#03345f",
        "medium-gray": "#c6c7c9",
        "dark-gray": "#4c4c4c",
        "rosy-brown": "#e7c6b4"
      }
    }
  },
  variants: {},
  plugins: [require("@tailwindcss/custom-forms")]
};
