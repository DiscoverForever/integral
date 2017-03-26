// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import 'common/stylus/index.styl';
import home from 'components/home/home';
import login from 'components/login/login';
import goodDetail from 'components/goodDetail/goodDetail';
import mine from 'components/mine/mine';
import myIntegral from 'components/myIntegral/myIntegral';
import makeOrder from 'components/makeOrder/makeOrder';
import myCollection from 'components/myCollection/myCollection';
import pay from 'components/pay/pay';
import storeDetail from 'components/storeDetail/storeDetail';

Vue.use(Mint);
Vue.use(VueRouter);
Vue.use(VueResource);

let app = Vue.extend(App);
let router = new VueRouter({
  linkActiveClass: 'active'
});
/**
 * 配置路由
 */
router.map({
  // 首页
  '/home': {
    name: 'home',
    component: home
  },
  // 登录
  '/login': {
    name: 'login',
    component: login
  },
  // '/goodDetail/:flag/:count/:goodsPrice/:storePrice/:goods_id/:storeAddress/:userType': {
  // 商品详情
  '/goodDetail': {
    name: 'goodDetail',
    component: goodDetail
  },
  // 个人中心
  '/mine': {
    name: 'mine',
    component: mine
  },
  // 我的积分
  '/myIntegral': {
    name: 'myIntegral',
    component: myIntegral
  },
  // 下单信息
  '/makeOrder': {
    name: 'makeOrder',
    component: makeOrder
  },
  // 我的收藏
  '/myCollection': {
    name: 'myCollection',
    component: myCollection
  },
  // 支付
  '/pay': {
    name: 'pay',
    component: pay
  },
  // 店铺详情
  '/storeDetail': {
    name: 'storeDetail',
    component: storeDetail
  }
});
router.start(app, '#app');
router.redirect({
  '/': '/login'
});
