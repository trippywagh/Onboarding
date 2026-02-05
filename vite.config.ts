import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  // GitHub Pages: /Onboarding/ for production build; / for local dev
  base: process.env.VITE_BASE_URL ?? (process.env.NODE_ENV === 'production' ? '/Onboarding/' : '/'),
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
});
