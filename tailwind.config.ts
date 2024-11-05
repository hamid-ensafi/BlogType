import type { Config } from "tailwindcss";

const config: Config = {
  content: [
   './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        iranSans: 'iranSans',
      },
      colors: {
        dark_900: "#121212",
        dark_700: "#1a1a1a",
        dark_600: "#333",
        dark_500:'#1e1e1e',
        blue_500:'#5664f5'
        // foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
