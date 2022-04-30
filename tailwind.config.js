module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'expletussans': ['Expletus Sans', 'cursive'] 
      },
    },
    colors:{
      primary: '#001427',
      secondary: '#F4D58D',
      white: '#ffffff',
      black: "#000000"
      
    }
  },
  plugins: [],
}
