// pages/sign-up/assign-stores/assign-stores.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkInfoTip: '请选择门店并推荐给捷信推客',
    nameTitle: '姓名',
    nameValue: '请选择',
    dsmName: 'DSM姓名',
    dsmValue: '12345',
    stores: [
      { storeId: '', storeName: '' },
      { storeId: '', storeName: '' },
      { storeId: '', storeName: '' }
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
    //先把数据存储到本地，以供后面使用
    wx.setStorage({
      key: 'selectedStores',
      data: that.data.stores
    })
    wx.navigateTo({
      url: '/pages/sign-up/sign-up-done/sign-up-done',
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
          that.data.stores[0].storeName = that.data.callBackStoreName;
          that.data.mainStoreSelected = true;
          break;
        case 'secondStore':
          that.data.stores[1].storeId = that.data.callBackStoreId;
          that.data.stores[1].storeName = that.data.callBackStoreName;
          break;
        case 'thirdStore':
          that.data.stores[2].storeId = that.data.callBackStoreId;
          that.data.stores[2].storeName = that.data.callBackStoreName;
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