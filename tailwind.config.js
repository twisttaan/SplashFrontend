module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        blurple: "#7289DA",
        darkBlurple: "#2c2f33",
        splink: "#ED1E79",
        splash: "#00AEEF",
        dark: "#23272A"
      }
    }
  },
  variants: {
    extend: {
      animation: ["hover", "focus"]
    }
  },
  plugins: []
};
