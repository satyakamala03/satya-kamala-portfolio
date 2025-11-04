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
        primary: '#000000',
        secondary: '#666666',
        accent: '#0066FF',
        pink: '#FF6B9D',
        purple: '#9B59B6',
        orange: '#FF8C42',
        yellow: '#FFD93D',
        green: '#6BCB77',
        blue: '#4ECDC4',
        coral: '#FF6B6B',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'serif'],
        elegant: ['var(--font-cormorant)', 'serif'],
        trustDisplay: ['var(--font-dm-serif-display)', 'serif'],
        dancing: ['var(--font-dancing-script)', 'cursive'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
