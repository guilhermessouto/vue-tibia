import { createRouter, createWebHistory } from "vue-router";

import Home from "./views/home.vue";
import BoostableBosses from "./views/boostable-bosses.vue";
import Creatures from "./views/creatures.vue";

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/bosses',
    component: BoostableBosses
  },
  {
    path: '/creatures',
    component: Creatures
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router