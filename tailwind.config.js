/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        void:    '#0C0C0C',
        surface: '#141414',
        card:    '#1A1A1A',
        ivory:   '#F0EBE1',
        muted:   'rgba(240,235,225,0.45)',
        dim:     'rgba(240,235,225,0.12)',
        crimson: '#C41C1C',
        gold:    '#C67C2A',
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

