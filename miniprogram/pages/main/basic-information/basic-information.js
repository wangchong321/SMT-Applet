const WXAPI = require('../../../wxapi/wxapi')
let app = getApp()

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

    // 故意让它报错,好执行onErorr
    setTimeout(() => {
      const a = {};
      a.a.a = 1;
    }, 1001);
  },
  
  getBaseInfo: function () {
    let that = this;

    wx.showLoading({
      title: '加载中',
    })
    let data = {
      tipper_id: "123",
    }
    WXAPI.baseInfo(data).then(res => {
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
    app.globalData = {
    }
    wx.reLaunch({
      url: "../../sign-up/login-wechat/login-wechat",
    })
  }
})