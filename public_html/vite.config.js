// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        service: resolve(__dirname, 'Services/index.html'),
        about: resolve(__dirname, 'about-us/index.html'),
        blog: resolve(__dirname, 'blog/index.html'),
        privacy: resolve(__dirname, 'privacy/index.html'),
      }
    }
  }
});
