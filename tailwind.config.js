/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0F1115',
        cloud: '#F7F7FA',
      },
      fontFamily: {
        display: ['"Sora"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        // Single shared brand gradient — change here to re-theme the whole app
        brand: 'linear-gradient(90deg, #F97316 0%, #EC4899 55%, #8B5CF6 100%)',
      },
      boxShadow: {
        card: '0 1px 2px rgba(15, 17, 21, 0.06), 0 1px 8px rgba(15, 17, 21, 0.04)',
      },
    },
  },
  plugins: [],
}
