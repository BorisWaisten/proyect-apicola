/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        terciary: 'var(--terciary)',
        cuarteto: 'var(--cuarteto)',
      },
      textColor: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        terciary: 'var(--terciary)',
        title: 'var(--title)',
      },
      fontFamily: {
        title: ['Playfair Display', 'serif',],
        body: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
