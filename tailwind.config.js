module.exports = {
  purge: {
    mode: "all",
    content: ["src/**/**/*.{html,js,jsx,ts,tsx}"]
  },
  theme: {
    fontFamily: {
      sans: ['"Nürnberger Text Web"', "Calibri", "-apple-system", "sans-serif"]
    },

    fontSize: {
      0: "0",
      xs: "0.6875rem", // 11px
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "2xl": "1.5rem", // 24px
      "3xl": "1.75rem", // 28px
      "4xl": "2rem", // 32px
      "5xl": "2.5rem" // 40px
    },
    lineHeight: {
      none: "1",
      relaxed: "1.625",
      loose: "2",
      1: "1rem", // 16px
      2: "1.625rem", // 26px
      3: "1.6875rem", // 27px
      4: "2rem", // 32px
      5: "2.125rem", // 34px
      6: "2.75rem", // 44px
      7: "3.375rem" // 54px
    },
    colors: {
      inherit: "inherit",
      transparent: "transparent",
      white: "#fff",
      black: "#000",
      blue: "#003460",
      "dark-gray": "#404040",
      pink: {
        light: "#fde8df",
        default: "#fbd2be",
        typo: "#f3987a"
      },
      "gray-blue": {
        "0": "#2a697f",
        "1": "#608ca1",
        "1-5": "#86a6b8",
        "2": "#aec2ce",
        "2-5": "#c6d6e0",
        "3": "#e0ebf1",
        "3-5": "#f1f6f9"
      },
      turquoise: {
        "1": "#009bb7",
        "2": "#7abccf",
        "3": "#bedbe7",
        "4": "#e3eff4"
      },
      purple: {
        "1": "#7f4d7c",
        "2": "#a686a6",
        "3": "#cebdcf",
        "4": "#e9e2eb"
      },
      gray: {
        "1": "#666c6e",
        "2": "#9ea4a7",
        "3": "#cdd0d2",
        "4": "#e7e9eb"
      },
      "traffic-light": {
        red: "#c90526",
        yellow: "#ffd631",
        green: "#44ad4b"
      },
      performance: {
        pink: "#ff7c6b",
        turquoise: "#009bb7",
        "gray-blue": "#e6edf5"
      },
      "performance-hover": {
        pink: "#cc5656",
        turquoise: "#268b99"
      },
      active: {
        blue: "#001f39",
        pink: "#b83737",
        turquoise: "#125c61",
        "gray-blue": "#989fa8"
      }
    }
  },
  variants: {},
  plugins: [require("@tailwindcss/custom-forms")]
};
