// pages/sign-up/assign-stores/assign-stores.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkInfoTip: '请检查以下捷信推客信息，点击通过或拒绝按钮',
    nameTitle: '姓名',
    nameValue: '请选择',
    dsmName: 'DSM姓名',
    dsmValue: '12345',
    stores: [
      { storeId: '', mainStore: '' },
      { storeId: '', secondStore: '' },
      { storeId: '', thirdStore: '' }
    ],
    callBackStoreType: '',
    callBackStoreId: '',
    callBackStoreName: '',
    mainStoreSelected: false
  },

  /**
   * 确认按钮事件，上传用户的选择的数据，然后跳转到注册成功页面
   * 灰色状态不可点击，蓝色可点击
   */
  confirmRequest: function () {
    //TODO
    let that = this;
    wx.navigateTo({
      url: '/pages/sign-up-done/sign-up-done',
    })
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
    let that = this;
    if (that.data.callBackStoreType == null) {
      //currently do nothing
    } else {
      switch (that.data.callBackStoreType) {
        case 'mainStore':
          that.data.stores[0].storeId = that.data.callBackStoreId;
          that.data.stores[0].mainStore = that.data.callBackStoreName;
          that.data.mainStoreSelected = true;
          break;
        case 'secondStore':
          that.data.stores[1].storeId = that.data.callBackStoreId;
          that.data.stores[1].secondStore = that.data.callBackStoreName;
          break;
        case 'thirdStore':
          that.data.stores[2].storeId = that.data.callBackStoreId;
          that.data.stores[2].thirdStore = that.data.callBackStoreName;
          break;
      }
      that.setData({
        stores: that.data.stores,
        mainStoreSelected: that.data.mainStoreSelected
      })
    }
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