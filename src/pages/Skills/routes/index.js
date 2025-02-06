const Skills = () => import('../views/Skills.vue')

const routes = [
  {
    path: '/skills',
    name: 'Skills',
    component: Skills,
    meta: {
      title: 'Skills'
    }
  }
]

export default routes