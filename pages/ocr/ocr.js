// pages/ocr/ocr.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // name:"李四",
    imageSrc: "",
    address_count: "0/200",
    showView: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // this.setData({
    //   name: "张三"
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },



  infoSubmit: function(e) {

    // console.log(e)
  },

  chooseImage: function() {
    var that = this;
    wx.chooseImage({
      count: 1,
      success: function(e) {
        that.setData({
            imageSrc: e.tempFilePaths[0]
          })
        var fs = wx.getFileSystemManager();
        fs.readFile({
          filePath: e.tempFilePaths[0],
          encoding: 'base64',
          success: res => {

            wx.request({
              url: 'https://dm-51.data.aliyun.com/rest/160601/ocr/ocr_idcard.json',
              data: {
                'image': res.data,
                "configure": "{\"side\":\"face\"}"
              },
              header: {
                "Authorization": "APPCODE 8203b67bae954fa68ab249744beebbf5" //自己的code
              },
              method: 'POST',
              dataType: 'json',
              responseType: 'text',
              success: function(res) {
                console.log(res.data);
                if (200 == res.statusCode) {
                  var str = res.data.birth;
                  var birth = str.substring(0, 4) + "-" + str.substring(4, 6) + "-" + str.substring(6, 8);
                  that.setData({
                    showView: true,
                    name: res.data.name,
                    address: res.data.address,
                    sex: res.data.sex,
                    nationality: res.data.nationality,
                    num: res.data.num,
                    birth: birth,
                    address_count: res.data.address.length + "/200"
                  })
                } else {
                  wx.showModal({
                    title: '提示信息',
                    content: '你选择的图片不符合规格，请重新上传',
                    showCancel: false,
                    confirmText: '确定',
                    success: function(res) {
                      console.log("点击了确定", res)
                      that.setData({
                        imageSrc: "../image/indenty.jpg",
                        showView: false,
                        name: "",
                        address: "",
                        sex: "",
                        nationality: "",
                        num: "",
                        birth: "",
                        address_count: "0/200"
                      })
                    },
                  })
                }
              },
              fail: function(res) {
                console.log('fail');
              }
            })
          },
        });
        console.log("223kasdladlad");
      }
    })
  }
})