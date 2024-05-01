/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primaryGreen: '#9ACB3B',
        secondaryGreen: '#7AB843',
        primaryBlue: '#34BDD2',
        primaryPurple: '#6351A3',
        primaryOrange: '#F88436',
        primaryRed: '#DB2637',

      },
    },
  },
  plugins: [],
};
