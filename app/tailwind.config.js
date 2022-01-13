module.exports = {
  content: [
    './pages/index.js',
    './pages/navbar.js',
    './pages/hero.js',
    './pages/APOD.js',
    './pages/Planets/[planet].js',
    './pages/search.js',
  ],
  theme: {
    extend: {
      screens: {
        lg: '1024px',
      }
    },
  },
  plugins: [],
}
