import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/store.js'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

// component: has import for the components because of route level code-splitting
// this generates a separate chunk for each route which is lazy-loaded when the route is visited.
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { title: 'Home | UTSC CourseTree', unlocked: true }
  },
  {
    path: '/courses',
    name: 'courses',
    component: () => import('../views/Courses.vue'),
    meta: { title: 'Directory | UTSC CourseTree', unlocked: store.state.coursePage }
  },
  {
    path: '/treeview',
    name: 'treeview',
    component: () => import('../views/TreeView.vue'),
    meta: { title: 'TreeView | UTSC CourseTree', unlocked: store.getters.treeViewPage }
  },
  {
    path: '/information',
    name: 'information',
    component: () => import('../views/Information.vue'),
    meta: { title: 'Links & Info | UTSC CourseTree', unlocked: store.getters.infoPage }
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/Admin.vue'),
    meta: { title: 'ADMIN | UTSC CourseTree', unlocked: true }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/Dashboard.vue'),
    meta: { title: 'Dashboard | UTSC CourseTree', unlocked: true }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutUs.vue'),
    meta: { title: 'About Us | UTSC CourseTree', unlocked: true }
  },
  {
    path: '/feedback',
    name: 'feedback',
    component: () => import('../views/Feedback.vue'),
    meta: { title: 'Feedback & Updates | UTSC CourseTree', unlocked: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// Before each route make sure users can access only what they're allowed to access
router.beforeEach((to, from, next) => {
  if (['courses', 'treeview', 'information'].includes(to.name)) {
    if (to.name === 'courses' && store.state.coursePage) {
      next()
    } else if (to.name === 'treeview' && store.state.treeViewPage) {
      next()
    } else if (to.name === 'information' && store.state.infoPage) {
      next()
    } else {
      next({ name: 'home' })
    }
  } else {
    next()
  }
})

// Change the tab title based on what page we are on after navigating to it
router.afterEach((to, from) => {
  document.title = to.meta.title
})

export default router
