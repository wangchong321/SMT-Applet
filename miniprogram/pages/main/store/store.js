const QRCode = require('../../../utils/weapp-qrcode.js')
const WXAPI = require('../../../wxapi/wxapi')
import rpx2px from '../../../utils/rpx2px.js'
let qrcode;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    storesTitle: ['主要门店', '门店2','门店3'],
    sStores: [],
    showModalStatus: false,
    storeSelectedName: '',
  },

  /**
   * 用户点击了商店的二维码图标，底部弹窗显示门店的二维码
   */
  showStoreQrcode: function (options) {
    let that = this;
    that.setData({
      storeSelectedName: options.currentTarget.dataset.storen,
    });
    that.showQRcodePopup();
  },

  showQRcodePopup: function () {
    let that = this;
    let animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    that.animation = animation;
    animation.translateY(0).step();
    that.setData({
      animationData: animation.export(),
      showModalStatus: true
    });
    setTimeout(function () {
      animation.translateY(rpx2px(-850)).step()
      that.setData({
        animationData: animation.export()
      })
    }.bind(that), 200);
    that.makeQRcode(that.data.storeSelectedName);
  },

  /**
   * 点击阴影区域后隐藏二维码弹窗
   */
  hideQRcodePopup: function () {
    let that = this;
    let animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    that.animation = animation;
    animation.translateY(300).step();
    that.setData({
      animationData: animation.export(),
    });
    setTimeout(function () {
      animation.translateY(0).step()
      that.setData({
        animationData: animation.export(),
        showModalStatus: false
      })
    }.bind(that), 200);
  },

  /**
   * 从服务器中获取个人选择过的门店数据
   */
  getStoresInfoFromServer: function () {
    let that = this;
    wx.showLoading({
      title: '加载中',
    })
    WXAPI.baseInfo().then(res => {
      if (res.status === 'true') {
        console.log(res.data);
        that.setData({
          sStores: res.data.pos_list
        })
        wx.hideLoading();
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
    qrcode.makeCode(text);
  },

})