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
                    'three-core': ['three'],
                    'three-fiber': ['@react-three/fiber'],
                    'three-helpers': ['@react-three/drei'],
                    'animation-vendor': ['gsap', '@gsap/react']
                }
            },
            onwarn(warning, warn) {
                if (warning.code === 'EVAL' && warning.id?.includes('three-stdlib/libs/lottie.js')) {
                    return;
                }
                warn(warning);
            }
        },
        chunkSizeWarningLimit: 1000,
        minify: 'esbuild',
        target: 'esnext',
        modulePreload: {
            polyfill: false
        }
    },
    optimizeDeps: {
        include: ['react', 'react-dom', 'three', '@react-three/fiber'],
        exclude: ['@react-three/postprocessing']
    },
    server: {
        hmr: {
            overlay: false
        }
    }
});
