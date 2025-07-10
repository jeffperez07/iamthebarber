// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // CHANGE THIS LINE:
  base: '/iamthebarber/', // Use your GitHub repository name here, with leading and trailing slashes

  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});