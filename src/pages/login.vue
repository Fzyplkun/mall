<template>
  <div class="login">
    <!-- header部分 -->
    <div class="container">
      <a href="/#/index">
        <img v-lazy="'/imgs/login-logo.png'" alt />
      </a>
    </div>
    <!-- body部分 -->
    <div class="wraper">
      <div class="container">
        <div class="loginform">
          <!-- 账号选择 -->
          <h3 class="login-choice">
            <a href="javascript:;">
              <span class="account">帐号登录</span>
            </a>
            <span class="dividing-line">|</span>
            <span>扫码登录</span>
          </h3>
          <!-- 登录信息 -->
          <div class="login-info">
            <input type="text" placeholder="请输入账号" v-model="loginInfo.username"/>
            <input type="password" placeholder="请输入密码" v-model="loginInfo.password"/>
          </div>
          <!-- 提交 -->
          <div class="submit">
            <div class="btn" @click="Login">
              <a href="javascript:;">登录</a>
            </div>
            <div class="rigister">
              <a href="javascirptL:;" class="sms">手机短信登录/注册</a>
              <a href="javascirptL:;" class="reg">
                <span>立即注册</span>
                <span class="dividing-line">|</span>
                <span>忘记密码？</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- footer底部 -->
    <div class="footer">
      <div class="footer-link">
        <a href="https://www.imooc.com/t/1343480" target="_blank">
          河畔一角主页
          <span>|</span>
        </a>
        <a href="https://www.imooc.com/t/1343480" target="_blank">
          Vue全栈课程
          <span>|</span>
        </a>
        <a href="https://www.imooc.com/t/1343480" target="_blank">
          React全家桶课程
          <span>|</span>
        </a>
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
  name: 'login',
  data(){
    return {
      loginInfo:{
        username:'',
        password:''
      }
    }
  },
  methods:{
    Login(){
      this.axios.post('/user/login',this.loginInfo).then(res=>{
        this.$cookies.set('userId',res.id,{expires:'1M'})
        this.$store.dispatch('saveUserName',res.username)
      }) 
      this.$router.push('/index')
    }
  }
}
</script>
<style lang="scss" scoped>
.login {
  .container {
    width: 1226px;
    height: 113px;
    margin: 0 auto;
    img {
      width: auto;
      height: 113px;
    }
  }
  .wraper {
    background: url('/imgs/login-bg.jpg') no-repeat center;
    height: 576px;
    .container {
      width: 1226px;
      height: 576px;
      position: relative;
      .loginform {
        width: 410px;
        height: 510px;
        padding-left: 31px;
        padding-right: 31px;
        box-sizing: border-box;
        background-color: #fff;
        position: absolute;
        bottom: 29px;
        right: 0;
        h3 {
          line-height: 23px;
          font-size: 24px;
          text-align: center;
          margin: 40px auto 49px;
          .account {
            color: #f60;
          }
          .dividing-line {
            margin: 0 32px;
          }
        }
        .login-info {
          input {
            display: inline-block;
            width: 348px;
            height: 50px;
            border: 1px solid #e5e5e5;
            margin-bottom: 20px;
            padding: 18px;
            box-sizing: border-box;
          }
        }
        .submit {
          .btn {
            width: 348px;
            height: 50px;
            text-align: center;
            line-height: 50px;
            background-color: #f60;
            margin-top: 10px;
            cursor: pointer;
            a {
              font-size: 16px;
              color: #fff;
            }
          }
        }
        .rigister {
          margin-top: 14px;
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          .sms {
            color: #f60;
          }
          .reg {
            color: #999;
            .dividing-line {
              margin: 0 7px;
            }
          }
        }
      }
    }
  }
  .footer {
    height: 100px;
    padding-top: 60px;
    color: #999;
    font-size: 16px;
    text-align: center;
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
}
</style>