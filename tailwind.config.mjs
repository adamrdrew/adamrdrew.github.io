/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Dark theme developer portfolio palette
        background: {
          primary: '#0f172a',   // slate-900
          secondary: '#1e293b', // slate-800
          tertiary: '#334155',  // slate-700
        },
        text: {
          primary: '#f8fafc',   // slate-50
          secondary: '#cbd5e1', // slate-300
          muted: '#94a3b8',     // slate-400
        },
        accent: {
          primary: '#3b82f6',   // blue-500
          secondary: '#8b5cf6', // violet-500
          hover: '#2563eb',     // blue-600
        },
        border: '#475569',      // slate-600
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          '"SF Mono"',
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          '"Courier New"',
          'monospace',
        ],
      },
    },
  },
  plugins: [],
}
