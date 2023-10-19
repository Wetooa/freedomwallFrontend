import type { Config } from 'tailwindcss'
const { fontFamily } = require("tailwindcss/defaultTheme")
const { colors } = require("tailwindcss/colors")

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans]
      },
      colors: {
        ...colors, 
        'primary': "#3498db",
        'secondary': "#e67e22"
      }
    },
  },
  plugins: [],
}
export default config
