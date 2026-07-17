import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' gera caminhos relativos nos arquivos de build,
// o que faz o site funcionar em qualquer repositório do GitHub Pages
// (username.github.io/nome-do-repo/) sem precisar editar nada aqui.
export default defineConfig({
  plugins: [react()],
  base: './',
})
