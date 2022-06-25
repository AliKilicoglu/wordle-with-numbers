/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{html,js,jsx}",
        "./components/**/*.{html,js,jsx}"
    ],
    theme: {
        screens: {
            'mobile': { 'raw': '(max-width: 800px)' },
            'desktop': { 'raw': '(min-width: 800px)' }
        },
        extend: {},
    },
    daisyui: {
        themes: ['cupcake', {
            myDark: {
                "primary": "#1EB854",
                "secondary": "#1FD65F",
                "accent": "#D99330",
                "neutral": "#110E0E",
                "base-100": "#171212",
                "info": "#3ABFF8",
                "success": "#36D399",
                "warning": "#FBBD23",
                "error": "#F87272",
            },
        }, ],
    },
    plugins: [require("daisyui")],
}