/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { vitePostCSSTreeShakeBuild } from 'vite-postcss-tsb'

// https://vitejs.dev/config/
export default defineConfig({
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
  }
})
