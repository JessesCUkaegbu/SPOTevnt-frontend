/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        spot: {
          ink: '#11171d', panel: '#18222b', cream: '#f5f4ee', lime: '#d9ff52',
          blue: '#617cff', coral: '#ff765d', mist: '#a6b0b5',
        },
      },
      fontFamily: { display: ['"Space Grotesk"', 'sans-serif'], sans: ['"DM Sans"', 'sans-serif'] },
      boxShadow: { soft: '0 16px 50px rgba(17, 23, 29, 0.08)' },
    },
  },
  plugins: [],
}
