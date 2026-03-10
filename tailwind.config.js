module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.jsx",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#11d411",
        "background-light": "#f6f8f6",
        "background-dark": "#102210",
      },
      fontFamily: {
        "display": ["Noto Serif", "serif"],
        "sans": ["Noto Sans", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.5rem", 
        "lg": "1rem", 
        "xl": "1.5rem", 
      },
    },
  },
  plugins: [],
}
