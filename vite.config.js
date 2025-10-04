import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
    proxy: {
      '/signup': 'http://localhost:3000',
      '/signin': 'http://localhost:3000',
    },
  },
  preview: {
    host: true, // allows connections from any network interface
    port: 10000, // match your preview port
    allowedHosts: ['antidoppingawarenesss.onrender.com'], // updated Render URL
  },
});
