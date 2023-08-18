/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      blue: '#345ff6',
      darkGray: '#253347',
      gray: '#5e6e85',
      lightGray: '#d8e2e7',
      white: '#ffffff',
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        x: '',
      },
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [],
};
