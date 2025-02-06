import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            // Correct path for Auth pages in resources/js/Pages
            `./Pages/${name}.tsx`,
            {
                // Include main Pages directory for Auth
                ...import.meta.glob('./Pages/**/*.tsx'),
                // Include module-specific Pages
                ...import.meta.glob('../../Modules/CarStickers/resources/assets/js/Pages/**/*.tsx'),
                ...import.meta.glob('../../Modules/IncidentManagement/resources/assets/js/Pages/**/*.tsx'),
                ...import.meta.glob('../../Modules/VisitorManagement/resources/assets/js/Pages/**/*.tsx'),
            }
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
