import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
// import Home from '../views/Home.vue'
import DashBoard from '../views/DashBoard.vue'
import PaymentHistory from '../views/PaymentHistory.vue'
import TopUp from '../views/TopUp.vue'
import Login from '../views/Login.vue'
import Password from '../views/Password.vue'
import Cart from '../views/Cart.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/dashboard',
    name: 'DashBoard',
    component: DashBoard
  },
  {
    path: '/paymenthistory',
    name: 'PaymentHistory',
    component: PaymentHistory
  },
  {
    path: '/topup',
    name: 'TopUp',
    component: TopUp
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/password',
    name: 'Password',
    component: Password
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }PaymentHistory
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   // chuyển đến trang login nếu chưa được login
//   const publicPages = ['/login', '/register']
//   const authRequired = !publicPages.includes(to.path)
//   const loggedIn = localStorage.getItem('user')

//   if (authRequired && !loggedIn) {
//     return next('/login')
//   }

//   next()
// })

export default router
