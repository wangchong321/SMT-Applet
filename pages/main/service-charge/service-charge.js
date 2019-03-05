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
    serviceChargeList: [
      {
        customerName: '叶赫那拉',
        serviceChargeAmount: '20.00',
        storeName: '大庆市龙凤区鸿中泰龙凤区鸿中泰',
        payTime: '2018.07.07 14:50',
        chargeStatus: '付费成功'
      },
      {
        customerName: '叶赫那拉',
        serviceChargeAmount: '0.00',
        storeName: '大庆市龙凤区鸿中泰龙凤区鸿中泰',
        payTime: '无',
        chargeStatus: '付费失败'
      },
      {
        customerName: '叶赫那拉',
        serviceChargeAmount: '20.00',
        storeName: '大庆市龙凤区鸿中泰龙凤区鸿中泰',
        payTime: '2018.07.07 14:50',
        chargeStatus: '付费中'
      },
      {
        customerName: '叶赫那拉',
        serviceChargeAmount: '20.00',
        storeName: '大庆市龙凤区鸿中泰龙凤区鸿中泰',
        payTime: '2018.07.07 14:50',
        chargeStatus: '付费成功'
      }
    ],
    chargeStatuss: {
      'SUCESS': '付费成功',
      'FAIL': '付费失败',
      'PROCESS': '付费中'
    }
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