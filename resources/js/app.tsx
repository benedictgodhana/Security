import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: async (name) => {
        // Dynamically import pages from all modules
        const pages = {
            ...import.meta.glob('./Pages/**/*.tsx'), // Main app pages
            ...import.meta.glob('../../Modules/CarStickers/resources/assets/js/Pages/**/*.tsx'), // CarStickers module pages
            ...import.meta.glob('../../Modules/IncidentManagement/resources/assets/js/Pages/**/*.tsx'), // IncidentManagement module pages
            ...import.meta.glob('../../Modules/VisitorManagement/resources/assets/js/Pages/**/*.tsx'), // VisitorManagement module pages
        };

        // Resolve the page name dynamically using the correct glob match
        const component = pages[`./Pages/${name}.tsx`] ||
                          pages[`../../Modules/CarStickers/resources/assets/js/Pages/${name}.tsx`] ||
                          pages[`../../Modules/IncidentManagement/resources/assets/js/Pages/${name}.tsx`] ||
                          pages[`../../Modules/VisitorManagement/resources/assets/js/Pages/${name}.tsx`];

        if (component) {
            // Return the resolved component
            return (await component()).default;
        }
        throw new Error(`Page not found: ${name}`);
    },
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
