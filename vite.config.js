
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import componentTagger from 'lovable-tagger'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    componentTagger()
  ],
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@context': '/src/context',
      '@lib': '/src/lib',
      '@pages': '/src/pages'
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          supabase: ['@supabase/supabase-js'],
        }
      }
    }
  },
  server: {
    port: 8080,
    host: true
  }
})
