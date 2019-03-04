Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: [
      { id: 1, name: 'title1' },
      { id: 2, name: 'title2' },
      { id: 3, name: 'title3' },
      { id: 4, name: 'title431232133333333333aaa2zsssas' },
      { id: 5, name: 'title5' },
    ],
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
  onSignOut: function() {
    wx.reLaunch({
      url: "../../sign-up/login-wechat/login-wechat",
    })
  }
})