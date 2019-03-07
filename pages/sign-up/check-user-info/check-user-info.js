// pages/sign-up/check-user-info/check-user-info.js
let app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkInfoTip: '请检查以下捷信推客信息，点击通过或拒绝按钮',
    nameTitle: '姓名',
    nameValue: '欧阳森道哥',//姓名的默认值，从全局变量获得修改
    phoneTitle: '电话号码',
    phoneValue: '13312345678'//号码的默认值，从全局变量获得修改
  },

  /**
   * 点击通过按钮，会跳转到让推客设置门店页面
   */
  passRequest: function () {
    //TODO
    wx.navigateTo({
      url: '/pages/sign-up/assign-stores/assign-stores',
    })
    console.log('tap the pass button, it will jump to address setting page');
  },

  /**
   * 点击通过按钮，跳转到错误页面吧
   */
  rejectRequest: function () {
    //TODO
    console.log('tap the reject button');
  },

  /**
   * 推客的信息存储在了 全局变量里，通过全局变量获取推客的信息
   */
  getTuikeInfo: function () {
    let that = this;
    if (app.globalData.userInfoObj.name != '') {
      that.data.nameValue = app.globalData.userInfoObj.name;
      that.data.phoneValue = app.globalData.userInfoObj.number;
    }
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getTuikeInfo();
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