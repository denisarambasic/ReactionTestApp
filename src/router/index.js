import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Top3View from '../views/Top3View.vue'
import AllPlayersView from '../views/AllPlayersView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/top3',
    name: 'top3',
    component: Top3View
  },
  {
    path: '/all-players',
    name: 'allPlayers',
    component: AllPlayersView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
