<template>
  <div>
    <!-- home.vue是主页面，除了头部和尾部，其他都放在router-view中-->
    <Navheader></Navheader>
    <router-view></router-view>
    <Navfooter></Navfooter>
  </div>
</template>
<script>
import Navheader from '../components/navHeader'
import Navfooter from '../components/navFooter'

export default {
  name: 'home',
  components: {
    Navheader,
    Navfooter
  }
}
</script>
>
