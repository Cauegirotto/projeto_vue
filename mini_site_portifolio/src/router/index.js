import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Habilidades from '../views/Habilidades.vue'
import Contato from '../views/Contato.vue'

const rotas = [
    { path: '/', name:'Home', component: Home },
    { path: '/habilidades', name:'Habilidades', component: Habilidades },
    { path: '/contato', name:'Contato', component: Contato },
    
]

const router = createRouter ({

    history: createWebHistory(),
    rotas
})

export default router



    
