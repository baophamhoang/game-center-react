import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

function pathResolve(dir: string) {
  return resolve(__dirname, '.', dir);
}

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@services': pathResolve('src/services'),
    },
  },
  base: '/',
  build: {
    outDir: 'dist',
    target: 'esnext',
    modulePreload: false,
    minify: false,
    cssCodeSplit: false,
    commonjsOptions: {
      include: [/node_modules/],
      extensions: ['.js', '.cjs'],
      strictRequires: true,
      transformMixedEsModules: true,
    },
  },
});
