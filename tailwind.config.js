module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            flex: {
                '1/2': "50%",
                '1/3': "33.3333%",
                '2/5': "40%",
                'full': "100%"
            },
        },
    },
    plugins: [],
}
