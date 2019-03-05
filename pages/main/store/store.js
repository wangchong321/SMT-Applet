Page({

  /**
   * 页面的初始数据
   */
  data: {
    tipMessage: '温馨提示：请确保您选择了正确的门店，若客户购买门店与推荐门店不符，您将无法收到居间服务费。',
    stores: [
      { storeId: '1001', storeTitle: '主要门店', storeName: '大庆市龙凤区鸿中泰龙凤区鸿中泰' },
      { storeId: '1002', storeTitle: '门店2', storeName: '大庆市龙凤区鸿中泰龙凤区鸿' },
      { storeId: '1004', storeTitle: '门店3', storeName: '大庆市龙凤区鸿中泰龙凤区鸿中泰鸿中泰大庆市龙凤区鸿中泰' }
    ],
    showModalStatus: false,
    storeSelectedName: ''
  },

  /**
   * 用户点击了商店的二维码图标，底部弹窗显示门店的二维码
   */
  showStoreQrcode: function (options) {
    //TODO
    console.log(options);
    let that = this;
    that.setData({
      storeSelectedName: options.currentTarget.dataset.storen,
    })
    that.showQRcodePopup();
  },

  showQRcodePopup: function () {
    // 显示遮罩层
    let that = this;
    wx.hideTabBar({
    })
    let animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    that.animation = animation
    animation.translateY(300).step()
    that.setData({
      animationData: animation.export(),
      showModalStatus: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      that.setData({
        animationData: animation.export()
      })
    }.bind(that), 200)
  },
  //隐藏
  hideQRcodePopup: function () {
    //显示tab bar
    let that = this;
    wx.showTabBar({
    })
    let animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    that.animation = animation
    animation.translateY(300).step()
    that.setData({
      animationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      that.setData({
        animationData: animation.export(),
        showModalStatus: false
      })
    }.bind(that), 200)
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
    
  }
})