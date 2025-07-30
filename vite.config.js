import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace 'your-repo-name' with the actual repo name
export default defineConfig({
  base: '/Campus-Link/',
  plugins: [react()],
});
