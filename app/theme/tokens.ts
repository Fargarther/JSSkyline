export const tokens = {
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
    },
    text: {
      primary: '#FAFAFA',
      secondary: '#D4D4D4',
      muted: '#A3A3A3',
    }
  },
  
  spacing: {
    section: 'clamp(4rem, 8vw, 8rem)',
    container: 'clamp(1rem, 4vw, 2rem)',
    grid: {
      xs: '1rem',
      sm: '1.5rem',
      md: '2rem',
      lg: '3rem',
      xl: '4rem',
    }
  },
  
  typography: {
    fontFamily: {
      display: 'var(--font-anton)',
      body: 'var(--font-inter)',
    },
    fontSize: {
      hero: 'clamp(3rem, 8vw, 8rem)',
      displayLg: 'clamp(2.5rem, 6vw, 4rem)',
      displayMd: 'clamp(2rem, 4vw, 3rem)',
      displaySm: 'clamp(1.5rem, 3vw, 2rem)',
      h1: 'clamp(1.75rem, 3vw, 2.5rem)',
      h2: 'clamp(1.5rem, 2.5vw, 2rem)',
      h3: 'clamp(1.25rem, 2vw, 1.5rem)',
      body: '1rem',
      bodyLg: '1.125rem',
      bodySm: '0.875rem',
      caption: '0.75rem',
    },
    lineHeight: {
      hero: '0.9',
      display: '1.1',
      heading: '1.3',
      body: '1.6',
    }
  },
  
  animation: {
    duration: {
      fast: '0.2s',
      normal: '0.3s',
      slow: '0.6s',
      slower: '1s',
    },
    easing: {
      ease: 'ease',
      easeOut: 'cubic-bezier(0.16, 1, 0.3, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    }
  },
  
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modal: 1040,
    popover: 1050,
    tooltip: 1060,
  }
} as const;

export type Tokens = typeof tokens;