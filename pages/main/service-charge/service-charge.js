let app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    customerNameTitle: '客户姓氏',
    serviceChargeAmountTitle: '服务费金额',
    storeNameTitle: '门店名称',
    payTimeTitle: '付费时间',
    chargeStatusTitle: '服务费收费状态',
    serviceChargeList: [],
    chargeStatuss: {
      'SUCESS': '付费成功',
      'FAIL': '付费失败',
      'PROCESS': '付费中'
    }
  },

  /**
   * 从服务器获得用户获得服务费的数据和状态
   */
  getServiceChargeFromServer : function() {
    let that = this;
    wx.request({
      url: app.globalData.baseUrl + '/serviceCharge',
      data: {},
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        console.log(res.data.data);
        that.setData({
          serviceChargeList: res.data.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getServiceChargeFromServer()
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