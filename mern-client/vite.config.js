import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
  base:'mern-client',
  plugins: [reactRefresh()],
  build: {
    outDir: 'mern-client/dist', // This should be relative to the mern-client folder
  },
  server: {
    open: true, // Automatically open the app in the browser on dev server start
  },
});