// Modules/CarStickers/resources/assets/js/app.tsx

import React from 'react';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';

createInertiaApp({
  resolve: (name) => {
    // Using the alias to load pages from the module's Pages folder
    return import(`@CarStickers/Pages/${name}.tsx`).then((module) => module.default);
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />);
  },
});
