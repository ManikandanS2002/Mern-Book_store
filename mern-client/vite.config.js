import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
  base: '/your-repo-name/', // Adjust if your app is in a subdirectory
  plugins: [reactRefresh()],
  build: {
    outDir: 'mern-client/dist', // Output directory inside mern-client
  }
});

