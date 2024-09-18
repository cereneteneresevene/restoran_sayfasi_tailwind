/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container:{
      center:true,
      screens: {
        lg: '1140px',
        xl: '1140px',
        '2xl': '1140px',
      },
    },
    extend: {
      fontFamily: {
        cuba: ["Playwrite CU", 'cursive'],
        sans: ["Playpen Sans", 'cursive'],
      },
      colors: {
        'natural-beige': '#f5f5dc',   /* Bej */
        'natural-coffee': '#8b4513',  /* Sütlü Kahve */
        'natural-dark-coffee': '#4b3621', /* Koyu Kahve */
        'natural-orange-red': '#ff4500', /* Turuncu Kırmızı */
        'natural-golden': '#daa520',   /* Altın Rengi */
      },
      spacing:{
        128:'32rem'
      },
    },
  },
  plugins: [],
}

