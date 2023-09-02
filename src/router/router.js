import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/GenerarToken.vue')
  },
  {
    path: '/guardarestudiante',
    component: () => import('../views/GuardarEstudiante.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
