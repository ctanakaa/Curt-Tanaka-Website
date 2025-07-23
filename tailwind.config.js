module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#2563eb',
          dark: '#60a5fa',
        },
        background: {
          light: '#f9fafb',
          dark: '#18181b',
        },
        card: {
          light: '#f3f4f6',
          dark: '#27272a',
        },
      },
    },
  },
  plugins: [],
}; 