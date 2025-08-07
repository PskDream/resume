module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  purge: false,
  theme: {
    extend: {
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Oxygen",
        "Ubuntu",
        "Cantarell",
        "Open Sans",
        "Helvetica Neue",
        "sans-serif",
      ],
      screens: {
        print: { raw: "print" },
      },
    },
  },
  plugins: [],
}
