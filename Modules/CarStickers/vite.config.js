import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    laravel({
      input: [
        'resources/js/app.tsx', // main app entry
        'Modules/CarStickers/resources/assets/js/app.tsx' // module entry
      ],
      refresh: true,
    }),
    react(),
  ],
  resolve: {
    alias: {
      // Define an alias for module pages
      '@CarStickers': path.resolve(__dirname, 'Modules/CarStickers/resources/assets/js'),
    },
  },
});
