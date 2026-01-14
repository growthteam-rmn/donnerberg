import { defineConfig } from 'vite';

export default defineConfig({
  // Keep paths relative so the build can be deployed on any subpath
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true
  }
});
