<template>
  <div>
    order
    <!-- home.vue是主页面，除了头部和尾部，其他都放在router-view中-->
    <Orderheader></Orderheader>
    <router-view></router-view>
    <Navfooter></Navfooter>
  </div>
</template>
<script>
import Orderheader from '../components/orderheader'
import Navfooter from '../components/navFooter'
export default {
  components: {
    Orderheader,
    Navfooter
  }
}
</script>
