// pages/sign-up/submit-sucess/submit-sucess.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sucessHeader: '提交成功 DSM登录操作',
    sucessHeaderDetail: '您的信息已经成功提交，请讲手机转交给DSM登陆操作，请耐心等待。',
    buttonName: '登录'
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

  },

  /**
   * 跳转到捷信管家登陆界面
   */
  jumpSMTLogin: function () {
    //TODO
    wx.navigateTo({
      url: '/pages/sign-up/smt-login/smt-login',
    })
    console.log('it will jump to SMT Login page');
  }
})