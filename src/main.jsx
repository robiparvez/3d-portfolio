import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './index.css';
import App from './App.jsx';
import { registerServiceWorker } from './utils/serviceWorkerRegistration';

// Register GSAP plugins once globally
gsap.registerPlugin(ScrollTrigger);

// Register service worker for offline support and caching
registerServiceWorker();

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
);
