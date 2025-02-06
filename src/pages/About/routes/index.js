const About = () => import('../views/About.vue')

const routes = [
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'About'
    }
  }
]

export default routes