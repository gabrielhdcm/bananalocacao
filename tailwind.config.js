/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        banana: '#FFCC00',
        construcao: '#006633',
        darktext: '#1F2937',
        softbg: '#F8FAFC'
      },
      boxShadow: {
        soft: '0 10px 30px rgba(31, 41, 55, 0.08)',
        strong: '0 20px 40px rgba(0, 102, 51, 0.18)'
      }
    }
  },
  plugins: []
};
