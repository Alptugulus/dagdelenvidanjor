import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  build: {
    target: 'es2020',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return;
          if (id.includes('react-dom')) return 'react-dom';
          if (id.includes('react-router')) return 'react-router';
          if (id.includes('/react/')) return 'react';
          if (id.includes('motion')) return 'motion';
          if (id.includes('react-markdown')) return 'markdown';
          if (id.includes('lucide-react')) return 'icons';
        },
      },
    },
  },
  server: {
    hmr: process.env.DISABLE_HMR !== 'true',
    headers: {
      // Yerelde eski JS/CSS kalmasın; "değişti ama görünmüyor" şikayetini azaltır.
      'Cache-Control': 'no-store',
    },
    /** İndirmeler klasöründe watcher bazen güncellemez — VITE_POLL=1 ile: `VITE_POLL=1 npm run dev` */
    watch:
      process.env.VITE_POLL === '1'
        ? { usePolling: true, interval: 350 }
        : undefined,
  },
});
