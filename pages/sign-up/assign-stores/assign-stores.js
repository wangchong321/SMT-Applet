const WXAPI = require('../../../wxapi/wxapi')
let app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    dsmValue: '12345',
    stores: [{ pos_code: '', pos_name: '', primary_flag: 0, pos_status: ''},
      { pos_code: '', pos_name: '', primary_flag: 0, pos_status:'' },
      { pos_code: '', pos_name: '', primary_flag: 0, pos_status:'' }],
    callBackStoreType: '',
    callBackStoreId: '',
    callBackStoreName: '',
    mainStoreSelected: false,
    secondStoreSelected: false,
  },

  /**
   * 确认按钮事件，上传用户的选择的数据，然后跳转到注册成功页面
   * 灰色状态不可点击，蓝色可点击
   */
  confirmRequest: function () {
    let that = this;
    //先把数据存储到本地，以供后面使用
    wx.setStorage({
      key: 'selectedStores',
      data: that.data.stores
    })
    //上传注册信息，根据反馈进行跳转
    //需要上传的信息太多，用户的个人信息，OCR的信息，门店选择的信息，支付宝的信息，这里我们只上传用户个人信息和地点信息
    let data = {
      'name' : app.globalData.userInfoObj.name,
      'id_card_number': app.globalData.userInfoObj.iDCard,
      'phone_number' : '13812345678',
      'dsm_homer_id' : '123456',
      'pos_list' : that.data.stores,
    }
    WXAPI.tipperRegisterUpateInfo(data).then(res => {
      if (res.status === 'true') {
        console.log(res.data);
        wx.navigateTo({
          url: '/pages/sign-up/sign-up-done/sign-up-done',
        })
      }
    })
  },

  onLoad: function () {
    this.getDsmHomerId();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let that = this;
    //根据回调中的数据信息，更新页面数据
    if (that.data.callBackStoreType != '') {
      for (let item of that.data.stores) {
        if (item.pos_code === that.data.callBackStoreId) {
          wx.showModal({
            title: '错误提示',
            content: '请不要选择相同的门店',
            showCancel: false
          })
          return;
        }
      }
      switch (that.data.callBackStoreType) {
        case 'mainStore':
          that.data.stores[0].pos_code = that.data.callBackStoreId;
          that.data.stores[0].pos_name = that.data.callBackStoreName;
          that.data.stores[0].primary_flag = 1;
          that.data.mainStoreSelected = true;
          break;
        case 'secondStore':
          that.data.stores[1].pos_code = that.data.callBackStoreId;
          that.data.stores[1].pos_name = that.data.callBackStoreName;
          that.data.stores[0].primary_flag = 0;
          that.data.secondStoreSelected = true;
          break;
        case 'thirdStore':
          that.data.stores[2].pos_code = that.data.callBackStoreId;
          that.data.stores[2].pos_name = that.data.callBackStoreName;
          that.data.stores[0].primary_flag = 0;
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
    let that = this;
    that.setData({
      callBackStoreType : '',
      callBackStoreId : ''
    })
  },

  //获取DSM的homer id，也就是名字
  getDsmHomerId: function () {
    let that = this;
    wx.getStorage({
      key: 'dsm_homer_id',
      success: function(res) {
        that.setData ({
          dsmValue : res.data
        })
      },
    });
  },

})