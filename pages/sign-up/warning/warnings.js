// pages/sign-up/warning/warings.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataTipOverLimit: {
      show: false,
      height: '430rpx',
      imageUrlNumber: '0',
      showLeftBt: false,
      showRightBt: true,
      leftText: '',
      rightText: '好的',
    },
    dataReceiveTip: {
      show: false,
      height: '510rpx',
      imageUrlNumber: '2',
      showLeftBt: false,
      showRightBt: true,
      leftText: '',
      rightText: '好的',
    },
    dataFailTip: {
      show: false,
      height: '510rpx',
      imageUrlNumber: '0',
      showLeftBt: false,
      showRightBt: true,
      leftText: '',
      rightText: '好的',
    }
  },

  tipOverLimitClicked :function () {
    let that = this;
    let temp = that.data.dataTipOverLimit;
    temp.show = true;
    that.setData({
      dataTipOverLimit: temp
    })
  },

  receiveTipClicked: function () {
    let that = this;
    let temp = that.data.dataReceiveTip;
    temp.show = true;
    that.setData({
      dataReceiveTip: temp
    })
  },

  failTipClicked: function () {
    let that = this;
    let temp = that.data.dataFailTip;
    temp.show = true;
    that.setData({
      dataFailTip: temp
    })
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