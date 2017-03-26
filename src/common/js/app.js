/**
 * Created by adminr on 2017/2/13.
 */
let interfaceUrl = 'http://httyjftest.clpsgroup.com.cn/jfh-web-boss';
let url = {
  // 获取特惠商铺
  getStorePrefe: interfaceUrl + '/norest/storePrefe/getStorePrefe',
  // 获取特惠商品
  getStoreGood: interfaceUrl + '/norest/goods/getStoreGood',
  // 商品详情
  getGoodDetails: interfaceUrl + '/norest/goods/getGoodDetails',
  // 登录
  login: interfaceUrl + '/rest/user/login',
  // 个人中心
  myCenterGold: interfaceUrl + '/rest/myIntegral/myCenterGold',
  // 我的积分
  getMyIntegral: interfaceUrl + '/rest/myIntegral/getMyIntegral',
  // 我的收藏
  getMyCollectionList: interfaceUrl + '/rest/myCollect/getMyCollectionList'
};
let app = {
  url: url
};
export default app;
