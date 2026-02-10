/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        // Light theme (default) - clean and readable
        background: {
          primary: '#ffffff',   // white
          secondary: '#f8fafc', // slate-50
          tertiary: '#f1f5f9',  // slate-100
        },
        text: {
          primary: '#0f172a',   // slate-900
          secondary: '#334155', // slate-700
          muted: '#64748b',     // slate-500
        },
        accent: {
          primary: '#2563eb',   // blue-600
          secondary: '#7c3aed', // violet-600
          hover: '#1d4ed8',     // blue-700
        },
        border: '#cbd5e1',      // slate-300

        // Dark theme colors (applied via dark: utilities in components)
        // These will be referenced as dark:bg-background-dark-primary, etc.
        'background-dark': {
          primary: '#0f172a',   // slate-900
          secondary: '#1e293b', // slate-800
          tertiary: '#334155',  // slate-700
        },
        'text-dark': {
          primary: '#f8fafc',   // slate-50
          secondary: '#cbd5e1', // slate-300
          muted: '#94a3b8',     // slate-400
        },
        'accent-dark': {
          primary: '#3b82f6',   // blue-500
          secondary: '#8b5cf6', // violet-500
          hover: '#2563eb',     // blue-600
        },
        'border-dark': '#475569', // slate-600
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
