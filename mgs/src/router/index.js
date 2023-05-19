import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: "/register",
    name: "Register",
    
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/login",
    name: "Login",
    
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/add",
    name: "addform",
    
    component: () => import("../views/AddForm.vue"),
  },
  {
    path: "/edit",
    name: "editform",
    
    component: () => import("../views/EditForm.vue"),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
