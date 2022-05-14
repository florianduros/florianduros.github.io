module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      desktop: { min: "1000px" },
      mobile: { max: "999px" },
      // => @media (max-width: 1023px) { ... }
    },
    extend: {
      width: {
        header: "1000px",
        leftZone: "400px",
        mainZone: "600px",
      },
    },
  },
  plugins: [],
};
