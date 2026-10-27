import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base: './' keeps the production build portable (it can be opened from any sub-folder).
export default defineConfig({
  base: './',
  plugins: [react()],
});
