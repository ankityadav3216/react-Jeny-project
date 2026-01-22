// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'housing-blue': '#3a77ff',
        'housing-dark-blue': '#2c5fcc',
      },
    },
  },
  corePlugins: {
    preflight: false, // Important for Ant Design compatibility
  },
  plugins: [],
}