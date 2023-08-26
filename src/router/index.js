import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Perfil',
    name: 'perfil',
    component: () => import(/* webpackChunkName: "about" */ '../components/Perfil.vue')
  },
  {
    path: '/lenguaje',
    name: 'lenguaje',
    component: () => import(/* webpackChunkName: "about" */ '../components/Lenguajes.vue')
  },
  {
    path: '/proyectos',
    name: 'proyectos',
    component: () => import(/* webpackChunkName: "about" */ '../components/Proyectos.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
