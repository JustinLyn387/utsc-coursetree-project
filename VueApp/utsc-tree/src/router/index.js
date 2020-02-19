import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

// component: has import for the components because of route level code-splitting
// this generates a separate chunk for each route which is lazy-loaded when the route is visited.
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { title: 'Home | UTSC CourseTree' }
  },
  {
    path: '/courses',
    name: 'courses',
    component: () => import('../views/Courses.vue'),
    meta: { title: 'Directory | UTSC CourseTree' }
  },
  {
    path: '/treeview',
    name: 'treeview',
    component: () => import('../views/TreeView.vue'),
    meta: { title: 'TreeView | UTSC CourseTree' }
  },
  {
    path: '/information',
    name: 'information',
    component: () => import('../views/Information.vue'),
    meta: { title: 'Links & Info | UTSC CourseTree' }
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/Admin.vue'),
    meta: { title: 'ADMIN | UTSC CourseTree' }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/Dashboard.vue'),
    meta: { title: 'Dashboard | UTSC CourseTree' }
  },
  {
    path: '/credits',
    name: 'credits',
    component: () => import('../views/Credits.vue'),
    meta: { title: 'About & Credits | UTSC CourseTree' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// Change the tab title based on what page we are on after navigating to it
router.afterEach((to, from) => {
  document.title = to.meta.title
})

export default router
