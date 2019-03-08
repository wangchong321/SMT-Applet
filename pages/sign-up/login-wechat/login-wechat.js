let app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },
  onSignUpGuide: function () {
    wx.navigateTo({
      url: "../sign-up-guide/sign-up-guide",
    })
  },
  onSignInTwitter: function () {
    wx.navigateTo({
      url: "../smt-login/smt-login",
    })
  },
  onSignIn: function () {
    wx.switchTab({
      url: "../../main/basic-information/basic-information",
    })
  }
})