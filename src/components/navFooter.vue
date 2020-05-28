<template>
  <div>
    <div class="footer">
      <div class="footer-logo">
        <img src="../../public/imgs/logo-footer.png" alt />
        <p>小米商城</p>
      </div>
      <div class="footer-link">
        <a href="https://www.imooc.com/t/1343480" target="_blank">河畔一角主页<span>|</span></a>
        <a href="https://www.imooc.com/t/1343480" target="_blank">Vue全栈课程<span>|</span></a>
        <a href="https://www.imooc.com/t/1343480" target="_blank">React全家桶课程<span>|</span></a>
        <a href="https://www.imooc.com/t/1343480" target="_blank">微信支付专项课程</a>
      </div>
      <div class="copyright">
          Copyright ©2019
         <a href="http://mi.futurefe.com" class="webDress">mi.futurefe.com</a> All Rights Reserved.
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'nav-footer'
}
</script>
<style lang="scss" scoped>
.footer {
  height: 234px;
  border-top: 4px solid #f60;
  background-color: #333;
  color: #999;
  font-size: 16px;
  text-align: center;
  .footer-logo {
    margin-top: 46px;
    margin-bottom: 31px;
    img {
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }
  }
  .footer-link {
    margin-bottom: 13px;
    a {
      color: #999999;
      display: inline-block;
      span {
        margin: 0 10px;
      }
    }
  }
  .copyright {
    a {
      color: #ff6600;
    }
  }
}
</style>
