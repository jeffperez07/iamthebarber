import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // Add this line for GitHub Pages
  base: './', // This tells Vite to use relative paths for assets

  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});