import {createRouter, createWebHashHistory} from 'vue-router';
import Home from '../pages/home/index.vue'

const routes = [{
  path: "/home",
  name: "Home",
  component: Home
}]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;