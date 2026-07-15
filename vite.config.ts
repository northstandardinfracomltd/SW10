import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    base: '/',
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          ibiza: path.resolve(__dirname, 'ibiza/index.html'),
          mallorca: path.resolve(__dirname, 'mallorca/index.html'),
          monaco: path.resolve(__dirname, 'monaco/index.html'),
          malta: path.resolve(__dirname, 'malta/index.html'),
          zurich: path.resolve(__dirname, 'zurich/index.html'),
          london: path.resolve(__dirname, 'london/index.html'),
          megeve: path.resolve(__dirname, 'megeve/index.html'),
        }
      }
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
