/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        backgroundBlue: "#001a4d",
        pretzelDaOGreen: "#00FFC4",
        pretzelDAOBlue: "#0077FF",
        pretzelDAORed: "#FF1654",
      },
    },
  },
  plugins: [],
};
