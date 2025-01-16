import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        appGray: "#343C6A",
        appLightGray: "#B1B1B1",
        appBlack: "#232323",
        appWhite: "#FFFFFF",
        cardDark: "#5B5A6F",
        cardDarkBorder: "#5B5A6F",
        cardLight: "#FFFFFF",
        cardLightBorder: "#DFEAF2",
        appLightWhite: "#F5F7FA",
        appSubBlue: "#718EBF",
        appRed: "#FF4B4A",
        appGreen: "#41D4A8",
        appInputGray: "#EDF1F7",
      },
      fontSize: {
        root: "16px",
        fslogo: "1.3rem",
        fsh2: "1.5rem",
        fsh3: "1.1rem",
        fssubheading: "1.2rem",
        "fs1.3": "1.3rem",
      },
      fontFamily: {
        LatoFont: "'Lato', sans-serif",
      },
      screens: {
        "4k": "2560px",
      },
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "4k": "6rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
