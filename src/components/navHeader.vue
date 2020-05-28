<template>
  <div class="header">
    <!-- 最顶部信息栏 -->
    <div class="nav-topbar">
      <div class="container">
        <!-- 菜单栏 -->
        <div class="menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <!-- 用户栏 -->
        <div class="user">
          <a href="javascript:;" v-if="username">{{username}}</a>
          <a href="javascript:;" v-if="!username" @click="goLogin">登录</a>
          <a href="javascript:;" v-if="username">我的订单</a>
          <a href="javascript:;" class="mycart" @click="goCart">
            <span class="icon-cart"></span>购物车
          </a>
        </div>
      </div>
    </div>
    <!-- 导航栏 -->
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div>
              <ul class="children">
                <li class="product" v-for="(value,index) in phoneList" :key="index">
                  <a :href="'/#/product/'+value.id" target="_blank">
                    <div class="pro-img">
                      <img :src="value.mainImage" alt />
                    </div>
                    <div class="pro-name">{{ value.name }}</div>
                    <div class="pro-price">{{value.price | curreny}}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>RedMi红米</span>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div>
              <ul class="children">
                <li class="product">
                  <a href target="_blank">
                    <div class="pro-img">
                      <img src="../../public/imgs/nav-img/nav-3-1.jpg" alt />
                    </div>
                    <div class="pro-name">小米壁画电视 65英寸</div>
                    <div class="pro-price">6999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href target="_blank">
                    <div class="pro-img">
                      <img src="../../public/imgs/nav-img/nav-3-2.jpg" alt />
                    </div>
                    <div class="pro-name">小米全面屏电视E55A</div>
                    <div class="pro-price">1999元</div>
                  </a>
                </li>
                <li class="product">
                  <a href target="_blank">
                    <div class="pro-img">
                      <img src="../../public/imgs/nav-img/nav-3-3.png" alt />
                    </div>
                    <div class="pro-name">小米电视4A 32英寸</div>
                    <div class="pro-price">1799.00元</div>
                  </a>
                </li>
                <li class="product">
                  <a href target="_blank">
                    <div class="pro-img">
                      <img src="../../public/imgs/nav-img/nav-3-4.jpg" alt />
                    </div>
                    <div class="pro-name">小米电视4A 55英寸</div>
                    <div class="pro-price">1799.00元</div>
                  </a>
                </li>
                <li class="product">
                  <a href target="_blank">
                    <div class="pro-img">
                      <img src="../../public/imgs/nav-img/nav-3-5.jpg" alt />
                    </div>
                    <div class="pro-name">小米电视4A 55英寸</div>
                    <div class="pro-price">2699.00元</div>
                  </a>
                </li>
                <li class="product">
                  <a href target="_blank">
                    <div class="pro-img">
                      <img src="../../public/imgs/nav-img/nav-3-6.png" alt />
                    </div>
                    <div class="pro-name">查看全部</div>
                    <div class="pro-price">查看全部</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" />
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'nav-header',
  data() {
    return {
      phoneList: []
    }
  },
  computed: {
    username() {
      return this.$store.state.username
    }
  },
  mounted() {
    this.getPrductList()
  },
  methods: {
    getPrductList() {
      this.axios
        .get('/products', {
          params: {
            categoryId: '100012',
            pageSize: 6
          }
        })
        .then(res => {
          console.log(res.list)
          this.phoneList = res.list
        })
    },
    goLogin() {
      this.$router.push('/login')
    },
    goCart() {
      this.$router.push('/cart')
    }
  },
  // 价格过滤器
  filters: {
    curreny(val) {
      if (!val) return '0.00'
      return '¥' + val.toFixed(2) + '元'
    }
  }
}
</script>
<style scoped lang="scss">
@import '../assets/scss/base.scss';
@import '../assets/scss/config.scss';
@import '../assets/scss/mixin.scss';

.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    color: #b0b0b0;
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      a {
        display: inline-block;
        color: #b0b0b0;
      }
      .user {
         a {
            display: inline-block;
            color: #b0b0b0;
            margin-right: 17px;
          }
        .mycart {
          width: 110px;
          margin-right: 0;
          background-color: #ff6600;
          color: #ffffff;
          text-align: center;
          .icon-cart {
            @include bgImg(16px, 12px, '../../public/imgs/icon-cart-checked.png');
            margin-right: 4px;
          }
        }
      }
    }
  }
  .nav-header {
    .container {
      height: 112px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      .header-logo {
        display: inline-block;
        width: 55px;
        height: 55px;
        background-color: #ff6600;
        a {
          display: inline-block;
          width: 110px;
          height: 55px;
          &:before {
            @include bgImg(55px, 55px, '../../public/imgs/mi-logo.png');
            transition: margin 0.2s;
          }
          &:after {
            @include bgImg(55px, 55px, '../../public/imgs/mi-home.png');
          }
          &:hover:before {
            margin-left: -55px;
            transition: margin 0.3s;
          }
        }
      }
      .header-menu {
        display: inline-block;
        width: 643px;
        padding-left: 209px;
        .item-menu {
          display: inline-block;
          color: #333333;
          font-size: 16px;
          font-weight: bold;
          line-height: 112px;
          margin-right: 20px;
          span {
            cursor: pointer;
          }
          &:hover {
            color: $colorA;
            .children {
              height: 220px;
              opacity: 1;
            }
          }
          //  每个ul
          .children {
            display: flex;
            justify-content: space-around;
            width: 1226px;
            height: 0;
            position: absolute;
            top: 112px;
            left: 0;
            opacity: 0;
            border-top: 1px solid #e5e5e5;
            box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
            overflow: hidden;
            z-index: 10;
            transition: all 0.5s;
            background-color: #fff;
            // li
            .product {
              display: inline-block;
              flex-grow: 6;
              font-size: 12px;
              line-height: 12px;
              text-align: center;
              position: relative;
              .pro-img {
                width: 137px;
                margin: 0 auto;
                img {
                  width: auto;
                  height: 111px;
                  margin-top: 26px;
                }
              }
              .pro-name {
                font-weight: bold;
                margin-top: 19px;
                margin-bottom: 8px;
                color: $colorA;
              }
              // 边框线
              &:before {
                content: '';
                position: absolute;
                top: 28px;
                right: 0;
                border-left: 1px solid $colorF;
                height: 100px;
                width: 1px;
              }
              // 隐藏最后一个的边框线
              &:last-child:before {
                display: none;
              }
            }
          }
        }
      }
    }
    .header-search {
      width: 319px;
      .wrapper {
        height: 50px;
        border: 1px solid #e0e0e0;
        display: flex;
        align-items: center;
        input {
          border: none;
          width: 264px;
          height: 50px;
          border-right: 1px solid #e0e0e0;
          box-sizing: border-box;
          padding-left: 14px;
        }
        a {
          @include bgImg(18px, 18px, '../../public/imgs/icon-search.png', contain);
          margin-left: 17px;
        }
      }
    }
  }
}
</style>
