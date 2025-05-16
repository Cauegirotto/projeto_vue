import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/habilidades',
    name: 'Habilidades',
    component: () => import('../views/Habilidades.vue'),
  },
  {
    path: '/contato',
    name: 'Contato',
    component: () => import('../views/Contato.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;




    
