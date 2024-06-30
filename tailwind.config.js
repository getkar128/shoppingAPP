/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'dark-1': '#121417',
                'dark-2': '#293038',
                'btn-1': '#308CE8',
                'secondary-text': '#9EABB8'
                
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
            },
            fontSize: {
                xxs: '10px'
            }
        },
    },
    plugins: [],
  }
  
  