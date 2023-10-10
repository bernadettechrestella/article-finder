/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': '320px',
      'tablet': '480px',
      'laptop': '769px',
      'desktop': '1025px',
      'large': '1201px'
    },
  },
  plugins: [],
}