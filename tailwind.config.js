/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '375px',
      },
      colors: {
        ink: {
          DEFAULT: '#0D0D0F',
          2: '#18181B',
          3: '#26262B',
        },
        paper: {
          DEFAULT: '#FAFAFB',
          2: '#F0F0F2',
          3: '#E1E1E5',
        },
        mute: '#6B6B73',
        brand: {
          DEFAULT: '#ED184F',
          deep: '#B5103A',
          soft: '#FBD3DE',
        },
        ember: '#F05A28',
        // kept so any leftover `primary` classes still resolve to the brand red
        primary: {
          DEFAULT: '#ED184F',
          dark: '#B5103A',
          light: '#F04D75',
        },
      },
      fontFamily: {
        sans: ['"Geist Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'ui-serif', 'Georgia', 'serif'],
        mono: ['"Geist Mono Variable"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(3.4rem, 11vw, 11.5rem)', { lineHeight: '0.9', letterSpacing: '-0.055em' }],
        'display-l': ['clamp(2.8rem, 7.4vw, 7.5rem)', { lineHeight: '0.94', letterSpacing: '-0.045em' }],
        'display-m': ['clamp(2.2rem, 5vw, 4.75rem)', { lineHeight: '1', letterSpacing: '-0.04em' }],
        'display-s': ['clamp(1.75rem, 3.2vw, 3rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        lead: ['clamp(1.125rem, 1.6vw, 1.375rem)', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
      },
      maxWidth: {
        site: '1440px',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.22, 1, 0.36, 1)',
        'in-out-expo': 'cubic-bezier(0.87, 0, 0.13, 1)',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translate3d(0,0,0)' },
          to: { transform: 'translate3d(-50%,0,0)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.85)' },
        },
      },
      animation: {
        marquee: 'marquee var(--marquee-duration, 40s) linear infinite',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
