// pages/sign-up/sign-up-done/sign-up-done.js
const WXAPI = require('../../../wxapi/wxapi')
let app = getApp()
Page({

  data: {
    userInfoTotal: [
      { title: '捷信推客姓名', value: '欧阳森道哥' },
      { title: 'DSM姓名', value: '123456' },
      { title: '分配的主要门店', value: '天津市红桥区陆家嘴金融中心店' },
      { title: '分配的门店2', value: '天津一家很不错的手机和蛋糕店' },
      { title: '分配的门店3', value: '天津市河西区国金融中心店天津市河西区国金融中心店' }
    ]
  },

  confirmRequest: function () {
    let that = this;
    wx.switchTab({
      url: '/pages/main/basic-information/basic-information'
    })
  },

  getSelectStoreInfo: function () {
    let that = this;
    wx.getStorage({
      key: 'selectedStores',
      success: function(res) {
        let mainStore = 'userInfoTotal[2].value';
        let secondStore = 'userInfoTotal[3].value';
        let thirdStore = 'userInfoTotal[4].value';
        that.setData({
          [mainStore] : res.data[0].pos_name,
          [secondStore]: res.data[1].pos_name,
          [thirdStore]: res.data[2].pos_name
        })
      },
    })
  },

  getDsmHomerId: function () {
    let that = this;
    wx.getStorage({
      key: 'dsm_homer_id',
      success: function (res) {
        let userDsmValue = 'userInfoTotal[1].value';
        that.setData({
          [userDsmValue] : res.data
        })
      },
    })
  },

  getTipperName: function () {
    let that = this;
    if (app.globalData.userInfoObj.name != null) {
      that.data.userInfoTotal[0].value = app.globalData.userInfoObj.name;
    }
  },

  getUserBasicInfoFromServer: function () {
    let that = this;
    WXAPI.baseInfo().then(res => {
      if (res.status === 'true') {
        let tipperName = 'userInfoTotal[0].value'
        let dsmName = 'userInfoTotal[1].value'
        let mainStore = 'userInfoTotal[2].value'
        let secondStore = 'userInfoTotal[3].value'
        let thirdStore = 'userInfoTotal[4].value'
        that.setData({
          [tipperName]: res.data.customer_name,
          [dsmName]: res.data.homer_id,
          [mainStore]: res.data.pos_list[0].pos_name,
          [secondStore]: res.data.pos_list[1].pos_name,
          [thirdStore]: res.data.pos_list[2].pos_name
        })
      }
    })
  },

  onLoad: function (options) {
    this.getUserBasicInfoFromServer()
    //和app确认一下流程，该也数据从哪里来再删除
    //this.getTipperName()
    //this.getSelectStoreInfo()
    //this.getDsmHomerId()
  },
  
})