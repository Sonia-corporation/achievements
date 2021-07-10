const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'media',
  purge: ['./src/**/*.{html,svelte,css,js,ts}', './lib/**/*.{html,svelte,css,js,ts}', './tailwind.config.cjs'],
  theme: {
    extend: {},
  },
  prefix: 'tw-',
  important: '#achievements-app',
  separator: ':',
  mode: 'jit',
  colors: {
    gray: colors.coolGray,
    blue: colors.sky,
    red: colors.rose,
    pink: colors.fuchsia,
  },
  fontFamily: {
    sans: ['Graphik', 'sans-serif'],
    serif: ['Merriweather', 'serif'],
  },
  corePlugins: {
    preflight: true,
  },
};
