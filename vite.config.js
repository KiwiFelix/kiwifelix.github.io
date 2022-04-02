import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: './',
  publicDir: './public',
  resolve: {
    alias: {
      '@components': './src/components',
    }
  },
  plugins: [react()],
});