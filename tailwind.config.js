/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./qr/**/*.{html,js}",
    "./*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        'amethyst': {
          200: '#aab8fc',
          600: '#727ecc',
        },
        'navy': {
          800: '#062644',
          900: '#001E3C',
        },
      },
    },
  },
  safelist: [
    // {
    //   pattern: /bg-(amethyst|navy|slate|sky|amber|blue|emerald|lime|pink|indigo)-(100|200|300|400|500|600|700|800|900)/,
    // },
    // {
    //   pattern: /from-(amethyst|navy|slate|sky|amber|blue|emerald|lime|pink|indigo)-(100|200|300|400|500|600|700|800|900)/,
    // },
    // {
    //   pattern: /to-(amethyst|navy|slate|sky|amber|blue|emerald|lime|pink|indigo)-(100|200|300|400|500|600|700|800|900)/,
    // },
    // {
    //   pattern: /ring-(amethyst|navy|slate|sky|amber|blue|emerald|lime|pink|indigo)-(100|200|300|400|500|600|700|800|900)/,
    // },
    // {
    //   pattern: /border-(amethyst|navy|slate|sky|amber|blue|emerald|lime|pink|indigo)-(100|200|300|400|500|600|700|800|900)/,
    // },
    // {
    //   pattern: /text-(amethyst|navy|slate|sky|amber|blue|emerald|lime|pink|indigo)-(100|200|300|400|500|600|700|800|900)/,
    // },
    // {
    //   pattern: /placeholder-(amethyst|navy|slate|sky|amber|blue|emerald|lime|pink|indigo)-(100|200|300|400|500|600|700|800|900)/,
    // },
    // {
    //   pattern: /white/,
    // },
    // {
    //   pattern: /grid-(rows|cols)-(1|2|3|4|5)/,
    // },
    // {
    //   pattern: /(w|h)-(0|1|2|3|4|5|6|7|8|9|10|11|12|14|16|20|22|24|28|32)/,
    // },
    // {
    //   pattern: /(ring)-(0|1|2|4|8)/,
    // }
  ],
  plugins: [
    // require('@tailwindcss/aspect-ratio'),
  ],
}
