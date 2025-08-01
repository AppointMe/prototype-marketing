/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#900A0B',
                secondary: '#262626',
                accent: '#F9FAF5',
                background: '#FBFBFB',
                text: '#151419',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Poppins', 'sans-serif'],
            },
            spacing: {
                xs: '0.5rem',
                sm: '1rem',
                md: '2rem',
                lg: '4rem',
            },
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
            }
        },
    },
    plugins: [],
}
