// pages/sign-up/warning/warings.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataTipOverLimit: {
      show: false,
      height: '430rpx',
      imageUrlNumber: '0',
      showLeftBt: false,
      showRightBt: true,
      leftText: '',
      rightText: '好的',
    },
    dataReceiveTip: {
      show: false,
      height: '510rpx',
      imageUrlNumber: '2',
      showLeftBt: false,
      showRightBt: true,
      leftText: '',
      rightText: '好的',
    },
    dataFailTip: {
      show: false,
      height: '510rpx',
      imageUrlNumber: '0',
      showLeftBt: false,
      showRightBt: true,
      leftText: '',
      rightText: '好的',
    },
    dataAliAccount: {
      show: false,
      height: '380rpx',
      imageUrlNumber: '0',
      showLeftBt: true,
      showRightBt: true,
      leftText: '拒绝',
      rightText: '允许',
    },
    dataTipperReject: {
      show: false,
      height: '380rpx',
      imageUrlNumber: '0',
      showLeftBt: false,
      showRightBt: true,
      leftText: '',
      rightText: '返回',
    },
    dataTipperSuccess: {
      show: false,
      height: '380rpx',
      imageUrlNumber: '1',
      showLeftBt: false,
      showRightBt: true,
      leftText: '',
      rightText: '捷信推客登录',
    },
    dataLogoutRemind: {
      show: false,
      height: '430rpx',
      imageUrlNumber: '0',
      showLeftBt: false,
      showRightBt: true,
      leftText: '',
      rightText: '好的',
    },
    dataLogoutTipper: {
      show: false,
      height: '550rpx',
      imageUrlNumber: '0',
      showLeftBt: true,
      showRightBt: true,
      leftText: '确认',
      rightText: '返回',
    },
    msgcodeTip: '如需注销，请输入验证码！',
    codeLength: 4, //code输入框个数
    isCodeFocus: true,
    idCodeWrong: false,
    codeValue: "",
    buttonTittle: '发送验证码', //发送验证码按钮的文本
    isSendClicked: false, //发送验证码按钮是否点击
    sendCodeButtonStatus: true, //发送按钮是否可点击状态
  },

  showTipOverLimitClicked :function () {
    let that = this;
    let temp = that.data.dataTipOverLimit;
    temp.show = true;
    that.setData({
      dataTipOverLimit: temp
    });
  },

  showReceiveTipClicked: function () {
    let that = this;
    let temp = that.data.dataReceiveTip;
    temp.show = true;
    that.setData({
      dataReceiveTip: temp
    });
  },

  showFailTipClicked: function () {
    let that = this;
    let temp = that.data.dataFailTip;
    temp.show = true;
    that.setData({
      dataFailTip: temp
    });
  },

  showLoginAliAccountConfirm: function () {
    let that = this;
    let temp = that.data.dataAliAccount;
    temp.show = true;
    that.setData({
      dataAliAccount: temp
    });
  },

  showRejectToBeTipper: function () {
    let that = this;
    let temp = that.data.dataTipperReject;
    temp.show = true;
    that.setData({
      dataTipperReject: temp
    });
  }, 

  showSuccessToBeATipper: function() {
    let that = this;
    let temp = that.data.dataTipperSuccess;
    temp.show = true;
    that.setData({
      dataTipperSuccess: temp
    });
  },

  showInpputCodeToLogout: function() {
    let that = this;
    let temp = that.data.dataLogoutTipper;
    temp.show = true;
    that.setData({
      dataLogoutTipper: temp
    });
  },

  loginTipper: function() {
    wx.switchTab({
      url: "/pages/main/basic-information/basic-information",
    });
  },

  showLogoutRemind: function() {
    let that = this;
    let temp = that.data.dataLogoutRemind;
    temp.show = true;
    that.setData({
      dataLogoutRemind: temp
    });
  },

  /*输入验证码注销部分*/
  codeFocus: function (e) {
    let that = this;
    let inputValue = e.detail.value;
    that.setData({
      codeValue: inputValue,
    });
  },

  tapCode: function () {
    let that = this;
    that.setData({
      isCodeFocus: true
    });
  },

  sendMessageCode: function (e) {
    console.log("tap send code button.");
    let that = this;
    if (that.isSendClicked) {
      return;
    }
    that.isSendClicked = true;
    WXAPI.tipperRegisterSendVcode(data).then(res => {
      if (res.status === 'true') {
        console.log(res.data);
        let times = 60
        let i = setInterval(function () {
          times--;
          if (times <= 0) {
            that.isSendClicked = false;
            that.setData({
              sendCodeButtonStatus: true,
              buttonTittle: "发送验证码"
            })
            clearInterval(i);
          } else {
            that.setData({
              sendCodeButtonStatus: false,
              buttonTittle: `${times}秒重新发送`
            })
          }
        }, 1000)
      }
    })
  },

})