import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    'react-vendor': ['react', 'react-dom'],
                    'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
                    'animation-vendor': ['gsap', '@gsap/react']
                }
            }
        },
        chunkSizeWarningLimit: 1000,
        // Enable minification
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: true, // Remove console.logs in production
                drop_debugger: true
            }
        }
    },
    optimizeDeps: {
        include: ['react', 'react-dom', 'three', '@react-three/fiber', '@react-three/drei'],
        exclude: ['@react-three/postprocessing'] // Lazy load postprocessing
    },
    server: {
        // Enable compression
        hmr: {
            overlay: false // Disable error overlay for better performance
        }
    }
});
