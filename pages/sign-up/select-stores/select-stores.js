// pages/sign-up/select-stores/select-stores.js
const WXAPI = require('../../../wxapi/wxapi.js');
let app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentSelectType: '', //当次选择的门店的类型
    selectableStores: [{
        "pos_code": '1001',
        "pos_name": '天津市红桥区陆家嘴金融中心店天津市红桥区陆家嘴金融中心店天津市红桥区陆家嘴金融中心店国际中心国际中心'
      }], //存储当前可选择的门店的数据，预先有个显示数据，不然第一次加载数据后位置会奇怪偏移
    storeSelected: '', //本次选择的门店的ID
    storeSelectedName: '' //本次选择的门店的名字
  },

  /**
   * 点击了某一个门店条目，修改当前storeSelected值为选中的pos_code
   */
  selectStore: function (e) {
    //TODO
    console.log(e);
    let that = this;
    that.setData({
      storeSelected: e.target.dataset.storei,
      storeSelectedName: e.target.dataset.storen,
    })
    console.log('选中的门店是 = ' + that.data.storeSelectedName);
  },
  /**
   * 选中店铺后确认，返回选择的返回结果到选择店铺页面，进行页面间值的传递
   */
  confirmSelectResult: function () {
    //TODO
    let that = this;
    let pages = getCurrentPages();
    let prePage = pages[pages.length - 2];
    console.log('页数：' + prePage + ',xxttype:' + that.data.currentSelectType);
    prePage.data.callBackStoreType = that.data.currentSelectType;
    prePage.data.callBackStoreId = that.data.storeSelected;
    prePage.data.callBackStoreName = that.data.storeSelectedName;
    wx.navigateBack({
      url: '/pages/sign-up/assign-stores/assign-stores'
    })
  },

  /**
   * 从服务器获得可选门店的数据
   */
  getAllStoresData: function() {
    let that = this;
    WXAPI.getSelectableStores().then(res => {
      if (res.status === 'true') {
        console.log(res.data);
        //这里要做一个数据的整理,目前只是清理掉无关变量获取id和名字，可能还需要判断登录的这个tipper是不是在此门店中
        if(res.data.pos_view_data.length > 0) {
          let temp_stores = [];
          for (let record of res.data.pos_view_data){
            let t_store = {
              "pos_code": record.pos_code,
              "pos_name": record.pos_name
            }
            temp_stores[temp_stores.length++] = t_store;
          }
          console.log(temp_stores);
          that.setData({
            selectableStores: temp_stores
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    that.data.currentSelectType = options.storeType;
    that.getAllStoresData();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
})