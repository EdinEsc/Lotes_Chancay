module.exports = {
  plugins: {
    'postcss-nesting': {},      // 👈 debe ir antes que tailwind
    tailwindcss: {},
    autoprefixer: {},
  },
};
