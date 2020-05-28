import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './../pages/home.vue'
import Index from '../pages/index.vue'
import Detail from './../pages/detail.vue'
import Product from '../pages/product.vue'
import Login from '../pages/login.vue'
import Cart from '../pages/cart.vue'
import Order from '../pages/order.vue'
import OrderCofirm from '../pages/orderConfirm.vue'
import Orderlist from '../pages/orderList.vue'
import OrderPay from '../pages/orderPay.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'index',
        component: Index
      },
      {
        path: '/detail/:id',
        name: 'detail',
        component: Detail
      },
      {
        path: '/product/:id',
        name: 'product',
        component: Product
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/order',
    name: 'order',
    component: Order,
    children: [
      {
        path: 'list',
        name: 'orderlist',
        component: Orderlist
      },
      {
        path: 'confirm',
        name: 'orderCofirm',
        component: OrderCofirm
      },
      {
        path: 'Pay',
        name: 'orderPay',
        component: OrderPay
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
