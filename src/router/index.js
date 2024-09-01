import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MakeView from '../views/MakeView.vue'
import PartnersView from '../views/PartnersView.vue'
import PremiumView from '../views/PremiumView.vue'
import CartView from '../views/CartView.vue'
import MemberView from '../views/MemberView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/make',
      name: 'Make',
      component:MakeView
    },
    {
      path:'/partners',
      name:'Partners',
      component:PartnersView
    },
    {
      path:'/premium',
      name:'Premium',
      component:PremiumView
    },
    {
      path:'/cart',
      name:'Cart',
      component:CartView
    },
    {
      path:'/member',
      name:'Member',
      component:MemberView
    }
  ]
})

export default router
