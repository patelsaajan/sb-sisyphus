import { main } from "nuxi";
import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  theme: {
    container: {
      padding: "2rem",
      center: true,
    },

    extend: {
      // fontFamily: {
      // },
      fontSize: {
        "lg-heading": "5rem",
        heading: "3rem",
        "sub-heading": "2rem",
      },
      aspectRatio: {
        auto: "auto",
        square: "1 / 1",
        video: "16 / 9",
      },
      colors: {
        main: "#b82601",
        secondary: "#813772",
        neutral: "#062f4f",
        black: "#000",
        text: {
          DEFAULT: "#444",
          alternative: "#d6c9c9",
        },
      },
      typography: {
        DEFAULT: {
          css: {
            fontSize: "1.4rem",
            // 'color': '#383839',
            // 'h1, h2, h3, h4': {
            // 	color: '#383839'
            // },
            // 'a': {
            // 	color: '#f4241d'
            // },
            // 'blockquote': {
            color: "#ffffff",
            // }
          },
        },
      },
    },
  },
};
