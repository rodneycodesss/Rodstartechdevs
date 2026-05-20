import { defineConfig } from 'vite'
import { copyFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [
    {
      name: 'static-host-spa-404',
      writeBundle() {
        const index = resolve(process.cwd(), 'dist/index.html')
        const fallback = resolve(process.cwd(), 'dist/404.html')
        if (existsSync(index)) {
          copyFileSync(index, fallback)
        }
      },
    },
  ],
})
