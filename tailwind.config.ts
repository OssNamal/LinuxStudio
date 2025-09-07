import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Matrix-style green theme
        matrix: {
          green: '#00ff41',
          'green-dark': '#00cc33',
          'green-light': '#66ff66',
          'green-glow': '#00ff41',
          blue: '#0099ff',
          'blue-glow': '#00ccff',
        },
        background: {
          primary: '#000000',
          secondary: '#0a0a0a',
          tertiary: '#111111',
        },
        text: {
          primary: '#00ff41',
          secondary: '#66ff66',
          muted: '#339933',
        },
      },
      fontFamily: {
        mono: ['Courier New', 'monospace'],
        terminal: ['Consolas', 'Monaco', 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier New', 'monospace'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-green': 'pulse-green 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'matrix-rain': 'matrix-rain 20s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': {
            textShadow: '0 0 5px #00ff41, 0 0 10px #00ff41, 0 0 15px #00ff41',
          },
          '100%': {
            textShadow: '0 0 10px #00ff41, 0 0 20px #00ff41, 0 0 30px #00ff41',
          },
        },
        'pulse-green': {
          '0%, 100%': {
            opacity: '1',
            boxShadow: '0 0 0 0 rgba(0, 255, 65, 0.7)',
          },
          '50%': {
            opacity: '.8',
            boxShadow: '0 0 0 10px rgba(0, 255, 65, 0)',
          },
        },
        'matrix-rain': {
          '0%': { transform: 'translateY(-100vh)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
      boxShadow: {
        'glow-green': '0 0 20px rgba(0, 255, 65, 0.5)',
        'glow-blue': '0 0 20px rgba(0, 153, 255, 0.5)',
      },
    },
  },
  plugins: [],
}
export default config