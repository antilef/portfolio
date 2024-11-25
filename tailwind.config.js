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
        primary: "#1c1c22",
        accent:{
          DEFAULT:"#00ff99",
          hover:"#00e187"
        },
        secondary: "#7B1E71",
        contrast:"#2d2d36",
        "snow" : "#FFFAFA"
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'], // Add your custom font here
      },
    },
  },
  plugins: [],
};
