var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    buttonTittle: "获取验证码",
    verificationCodeButtonStatus: true,  // 验证码按钮状态
    numberButtonStatus: false, // 手机号状态
    isClick: false, // 用来标识按钮是否已经点击过
    signUpButtonStatus: true, // 注册按钮状态
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  onSendVerificationCode: function (e) {
    console.log(this.isClick);
    if (this.isClick) {
      return;
    }
    this.isClick = true;
    
    let that = this;
    var times = 60
    let i = setInterval(function () {
      times--;
      console.log(times);
      if (times <= 0) {
        that.isClick = false;
        that.setData({
          verificationCodeButtonStatus: false,
          buttonTittle: "获取验证码",
          numberButtonStatus : false,
        })
        clearInterval(i);
      } else {
        that.setData({
          verificationCodeButtonStatus: true,
          buttonTittle: times + "秒重新发送",
          numberButtonStatus : true,
        })
      }
    }, 1000)
  },

  inputNumber: function (res) {
    this.setData({
      verificationCodeButtonStatus:false
    });
    app.globalData.userInfoObj.number = res.detail.value;
    console.log(app.globalData);
    
    this.setupSignUpButtonStatus();
  },
  inputName: function (res) {
    app.globalData.userInfoObj.name = res.detail.value;
    console.log(app.globalData);
    this.setupSignUpButtonStatus();
  },
  inputVerificationCode: function (res){
    app.globalData.userInfoObj.verificationCode = res.detail.value;
    console.log(app.globalData);
    this.setupSignUpButtonStatus();
  },
  inputIDCard: function (res){
    app.globalData.userInfoObj.iDCard = res.detail.value;
    console.log(app.globalData);
    this.setupSignUpButtonStatus();
  },
  inputAilPay: function (res) {
    app.globalData.userInfoObj.aliPayNickname = res.detail.value;
    console.log(app.globalData);
    this.setupSignUpButtonStatus();
  },
  onProtocol: function () {
    console.log("protocol");
    wx.showModal({
      title: '捷信推客居间服务协议',
      content: '这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容',
      showCancel:false,
      confirmText:'同意',
      confirmColor: '#4A4A4A',
    })
  },

  onSignUp: function (){
    wx.navigateTo({
      url: '../smt-login/smt-login',
    })
  },
  setupSignUpButtonStatus: function (){
    if (app.globalData.userInfoObj.number && app.globalData.userInfoObj.name && app.globalData.userInfoObj.verificationCode && app.globalData.userInfoObj.iDCard && app.globalData.userInfoObj.aliPayNickname) {
      this.setData({
        signUpButtonStatus: false,
      })
    }else{
      this.setData({
        signUpButtonStatus: true,
      })
    }
  }
})