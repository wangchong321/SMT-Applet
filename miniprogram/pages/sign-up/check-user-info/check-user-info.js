// pages/sign-up/check-user-info/check-user-info.js
let app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    nameValue: '欧阳森道哥',//姓名的默认值，从全局变量获得修改
    phoneValue: '13312345678'//号码的默认值，从全局变量获得修改
  },

  /**
   * 点击通过按钮，会跳转到让推客设置门店页面
   */
  passRequest: function () {
    wx.navigateTo({
      url: '/pages/sign-up/assign-stores/assign-stores',
    })
    console.log('tap the pass button, it will jump to address setting page');
  },

  /**
   * 点击通过按钮，跳转到错误页面吧，
   */
  rejectRequest: function () {
    // wx.navigateTo({
    //   url: '/pages/sign-up/login-wechat/login-wechat',
    // })
    wx.navigateBack({
      delta: 1
    })
    console.log('tap the reject button');
  },

  /**
   * 推客的信息存储在了 全局变量里，
   * 注册过程尚未传递到服务器所以通过全局变量获取推客的信息
   */
  getTipperInfo: function () {
    let that = this;//app.globalData.userInfoObj.number
    that.setData({
      nameValue : app.globalData.userInfoObj.name,
      phoneValue : app.globalData.userInfoObj.number
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getTipperInfo();
  },
  
})