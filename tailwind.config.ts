import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import { nextui } from "@nextui-org/react";

export default {
  content: [
    "./src/**/*.tsx",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: ['12px', '16px'],
        sm: ['14px', '21px'],
        lg: ['18px', '27px'],
        'xl': ['24px', '31.2px'],
        '2xl': ['24px', '36px'],
        '3xl': ['30px', '39px'],
        '4xl': ['36px', '46.8px'],
        '5xl': ['36px', '54px']
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          default: "#FFFFFF",
          primary: "#68CFA3",
          content1: "#181D29",
          content2: "#000000",
          content3: '#212327',
          content4: "#808080",
          secondary: "#F1F1F1",
          danger: "#FF3636",
          focus : '#4A4A4A',
          overlay : '#E8E8E8',
        }
      },
      dark: {
        colors: {
          default: "#1E1E1E",
          primary: "#68CFA3",
          content1: "#FFFFFF",
          content2: "#000000",
          content3: '#212327',
          content4: '#B7B7B7',
          secondary: "#212327",
          danger: "#FF3636",
          focus : '#4A4A4A',
          overlay : '#212327',
        }
      },
    }
  })]
} satisfies Config;