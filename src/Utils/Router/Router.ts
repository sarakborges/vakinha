import { createRouter, createWebHistory } from 'vue-router'
import ROUTES from '@/Utils/Router/Routes'

export default createRouter({
  history: createWebHistory(),
  routes: ROUTES
})
