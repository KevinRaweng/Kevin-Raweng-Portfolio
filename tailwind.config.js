/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0a1024', // near-black navy (dominant)
          800: '#0f1832', // slightly lighter navy (alternate)
          700: '#16213f',
          600: '#1e2c52',
        },
        gold: {
          DEFAULT: '#c9a24b',
          soft: '#d9be82',
          dim: 'rgba(201, 162, 75, 0.18)',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        blueprint: {
          primary: '#c9a24b',
          'primary-content': '#0a1024',
          secondary: '#1e2c52',
          accent: '#c9a24b',
          neutral: '#0f1832',
          'base-100': '#0a1024',
          'base-200': '#0f1832',
          'base-300': '#16213f',
          'base-content': '#e6e9f2',
          info: '#8fb4d9',
          success: '#7fae7f',
          warning: '#c9a24b',
          error: '#c97f7f',
        },
      },
    ],
  },
}
