/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Clean + Earthy Brand Colors - Premium Embroidery Studio
        primary: {
          50: '#f0f4f2',
          100: '#dae6df',
          200: '#b5ccbf',
          300: '#90b39f',
          400: '#6b997f',
          500: '#2F4A43', // Deep Evergreen - headers, nav bar, buttons
          600: '#283e38',
          700: '#21322d',
          800: '#1a2622',
          900: '#131a17',
        },
        secondary: {
          50: '#f7faf8',
          100: '#e8f0eb',
          200: '#d1e1d7',
          300: '#bad2c3',
          400: '#a3c3af',
          500: '#9FB9A5', // Soft Sage - main brand color, accents, icons
          600: '#8ca998',
          700: '#79998b',
          800: '#66897e',
          900: '#537971',
        },
        accent: {
          50: '#faf8f7',
          100: '#f2eded',
          200: '#e5dbda',
          300: '#d8c9c7',
          400: '#cbb7b4',
          500: '#D7A4A0', // Dusty Rose - CTA hover, subtle highlight
          600: '#c9928d',
          700: '#bb807a',
          800: '#ad6e67',
          900: '#9f5c54',
        },
        // Background and text colors
        cream: '#F5F3EC', // Warm Cream - page background
        charcoal: '#3A3A38', // Warm Charcoal - body text
        // Keep some standard grays for utility
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
    },
  },
  plugins: [],
}