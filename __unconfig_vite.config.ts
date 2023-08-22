
let __unconfig_data;
let __unconfig_stub = function (data = {}) { __unconfig_data = data };
__unconfig_stub.default = (data = {}) => { __unconfig_data = data };
/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { vitePostCSSTreeShakeBuild } from 'vite-postcss-tsb'
import { copyFile, readFile, writeFile, appendFile } from 'node:fs/promises'
import { join } from 'path'

// https://vitejs.dev/config/
const __unconfig_default =  defineConfig({
  plugins: [
    vue(),
    dts({
      rollupTypes: true,
      async afterBuild() {
        readFile('src/index.ts', 'utf-8').then((fileContent) => {
          const moduleDeclarationRegex = /declare module '@vue\/runtime-core' {([\s\S]*?)^}/m
          const moduleDeclarationMatch = fileContent.match(moduleDeclarationRegex)
          if (moduleDeclarationMatch) {
            const moduleDeclaration = moduleDeclarationMatch[0]
            appendFile('dist/index.d.ts', moduleDeclaration)
          }
        })

        try {
          await copyFile('package.json', 'dist/package.json')
          await copyFile('./README.md', './dist/README.md')
          const pkg = await readFile('./dist/package.json', 'utf-8')
          const pkgJson = JSON.parse(pkg)
          delete pkgJson.scripts
          delete pkgJson.devDependencies
          pkgJson.peerDependencies = { vue: pkgJson.dependencies.vue }
          delete pkgJson.dependencies
          pkgJson.main = 'index.mjs'
          pkgJson.exports = {
            '.': {
              import: './index.mjs',
              require: './index.js'
            },
            './themes/': {
              import: './themes/',
              require: './themes/'
            }
          }
          pkgJson.types = './index.d.ts'
          await writeFile('./dist/package.json', JSON.stringify(pkgJson, null, 2), 'utf-8')
        } catch (error) {
          console.log(error)
        }
      }
    }),
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