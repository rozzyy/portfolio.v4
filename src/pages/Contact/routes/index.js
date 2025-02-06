const Contact = () => import('../views/Contact.vue')

const routes = [
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'Contact'
    }
  }
]

export default routes