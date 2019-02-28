// pages/sign-up/assign-stores/assign-stores.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkInfoTip: '请检查以下捷信推客信息，点击通过或拒绝按钮',
    nameTitle: '姓名',
    nameValue: '请选择',
    dsmName: 'DSM姓名',
    dsmValue: '12345',
    stores: [
      { storeId: '', mainStore: '' },
      { storeId: '', secondStore: '天津一家很不错的手机和蛋糕店' },
      { storeId: '', thirdStore: '' }
    ]
  },

  /**
   * 确认按钮事件，跳转到注册成功页面
   * 灰色状态不可点击，蓝色可点击
   */
  confirmRequest: function () {
    //TODO
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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