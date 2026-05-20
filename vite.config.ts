import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
    host: true,
    // Allow any host header (so cloudflared / ngrok dev tunnels work).
    // Safe for local dev; review before using in any non-dev environment.
    allowedHosts: true,
  },
});
