/// <reference types="vitest" />

import { defineConfig } from 'vite';
import path from 'path';

import vue from '@vitejs/plugin-vue';
import eslint from 'vite-plugin-eslint';

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@public': path.resolve(__dirname, 'public')
    }
  },
  plugins: [
    vue(),
    eslint(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    css: false,
    deps: {
      inline: ['element-plus']
    },
    testTimeout: 30000
  }
});
