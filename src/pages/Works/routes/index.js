const Works = () => import('../views/Works.vue')

const routes = [
  {
    path: '/works',
    name: 'Works',
    component: Works,
    meta: {
      title: 'Works'
    }
  }
]

export default routes