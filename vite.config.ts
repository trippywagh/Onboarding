import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  // For GitHub Pages: use repo name as base (e.g. /Onboarding/). Use '/' for custom domain or username.github.io
  base: process.env.VITE_BASE_URL || '/',
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
});
