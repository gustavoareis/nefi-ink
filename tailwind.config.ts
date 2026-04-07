import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-cinzel)', 'Georgia', 'serif'],
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        ink: {
          black:   '#080808',
          surface: '#111111',
          lift:    '#161616',
          text:    '#e8e0d0',
          muted:   '#7a7060',
          subtle:  '#4a4540',
          red:     '#c41e1e',
          'red-dim':'#7a1212',
          gold:    '#b8960c',
          border:  '#1e1e1e',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'line-grow': 'lineGrow 0.6s ease forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4,0,0.6,1) infinite',
        'scroll-hint': 'scrollHint 1.6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        lineGrow: {
          from: { transform: 'scaleX(0)' },
          to:   { transform: 'scaleX(1)' },
        },
        scrollHint: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '1' },
          '50%':      { transform: 'translateY(10px)', opacity: '0.4' },
        },
      },
    },
  },
  plugins: [],
}

export default config
