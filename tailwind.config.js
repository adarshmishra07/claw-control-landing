/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // OpenClaw Design System (from Gohan's analysis)
        background: {
          DEFAULT: '#0A0A0A',
          secondary: '#141414',
          surface: '#1A1A1A',
          'surface-hover': '#252525',
        },
        accent: {
          DEFAULT: '#FF6B6B',
          bright: '#FF4444',
          muted: '#E85555',
          gradient: {
            start: '#CC3333',
            end: '#FF8080',
          }
        },
        text: {
          primary: '#FAFAFA',
          secondary: '#E0E0E0',
          muted: '#9CA3AF',
          disabled: '#6B7280',
        },
        border: {
          DEFAULT: '#2A2A2A',
          hover: '#3A3A3A',
        },
        // Legacy coral colors for compatibility
        coral: {
          DEFAULT: '#FF6B6B',
          300: '#FFB4A2',
          400: '#FF9B85',
          500: '#FF6B6B',
          600: '#EF4444',
        },
      },
      fontFamily: {
        heading: ['DM Sans', 'system-ui', 'sans-serif'],
        body: ['Fragment Mono', 'monospace'],
        display: ['Cal Sans', 'DM Sans', 'system-ui', 'sans-serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        mono: ['Fragment Mono', 'JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        'card': '12px',
        'button': '8px',
      },
      animation: {
        'float': 'float 5s ease-in-out infinite',
        'fade-in': 'fadeIn 0.4s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'coral': '0 0 40px rgba(255, 107, 107, 0.3)',
        'button': '0 4px 20px rgba(255, 68, 68, 0.25)',
      },
    },
  },
  plugins: [],
}
