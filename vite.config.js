import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.tsx'],
            refresh: true,
        }),
        react(),
    ],
    resolve: {
        alias: {
            '@CarStickers': path.resolve(__dirname, 'Modules/CarStickers/resources/assets/js'),
            '@Module2': path.resolve(__dirname, 'Modules/IncidentManagement/resources/assets/js'), // Replace Module2 with actual name
            '@Module3': path.resolve(__dirname, 'Modules/VisitorManagement/resources/assets/js'), // Replace Module3 with actual name
        },
    },
});
