import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // Root path
  plugins: [react()],
});
// This configuration sets up a Vite project with React support and specifies the base path for the application.