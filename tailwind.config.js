/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1536px',
      },
      maxWidth: {
        'max-device': '1920px',
      },

      colors: {
        'primary-white': '#ffffff',
        'primary-light-gray': '#D3D3D3',
      },
    },
  },
  plugins: [],
};
