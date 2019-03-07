// pages/sign-up/smt-login/smt-login.js
//本页为Sale Mgmt Tool的工作人员登录，协助推客
let app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    smtUserId: '',
    footer: 'Honor Procuct of Home Credit China',

    idLength: 6, //id输入框个数
    codeLength: 4, //code输入框个数
    isIdFocus: true, //聚焦 
    isCodeFocus: false,
    idValue: "", //输入的内容 
    codeValue: "",
    buttonTittle: '发送',
    ispassword: false, //是否密文显示 true为密文， false为明文。
    isSendClicked: false, //
    codeAreaStatus: false, //
    loginButtonStatus: false, //
    sendCodeButtonStatus: false, //发送按钮是否可点击状态
  },
  /**
   *获取id区域输入值
   */
  idFocus: function (e) {
    let that = this;
    console.log(e.detail.value);
    let inputValue = e.detail.value;
    that.setData({
      idValue: inputValue,
    })
    if (inputValue.length >= 6){
      that.setData({
        codeAreaStatus: true,
        sendCodeButtonStatus: true
      })
    } else {
      that.setData({
        loginButtonStatus: false
      })
    }
  },
  /**
   *获取验证码区域输入值
   */
  codeFocus: function (e) {
    let that = this;
    console.log(e.detail.value);
    let inputValue = e.detail.value;
    console.log(inputValue);
    that.setData({
      codeValue: inputValue,
    })
    if (inputValue.length >= 4) {
      that.setData({
        loginButtonStatus: true
      })
    }
  },
  /**
   *点击ID输入区域，获取focus
   */
  tapID: function () {
    let that = this;
    that.setData({
      isIdFocus: true,
      isCodeFocus: false,
    })
  },
  /**
   *点击二维码区域，获取focus
   */
  tapCode: function () {
    let that = this;
    that.setData({
      isCodeFocus: true,
      isIdFocus: false,
    })
  },

  /**
   *提交输入信息，如果成功，跳转到核查信息界面
   */
  formSubmit: function (e) {
    //TODO
    let that = this;
    that.setData({
      idValue: e.detail.value.homerid,
      codeValue: e.detail.value.messagecode
    })
    wx.request({
      url: app.globalData.baseUrl + '/loginSMT',
      data: {
        'id': e.detail.value.homerid,
        'code': e.detail.value.messagecode
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        console.log(res.data.data.result);
        if (res.data.data.result == 'OK') {
          wx.navigateTo({
            url: '/pages/sign-up/check-user-info/check-user-info?' + 'id=' + that.data.idValue + '&messagecode=' + that.data.codeValue
          })
        } else {
          wx.showModal({
            title: '登录失败',
            content: '登录出错了，可能是ID或者验证码不正确，请重新输入登录信息。',
            showCancel: false,
          })
        }
      }
    })
  },
  /**
  *发送验证码短信给输入ID的用户
  */
  sendMessageCode: function (e) {
    //TODO
    console.log("发送验证码短信给用户:");
    if (this.isSendClicked) {
      return;
    }
    this.isSendClicked = true;

    let that = this;
    var times = 60
    let i = setInterval(function () {
      times--;
      console.log(times);
      if (times <= 0) {
        that.isSendClicked = false;
        that.setData({
          sendCodeButtonStatus: true,
          buttonTittle: "发送"
        })
        clearInterval(i);
      } else {
        that.setData({
          sendCodeButtonStatus: false,
          buttonTittle: times + "秒",
          numberButtonStatus: true
        })
      }
    }, 1000)
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