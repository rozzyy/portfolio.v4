import { createRouter, createWebHistory } from "vue-router";
import Home from '../pages/Home/routes'
import About from '../pages/About/routes'
import Works from '../pages/Works/routes'
import Skills from '../pages/Skills/routes'
import Contact from '../pages/Contact/routes'

const routes = [
  ...Home,
  ...About,
  ...Works,
  ...Skills,
  ...Contact,
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router