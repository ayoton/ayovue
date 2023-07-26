
let __unconfig_data;
let __unconfig_stub = function (data = {}) { __unconfig_data = data };
__unconfig_stub.default = (data = {}) => { __unconfig_data = data };
/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { vitePostCSSTreeShakeBuild } from 'vite-postcss-tsb'

// https://vitejs.dev/config/
const __unconfig_default =  defineConfig({
  plugins: [
    vue(),
    dts({ rollupTypes: true }),
    vitePostCSSTreeShakeBuild({
      src: 'src/assets/themes',
      outDir: 'dist/themes'
    })
  ],
  build: {
    lib: {
      entry: 'src/index',
      formats: ['es', 'cjs', 'iife', 'umd'],
      fileName: 'index',
      name: 'ayovue'
    },
    cssCodeSplit: true,
    rollupOptions: {
      external: ['vue']
    }
  },
  test: {
    globals: true,
    environment: 'jsdom'
  },
  server: {
    host: '0.0.0.0'
  }
})

if (typeof __unconfig_default === "function") __unconfig_default(...[{"command":"serve","mode":"development"}]);export default __unconfig_data;