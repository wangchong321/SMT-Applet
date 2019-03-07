// pages/sign-up/select-stores/select-stores.js
let app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentSelectType: '', //当次选择的门店的类型
    selectableStores: [{
        "storeId": '1001',
        "storeName": '天津市红桥区陆家嘴金融中心店天津市红桥区陆家嘴金融中心店天津市红桥区陆家嘴金融中心店国际中心国际中心'
      }], //存储当前可选择的门店的数据，预先有个显示数据，不然第一次加载数据后位置会奇怪偏移
    storeSelected: '', //本次选择的门店的ID
    storeSelectedName: '' //本次选择的门店的名字
  },

  /**
   * 点击了某一个门店条目，修改当前storeSelected值为选中的storeId
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
    wx.request({
      url: app.globalData.baseUrl + '/allStores',
      data: {},
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        console.log(res.data.data);
        that.setData({
          selectableStores: res.data.data,
        })
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
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})