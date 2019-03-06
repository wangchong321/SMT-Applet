let app = getApp();

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
    let that = this;

    wx.request({
      url: app.globalData.baseUrl +'/customerStatus',
      data: {

      },
      method: 'POST',
      dataType: 'json',
      responseType: 'text',
      success: function(res){
        console.log(res.data.data);
        that.setData({
          customers: res.data.data,
        })
      }
    })


    // let netStr = [{ "name": "朝阳艾弗森", "time": "1小時30分鐘", "storeName": "大慶市龍鳳洪忠泰", "scanTime": "2018.07.08 14:50" }, { "name": "通州吴彦祖", "time": "2小時30分鐘", "storeName": "大慶市龍鳳洪忠泰鳳洪忠泰", "scanTime": "2018.07.20 20:50" }, { "name": "梨园吴亦凡", "time": "10小時30分鐘", "storeName": "大慶市龍鳳洪忠泰鳳洪忠泰鳳洪忠泰", "scanTime": "2018.07.11 08:30"}]
    // this.setData({
    //   customers:netStr,
    // })
  }
})