Page({

  /**
   * 页面的初始数据
   */
  data: {
    accessNumberList:{
      totol: '5,000',
      store1:'2,000',
      store2:'1,500',
      store3:'1,500',
    },
    customers:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCustomers();
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
    
  },
  getCustomers:function () {
    let netStr = [{ "name": "老王", "time": "1小時30分鐘", "storeName": "大慶市龍鳳洪忠泰", "scanTime": "2018.07.08 14:50" }, { "name": "老李", "time": "1小時30分鐘", "storeName": "大慶市龍鳳洪忠泰", "scanTime": "2018.07.20 20:50" }, { "name": "老张", "time": "1小時30分鐘", "storeName": "大慶市龍鳳洪忠泰", "scanTime": "2018.07.11 08:30"}]
    this.setData({
      customers:netStr,
    })
  }
})