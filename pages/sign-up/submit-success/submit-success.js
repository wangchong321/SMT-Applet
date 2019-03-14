// pages/sign-up/submit-success/submit-success.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    successHeader: '提交成功 DSM登录操作',
    successHeaderDetail: '您的信息已经成功提交，请将手机转交给DSM登陆操作，请耐心等待。',
    buttonName: '登录'
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