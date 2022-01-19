module.exports = {
  content: [
    './pages/index.js',
    './pages/navbar.js',
    './pages/hero.js',
    './pages/hero2.js',
    './pages/APOD.js',
    './pages/solarSystem.js',
    './pages/search.js',
    './pages/Components/planet.js',
    './pages/Components/searchItem.js',

  ],
  theme: {
    extend: {
      screens: {
        lg:'1024px',
      },
      gridTemplateColumns: {
        'custom-4': 'repeat(auto-fit, minmax(235px, 1fr))',
      },
    },
  },
  plugins: [],
}
