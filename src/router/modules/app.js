import Home from '@/modules/App/Index.vue'
import Claim from '@/modules/App/Claim.vue'
import Upgrade from '@/modules/App/Upgrade.vue'

const routes = [
  {
    path: '/',
    name: 'app-home',
    component: Home,
    meta: {
      layout: 'Dashboard',
      requiresAuth: false,
      parent: 'home',
      name: 'home'
    }
  },

  {
    path: '/app/claim',
    name: 'app-claim',
    component: Claim,
    meta: {
      layout: 'Dashboard',
      requiresAuth: false,
      parent: 'home',
      name: 'home'
    }
  },

  {
    path: '/app/upgrade',
    name: 'app-upgrade',
    component: Upgrade,
    meta: {
      layout: 'Dashboard',
      requiresAuth: false,
      parent: 'home',
      name: 'home'
    }
  },

]

export default routes
