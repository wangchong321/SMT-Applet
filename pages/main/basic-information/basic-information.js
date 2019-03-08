const WXAPI = require('../../../wxapi/wxapi')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    baseInfo: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getBaseInfo();
  },

  getBaseInfo: function () {
    let that = this;

    wx.showLoading({
      title: '加载中',
    })
    WXAPI.baseInfo().then(res => {
      wx.hideLoading();
      if(res.status === 'true'){
        that.setData({
          baseInfo: res.data
        })
      }
    }).catch(res => {
      wx.hideLoading();
    })
  },

  onSignOut: function() {
    wx.reLaunch({
      url: "../../sign-up/login-wechat/login-wechat",
    })
  }
})