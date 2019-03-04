// pages/sign-up/select-stores/select-stores.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentSelectType: '',
    selectableStores: [
      { storeId: '1000', storeName: '第一个条目天津市红桥区陆家嘴金融中心店' },
      { storeId: '1001', storeName: '天津市红桥区陆家嘴金融中心店天津市红桥区陆家嘴金融中心店天津市红桥区陆家嘴金融中心店' },
      { storeId: '1002', storeName: '天津市红桥区陆家嘴金融中心过桥米线' },
      { storeId: '1003', storeName: '天津市红桥区陆家嘴金融中心店2222222' },
      { storeId: '1004', storeName: '天津市红桥区陆家嘴金融中心店44444' },
      { storeId: '1005', storeName: '天津市红桥区陆家嘴金融中心店55555' },
      { storeId: '1006', storeName: '天津市红桥区陆家嘴金融中心店66666' },
      { storeId: '1007', storeName: '天津市红桥区陆家嘴金融中心店77777' },
      { storeId: '1008', storeName: '天津市红桥区陆家嘴金融中心店88888' },
      { storeId: '1009', storeName: '天津市红桥区陆家嘴金融中心店999999' },
      { storeId: '1010', storeName: '天津市红桥区陆家嘴金融中心店10101010' },
      { storeId: '1011', storeName: '天津市红桥区陆家嘴金融中心店11111111' },
      { storeId: '1012', storeName: '天津天津天津天津' },
      { storeId: '1013', storeName: '天津市红桥区陆家嘴' },
      { storeId: '1014', storeName: '天津市红桥区美食城' },
      { storeId: '1015', storeName: '最后一个条目天津市红桥区米线店' }
    ],
    storeSelected: '',
    storeSelectedName: ''

  },

  /**
   * 点击了某一个店铺条目，修改当前storeSelected值为选中的storeId
   */
  selectStore: function (e) {
    //TODO
    console.log(e);
    let that = this;
    that.setData({

      storeSelected: e.target.dataset.storei,
      storeSelectedName: e.target.dataset.storen,
    })
    console.log('活动订单id = ' + that.data.storeSelected);
  },
  /**
   * 选中店铺后确认，返回选择的返回结果到选择店铺页面
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
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    that.data.currentSelectType = options.storeType;
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