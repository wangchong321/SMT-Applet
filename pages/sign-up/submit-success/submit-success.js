// pages/sign-up/submit-success/submit-success.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 跳转到捷信管家登陆界面
   */
  jumpSMTLogin: function () {
    wx.navigateTo({
      url: '/pages/sign-up/smt-login/smt-login',
    });
  },
  
})