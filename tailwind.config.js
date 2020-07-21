module.exports = {
  purge: ["./components/**/*.tsx", "./styles/index.css"],
  theme: {
    extend: {
      colors: {
        primary: "#28C7C1",
        primaryDark: "#24B3AE",
        secondary: "#FDF9F3",
        secondaryDark: "#FEF4E5",

        dark: "#2F3432",
        semiDark: "#484E4E",
        lightDark: "#929999",
        offWhite: "rgb(248, 249, 250)",
      },
    },
  },
  variants: {},
  plugins: [],
};
