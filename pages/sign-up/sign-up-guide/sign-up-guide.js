const OCRAPI = require('../../../wxapi/ocrapi')

var app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    buttonDisable: true,
    faceImg: '/images/sign-up-guide/face.png',
    backImg: '/images/sign-up-guide/back.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  onFace: function () {
    this.chooseImage('face');
  },

  onBack: function () {
    this.chooseImage('back');
  },

  onAffirm: function () {
    console.log('button');
    wx.navigateTo({
      url: '../sign-up-supplement/sign-up-supplement',
    })
  },

  chooseImage: function (orientation) {
    let that = this;
    wx.chooseImage({
      count: 1,
      success: function (imageInfo) {
        that.setData({
          imageSrc: imageInfo.tempFilePaths[0]
        })
        let fs = wx.getFileSystemManager();
        fs.readFile({
          filePath: imageInfo.tempFilePaths[0],
          encoding: 'base64',
          success: fileInfo => {
            that.requestOcr(fileInfo, orientation, imageInfo);
          },
        })
      },
    })
  },
  requestOcr: function (fileInfo, orientation, imageInfo) {
    let that = this;
    let orientatioObject = {
      side: orientation
    }
    wx.showLoading({
      title: '加载中',
    })


    OCRAPI.ocrRequest(fileInfo.data, orientatioObject).then(res => {
        wx.hideLoading();
        console.log(res);
        if (200 === res.statusCode) {
          // 根据正反面来设置页面UI
          if (orientation === "face") {
            app.globalData.faceData = res.data;
            that.setData({
              faceImg: imageInfo.tempFilePaths[0]
            })
          } else {
            app.globalData.backData = res.data;
            that.setData({
              backImg: imageInfo.tempFilePaths[0]
            })
          }
          // 控制按钮点击态
          if (app.globalData.faceData && app.globalData.backData) {
            that.setData({
              buttonDisable: false
            })
          }
        } else {
          wx.showModal({
            title: '提示信息',
            content: '你选择的图片不符合规格，请重新上传',
            showCancel: false,
            confirmText: '确定',
            success: function (res) {
              console.log("点击了确定", res);
            },
          })
        }
    }).catch(res => {
      wx.hideLoading();
    })

  //   wx.request({
  //     url: 'https://dm-51.data.aliyun.com/rest/160601/ocr/ocr_idcard.json',
  //     data: {
  //       'image': fileInfo.data,
  //       "configure": orientatioObject
  //     },
  //     header: {
  //       "Authorization": "APPCODE 8203b67bae954fa68ab249744beebbf5"
  //     },
  //     method: 'POST',
  //     dataType: 'json',
  //     responseType: 'text',
  //     success: function (res) {
  //       console.log(res);
  //       if (200 === res.statusCode) {
  //         if (orientation == "face") {
  //           app.globalData.faceData = res.data;
  //           that.setData({
  //             faceImg: imageInfo.tempFilePaths[0]
  //           })
  //         } else {
  //           app.globalData.backData = res.data;
  //           that.setData({
  //             backImg: imageInfo.tempFilePaths[0]
  //           })
  //         }
  //         if (app.globalData.faceData && app.globalData.backData) {
  //           that.setData({
  //             buttonDisable: false
  //           })
  //         }
  //         console.log(app.globalData);
  //       } else {
  //         wx.showModal({
  //           title: '提示信息',
  //           content: '你选择的图片不符合规格，请重新上传',
  //           showCancel: false,
  //           confirmText: '确定',
  //           success: function (res) {
  //             console.log("点击了确定", res);
  //           },
  //         })
  //       }
  //     },
  //     fail: function (res) {
  //     },
  //     complete: function (res) {
  //       wx.hideLoading();
  //     },
  //   })
  }
})