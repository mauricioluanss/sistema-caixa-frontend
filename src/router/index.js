import { createRouter, createWebHistory } from 'vue-router'
import TodosProdutos from '@/components/tela_principal/ConsultaProdutos.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TodosProdutos,
    },
  ],
})

export default router
