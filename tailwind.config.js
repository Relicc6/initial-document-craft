/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#3b82f6',
        'brand-secondary': '#10b981',
        'brand-accent': '#8b5cf6',
        'brand-muted': '#6b7280',
      },
    },
  },
  plugins: [],
}
