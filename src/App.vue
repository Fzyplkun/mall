<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data () {
    return {
      res: {}
    }
  },
  mounted () {
    // 方式1:本地创建json mock数据
    // this.axios.get('mock/user/login.json').then(res => {
    //   console.log(res)
    // })
    this.getUser()
    this.getCartCount()
  },
  methods:{
    // 拉取用户信息
    getUser(){
      this.axios.get('/user').then((res)=>{
        this.$store.dispatch('saveUserName',res.username)
      })
    },
    getCartCount(){
      this.axios.get('/carts/products/sum').then(()=>{

      })
    }

  }
}
</script>
>
<style>
@import './assets/scss/reset.scss';
</style>
