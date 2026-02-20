import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: () => import('../views/HomeView.vue'), meta: { title: 'Radiance Lux Technologies' } },
    { path: '/services', name: 'Services', component: () => import('../views/ServicesView.vue'), meta: { title: 'Services' } },
    { path: '/about', name: 'About', component: () => import('../views/AboutView.vue'), meta: { title: 'About' } },
    { path: '/team', name: 'Team', component: () => import('../views/TeamView.vue'), meta: { title: 'Our Team' } },
    { path: '/work', name: 'Work', component: () => import('../views/WorkView.vue'), meta: { title: 'Work' } },
    { path: '/skills', name: 'Skills', component: () => import('../views/SkillsView.vue'), meta: { title: 'Skills & Stack' } },
    { path: '/philosophy', name: 'Philosophy', component: () => import('../views/PhilosophyView.vue'), meta: { title: 'How We Work' } },
    { path: '/resources', name: 'Resources', component: () => import('../views/ResourcesView.vue'), meta: { title: 'Resources' } },
    { path: '/resources/ble', name: 'ResourcesBle', component: () => import('../views/ResourcesBleView.vue'), meta: { title: 'How BLE Works' } },
    { path: '/contact', name: 'Contact', component: () => import('../views/ContactView.vue'), meta: { title: 'Contact' } },
  ],
})

router.afterEach((to) => {
  document.title = to.meta.title ? `${to.meta.title} | Radiance Lux` : 'Radiance Lux Technologies'
})

export default router
