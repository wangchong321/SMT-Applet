const QRCode = require('../../../utils/weapp-qrcode.js');
const WXAPI = require('../../../wxapi/wxapi')
let qrcode;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tipMessage: '温馨提示：请确保您选择了正确的门店，若客户购买门店与推荐门店不符，您将无法收到居间服务费。',
    storesTitle: ['主要门店', '门店2','门店3'],
    sStores: null,
    showModalStatus: false,
    storeSelectedName: '',
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
    that.makeQRcode(that.data.storeSelectedName);
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

  /**
   * 点击阴影区域后隐藏二维码弹窗
   */
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
   * 从本地存储中获取选择过的门店数据
   */
  getStoresInfoFromStorage: function () {
    let that = this;
    wx.getStorage({
      key: 'selectedStores',
      success: function (res) {
        that.setData({
          sStores : res.data
        })
      },
    })
  },

  /**
   * 从服务器中获取个人选择过的门店数据
   */
  getStoresInfoFromServer: function () {
    let that = this;
    WXAPI.baseInfo().then(res => {
      if (res.status === 'true') {
        console.log(res.data);
        that.setData({
          sStores: res.data.pos_list
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //this.getStoresInfoFromStorage();
    this.getStoresInfoFromServer();
    qrcode = new QRCode('canvas', {
      text: this.data.storeSelectedName,
      image: '/images/main/main_store_qrcode_1.png',
      width: 250,
      height: 250,
      colorDark: "black",
      colorLight: "white",
      correctLevel: QRCode.CorrectLevel.H,
    });
  },

  makeQRcode: function (text) {
    qrcode.makeCode(text)
  },

})