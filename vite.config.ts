// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'
// import { VitePWA } from 'vite-plugin-pwa'

// // https://vitejs.dev/config/
// export default defineConfig({
//   base : '/XimeXV/',
//   plugins: [react(),VitePWA({registerType:'autoUpdate'})],
// })
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base : '/XimeXV/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', // Para actualizaciones automáticas del service worker
      manifest: {
        id: '/XimeXV/', // Identificador único para tu PWA
        name: 'Xime XV',
        short_name: 'App Xim XV',
        description: 'Aplicación Xime XV',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        scope:'/XimeXV/',
        start_url: '/XimeXV/',
        orientation: 'portrait',
        icons: [
          {
            src: '/XimeXV/corona.png', // Ruta completa y correcta
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: '/XimeXV/corona.png', // Usa el mismo archivo para otro tamaño, si aplica
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          }
        ]        
      }
    })
  ]
});
