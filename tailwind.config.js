/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}", './*'],
    theme: {
        fontFamily: {
            'montserrat': ['Montserrat', 'sans-serif'],
            'poppins': ['Poppins', 'sans-serif'],
            'inter': ['Inter', 'sans-serif'],
        },
        extend: {
            colors: {
                clifford: '#da373d',
            }
        }
    },
    plugins: [],
}