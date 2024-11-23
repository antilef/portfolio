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
        primary: "#0C0A3E",
        secondary: "#7B1E71",
        "snow" : "#FFFAFA"
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'], // Add your custom font here
      },
    },
  },
  plugins: [],
};
