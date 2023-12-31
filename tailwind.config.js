/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./qr/**/*.{html,js}",
    "./sale/**/*.{html,js}",
    "./panduan/**/*.{html,js}",
    "./panduan/jam-masjid/app/index.html",
    "./panduan/jam-masjid/app/pro.html",
    "./panduan/jam-masjid/app/basic.html",
    "./*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        amethyst: {
          200: "#aab8fc",
          600: "#727ecc",
        },
        navy: {
          800: "#062644",
          900: "#001E3C",
        },
      },
    },
  },
  plugins: [],
};
