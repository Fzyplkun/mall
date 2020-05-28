import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import axios from 'axios'
import store from '../src/store/index'
import VueAxios from 'vue-axios'
import vueLazyload from 'vue-lazyload'
import VueCookies from 'vue-cookies'

// import env from './env'
Vue.config.productionTip = false
// 加载插件，把插件挂载到axios上，方便使用this调用
Vue.use(VueAxios, axios)
Vue.use(VueCookies)
Vue.use(vueLazyload,{
  loading:"/imgs/loading-svg/loading-balls.svg"
})
// 配置api根路径（接口代理跨域）
axios.defaults.baseURL = '/api'
// axios.defaults.baseURL = env.baseURL
// 请求时间限制
axios.defaults.timeout = 8000
// axios 响应拦截
axios.interceptors.response.use(function (response) {
  const res = response.data // 获取响应的全部数据 
  let path = location.hash//当前hash地址
  if (res.status === 0) {
    // 如果登录请求成功
    return res.data
  } else if (res.status === 10) {
    // 如果登录请求失败
    if(path != '#/index'){
      // 跳转登录页面
      window.location.href = '/#/login'
    }
  } else {
    alert(res.msg)
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
