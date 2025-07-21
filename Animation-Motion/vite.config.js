import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(),
    tailwindcss({
      /* optional Tailwind config options */
      config: './tailwind.config.js', // default, optional
    }),
  ],
})
