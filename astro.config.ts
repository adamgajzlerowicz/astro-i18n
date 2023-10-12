import { defineConfig } from 'astro/config'
import nodejs from '@astrojs/node'
import tailwind from '@astrojs/tailwind'
import solidJs from '@astrojs/solid-js'

export default defineConfig({
  output: 'server',
  adapter: nodejs({
    mode: 'standalone',
  }),
  integrations: [tailwind(), solidJs()],
})
