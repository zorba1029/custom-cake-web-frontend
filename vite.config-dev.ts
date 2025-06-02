import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/

//-- Dev 환경
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/v1/': {
        target: 'http://localhost:8000', // 백엔드 서버 주소
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/v1/, '') // 필요한 경우 경로 재작성
      }
    }
  }
})

//-- Prod 환경
// export default defineConfig({
//   plugins: [react()],
// })
