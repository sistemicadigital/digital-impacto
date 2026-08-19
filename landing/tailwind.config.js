/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        rojo: '#E31E24',
        negro: '#1A1818',
        naranja: '#F7941D',
        magenta: '#EC008C',
        whatsapp: '#25D366',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      backgroundImage: {
        'gradiente-marca': 'linear-gradient(135deg, #F7941D 0%, #EC008C 100%)',
      },
    },
  },
  plugins: [],
}
