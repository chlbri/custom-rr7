import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import routes from './app/routes.js';
const router = createBrowserRouter([routes], {
    // need to ensure this script runs AFTER <StaticRouterProvider> in
    // entry.server.tsx so that window.__staticRouterHydrationData is available
    hydrationData: window.__staticRouterHydrationData,
});
hydrateRoot(document, _jsx(StrictMode, { children: _jsx(RouterProvider, { router: router }) }));
