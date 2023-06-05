/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily : {
           headings : ['Raleway']
      },
      colors : {
        Body : "hsl(217, 28%, 15%)",
         WhiteColor: "hsl(0, 0%, 100%)" , 
         CyanColor : "hsl(176, 68%, 64%)" ,
         MainBackGround : 'hsl(218, 28%, 13%)' ,
         testimonials : "hsl(219, 30%, 18%)" , 
         footer : 'hsl(216, 53%, 9%)'
      }


    },
  },
  plugins: [],
}
