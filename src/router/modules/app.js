import Home from '@/modules/App/Index.vue'
import Claim from '@/modules/App/Claim.vue'
import Upgrade from '@/modules/App/Upgrade.vue'
import Profile from '@/modules/App/Profile.vue'

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
    path: '/claim',
    name: 'app-claim',
    component: Claim,
    meta: {
      layout: 'Dashboard',
      requiresAuth: false,
      parent: 'home',
      name: 'claims'
    }
  },

  {
    path: '/upgrade',
    name: 'app-upgrade',
    component: Upgrade,
    meta: {
      layout: 'Dashboard',
      requiresAuth: false,
      parent: 'home',
      name: 'upgrade'
    }
  },

  {
    path: '/profile',
    name: 'app-profile',
    component: Profile,
    meta: {
      layout: 'Dashboard',
      requiresAuth: false,
      parent: 'home',
      name: 'profile'
    }
  },

]

export default routes
