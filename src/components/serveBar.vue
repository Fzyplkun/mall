<template>
  <div class="serve">
    <div class="container">
      <ul>
        <li><span class="icon-setting"></span> 预约维修服务</li>
        <li><span class="icon-return"></span>7天无理由退货</li>
        <li><span class="icon-exchange"></span>15天免费换货</li>
        <li><span class="icon-freeShipping"></span>满150元包邮</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'serveBar'
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/mixin.scss';
.serve {
  .container {
    width: 1226px;
    padding: 33px 0;
    margin-right: auto;
    margin-left: auto;
    color: #666;
    font-size: 16px;
    li {
      display: inline-block;
      text-align: center;
      width: 24.9%;
      border-right: 1px solid #e5e5e5;
      span{
        display: inline-block;
        vertical-align: middle;
        margin-right: 8px;
      }
      .icon-setting{
          @include bgImg(20px,20px,'../../public/imgs/icon-setting.png')
      }
      .icon-return{
          @include bgImg(20px,20px,'../../public/imgs/icon-7day.png')
      }
      .icon-exchange{
          @include bgImg(20px,20px,'../../public/imgs/icon-15day.png')
      }
      .icon-freeShipping{
          @include bgImg(20px,20px,'../../public/imgs/icon-post.png')
      }
    }
  }
}
</style>
