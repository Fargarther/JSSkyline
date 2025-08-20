import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        orange: {
          primary: '#FF9023',
          light: '#FFB366',
          dark: '#E5801F',
        },
        neutral: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0A0A0A',
        },
        background: {
          primary: '#0A0A0A',
          secondary: '#171717',
          tertiary: '#262626',
        }
      },
      fontFamily: {
        'display': ['var(--font-anton)', 'sans-serif'],
        'body': ['var(--font-inter)', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(3rem, 8vw, 8rem)', { lineHeight: '0.9' }],
        'display-lg': ['clamp(2.5rem, 6vw, 4rem)', { lineHeight: '1.1' }],
        'display-md': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.2' }],
        'display-sm': ['clamp(1.5rem, 3vw, 2rem)', { lineHeight: '1.3' }],
      },
      spacing: {
        'section': 'clamp(4rem, 8vw, 8rem)',
        'container': 'clamp(1rem, 4vw, 2rem)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'pinline': 'pinlineGrow 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pinlineGrow: {
          '0%': { height: '0%' },
          '100%': { height: '100%' },
        },
      },
    },
  },
  plugins: [],
}

export default config