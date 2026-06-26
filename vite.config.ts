import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Ensures it's fully compatible with github pages and relative paths
  server: {
    port: 3000
  }
});