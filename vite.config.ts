import { defineConfig } from 'vite';
import path from 'path';

import vue from '@vitejs/plugin-vue';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@public': path.resolve(__dirname, 'public')
    }
  },
  plugins: [vue(), eslint()]
});
