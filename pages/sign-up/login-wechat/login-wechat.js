let app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  onSignUpGuide: function () {
    wx.navigateTo({
      url: "../sign-up-guide/sign-up-guide",
    })
  },

  onSignInTwitter: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    if (e.detail.userInfo) {
      wx.switchTab({
        url: "../../main/basic-information/basic-information",
      })
    }
  },

  onSignIn: function () {
    wx.navigateTo({
      url: "../smt-login/smt-login",
    })
  }
})