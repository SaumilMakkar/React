import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
resolve: {
  extensions: ['.js', '.jsx', '.ts', '.tsx']
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
