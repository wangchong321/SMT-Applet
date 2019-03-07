// pages/sign-up/sign-up-done/sign-up-done.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkInfoTip: '恭喜！您现在是一名捷信推客了',
    userNameTitle: '捷信推客姓名',
    userNameValue: '欧阳森道哥',
    dsmTitle: 'DSM姓名',
    dsmValue: '123456',
    nullValue: '未设置',
    userInfoTotal: [
      { title: '捷信推客姓名', value: '欧阳森道哥' },
      { title: 'DSM姓名', value: '123456' },
      { title: '分配的主要门店', value: '天津市红桥区陆家嘴金融中心店' },
      { title: '分配的门店2', value: '天津一家很不错的手机和蛋糕店' },
      { title: '分配的门店3', value: '天津市河西区国金融中心店天津市河西区国金融中心店' }
    ]
  },

  /**
   * 确认按钮事件，使用支付宝账号登录
   */
  confirmRequest: function () {
    //TODO 
    let that = this;
    wx.switchTab({
      url: '/pages/main/basic-information/basic-information'
    })
  },

  getSelectStoreInfo: function () {
    let that = this;
    wx.getStorage({
      key: 'selectedStores',
      success: function(res) {
        let mainStore = 'userInfoTotal[2].value'
        let secondStore = 'userInfoTotal[3].value'
        let thirdStore = 'userInfoTotal[4].value'
        that.setData({
          [mainStore] : res.data[0].storeName,
          [secondStore]: res.data[1].storeName,
          [thirdStore]: res.data[2].storeName
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSelectStoreInfo()
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