import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: () => import('../views/HomeView.vue'), meta: { title: 'Home' } },
    { path: '/work', name: 'Work', component: () => import('../views/WorkView.vue'), meta: { title: 'Work History' } },
    { path: '/projects', name: 'Projects', component: () => import('../views/ProjectsView.vue'), meta: { title: 'Projects' } },
    { path: '/services', name: 'Services', component: () => import('../views/ServicesView.vue'), meta: { title: 'Services' } },
    { path: '/contact', name: 'Contact', component: () => import('../views/ContactView.vue'), meta: { title: 'Contact' } },
    { path: '/about', redirect: '/' },
    { path: '/team', redirect: '/contact' },
    { path: '/skills', redirect: '/work' },
    { path: '/philosophy', redirect: '/services' },
    { path: '/resources', redirect: '/projects' },
    { path: '/resources/ble', redirect: '/projects' },
  ],
})

router.afterEach((to) => {
  document.title = to.meta.title ? `${to.meta.title} · Radiance Lux` : 'Brett Humphreys · Radiance Lux'
})

export default router
