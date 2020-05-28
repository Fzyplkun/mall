<template>
  <div class="index">
    <div class="container">
      <!-- 轮播 -->
      <div class="swiper-box">
        <swiper :options="swiperOptions">
          <!-- slides -->
          <swiper-slide>
            <img src="/imgs/slider/slide-1.jpg" alt />
          </swiper-slide>
          <swiper-slide>
            <img src="/imgs/slider/slide-2.jpg" alt />
          </swiper-slide>
          <swiper-slide>
            <img src="/imgs/slider/slide-3.jpg" alt />
          </swiper-slide>
          <swiper-slide>
            <img src="/imgs/slider/slide-4.jpg" alt />
          </swiper-slide>
          <swiper-slide>
            <img src="/imgs/slider/slide-5.jpg" alt />
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <!-- 广告位 -->
      <div class="ads-box">
        <a href id>
          <img v-lazy="'/imgs/ads/ads-1.png'" alt />
        </a>
        <a href id>
          <img v-lazy="'/imgs/ads/ads-2.jpg'" alt />
        </a>
        <a href id>
          <img v-lazy="'/imgs/ads/ads-3.png'" alt />
        </a>
        <a href id>
          <img v-lazy="'/imgs/ads/ads-4.jpg'" alt />
        </a>
      </div>
      <!-- 活动 -->
      <div class="banner">
        <a href>
          <img v-lazy="'/imgs/banner-1.png'" alt />
        </a>
      </div>
    </div>
    <!-- 展示产品 -->
    <div class="product-box">
      <div class="container">
        <h2>手机</h2>
        <div class="wrapper">
          <!--左侧  -->
          <div class="product-aside">
            <a href="/#/product/35">
              <img v-lazy="'/imgs/mix-alpha.jpg'" alt />
            </a>
          </div>
          <div class="product-show">
            <div class="item" v-for="(value,index) in phoneList" :key="index">
              <span :class="{'new-pro':index%2==0}">新品</span>
              <img v-lazy="value.mainImage" alt />
              <div class="info">
                <h3>{{value.name}}</h3>
                <p>{{value.subtitle}}</p>
                <a href='javascript:;'>
                  {{value.price}}
                  <span class="icon-cart" @click='addCart'></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部服务组件 -->
    <ServeBar />
    <!-- 弹框组件 -->
    <modal modalType="small" title="提示" btnType="1" 
    sureText="查看购物车" 
    :showModal="showmodal"
     @submit="goCart"
     @cancel='showmodal = false'
    >
      <template v-slot:body>
        <p>商品添加成功！</p>
      </template>
    </modal>
  </div>
</template>
<script>
import ServeBar from '../components/serveBar'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import Modal from '../components/modal.vue'
export default {
  name: 'index',
  data() {
    return {
      // 轮播控制
      swiperOptions: {
        // 自动播放
        autoplay: true,
        // 循环播放
        loop: true,
        // 切换效果
        effect: 'cube',
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 100,
          shadowScale: 0.6
        },
        // 按钮点击切换
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      phoneList: [],
      showmodal:false//默认为false
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.axios
        .get('/products', {
          params: {
            categoryId: 100012,
            pageSize: 14
          }
        })
        .then(res => {
          this.phoneList = res.list.slice(6, 14)
          // console.log(this.phoneList);
        })
    },
    addCart(){
      this.showmodal = true
    },
    goCart(){
      this.$router.push('/cart')
    }
  },
  components: {
    ServeBar,
    Swiper,
    SwiperSlide,
    Modal
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/mixin.scss';
.index {
  .container {
    position: relative;
    width: 1226px;
    margin: 0 auto;
    .swiper-box {
      .swiper-container {
        height: 451px;
        .swiper-button-prev {
          left: 274px;
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .ads-box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 14px;
      margin-bottom: 31px;
      a {
        display: inline-block;
        width: 296px;
        height: 167px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .banner {
      margin-bottom: 50px;
      a {
        display: inline-block;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .product-box {
    width: 100%;
    padding: 30px 0 50px;
    background-color: #f5f5f5;
    .container {
      width: 1226px;
      margin-right: auto;
      margin-left: auto;
      position: relative;
      h2 {
        font-size: 22px;
        height: 21px;
        line-height: 21px;
        color: #333;
        margin-bottom: 20px;
      }
      .wrapper {
        display: flex;
        .product-aside {
          width: 224px;
          height: 619px;
          margin-right: 16px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .product-show {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          width: 986px;
          .item {
            width: 236px;
            height: 302px;
            background-color: #fff;
            text-align: center;
            .new-pro {
              display: inline-block;
              width: 67px;
              height: 24px;
              line-height: 24px;
              font-size: 14px;
              background-color: #7ecf68;
              color: #fff;
            }
            img {
              width: 100%;
              height: 195px;
            }
            .info {
              h3 {
                font-size: 14px;
                color: #333;
                line-height: 14px;
                font-weight: 700;
              }
              p {
                color: #999;
                line-height: 13px;
                margin: 6px auto 13px;
              }
              a {
                display: inline-block;
                font-size: 14px;
                color: #f20a0a;
                font-weight: 700;
                .icon-cart {
                  @include bgImg(22px, 22px, '/imgs/icon-cart-hover.png');
                  margin-right: 4px;
                  vertical-align: middle;
                }
              }
            }
          }
          .clearance {
            width: 982px;
            height: 14px;
          }
        }
      }
    }
  }
}
</style>
