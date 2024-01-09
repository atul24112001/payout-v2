/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "rgb(var(--primary))",
        "secondary": "rgb(var(--secondary))",
        "third": "rgb(var(--third))",
        "primary-background": "rgb(var(--primary-background))",
        "secondary-background": "rgb(var(--secondary-background))",
        "third-background": "rgb(var(--third-background))",
        'primary-border': "rgb(var(--primary-border))"
      }
    },
  },
  plugins: [],
}

