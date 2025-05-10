/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {

                'grove-green': '#1d3226',
                'tan': '#b7afa0',
                'faded': '#b7afa04d',
                'overlay': 'rgba(29, 50, 38, 0.1)',
                'light': '#1d322633',
            }


        },
    },
    plugins: [],
    };