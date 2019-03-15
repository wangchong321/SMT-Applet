const WXAPI = require('../../../wxapi/wxapi')
let app = getApp()

Page({

  data: {
    idLength: 6, //id输入框个数
    codeLength: 4, //code输入框个数
    isIdFocus: true, //焦点 
    isCodeFocus: false,
    idValue: "", //输入的内容 
    codeValue: "",
    buttonTittle: '发送', //发送验证码按钮的文本
    isSendClicked: false, //发送验证码按钮是否点击
    codeAreaStatus: false, //验证码区域的状态
    loginButtonStatus: false, //登录按钮的状态
    sendCodeButtonStatus: false, //发送按钮是否可点击状态
  },
  /**
   *获取id区域输入值，长度>6才可以输入验证码区
   */
  idFocus: function(e) {
    let that = this;
    let inputValue = e.detail.value;
    that.setData({
      idValue: inputValue,
    })
    if (inputValue.length >= 6) {
      wx.setStorage({
        key: 'dsm_homer_id',
        data: that.data.idValue
      })
      let data = {
        'homer_id': that.data.idValue
      }
      WXAPI.tipperRegisterValidateHid(data).then(res => {
        if (res.status === 'true') {
          console.log(res.data);
          that.setData({
            codeAreaStatus: true,
            sendCodeButtonStatus: true,
          })
        }
      })
    } else {
      that.setData({
        loginButtonStatus: false,
      })
    }
  },

  /**
   *获取验证码区域输入值，长度>4才可以点击登录按钮
   */
  codeFocus: function(e) {
    let that = this;
    let inputValue = e.detail.value;
    console.log(inputValue);
    that.setData({
      codeValue: inputValue,
      loginButtonStatus: (inputValue.length >= 4 ? true : false)
    })
  },
  /**
   *点击ID输入区域，获取focus
   */
  tapID: function() {
    let that = this;
    that.setData({
      isIdFocus: true,
      isCodeFocus: false,
    })
  },
  /**
   *点击验证码区域，获取focus
   */
  tapCode: function() {
    let that = this;
    that.setData({
      isCodeFocus: true,
      isIdFocus: false,
    })
  },

  /**
   *提交输入信息，如果成功，跳转到核查信息界面
   */
  formSubmit: function(e) {
    let that = this;
    that.setData({
      idValue: e.detail.value.homerid,
      codeValue: e.detail.value.messagecode
    })
    //向easy mock请求用户输入的id和验证码是否正确，正确才可以跳转下一页，否则提示
    //mock反馈信息里目前都是成功的
    let data = {
      'homer_id': e.detail.value.homerid,
      'sms_code': e.detail.value.messagecode,
    }
    WXAPI.tipperRegisterValidateVcode(data).then(res => {
      if (res.status === 'true') {
        wx.navigateTo({
          url: '/pages/sign-up/check-user-info/check-user-info?' + 'id=' + that.data.idValue + '&messagecode=' + that.data.codeValue
        })
      }
    })
  },

  /**
   *发送验证码短信给输入ID的用户手机，60s后可重发
   */
  sendMessageCode: function(e) {
    console.log("发送验证码短信给用户:");
    let that = this;
    if (that.isSendClicked) {
      return;
    }
    that.isSendClicked = true;
    let data = {
      'homer_id': that.data.idValue
    }
    WXAPI.tipperRegisterSendVcode(data).then(res => {
      if (res.status === 'true') {
        let times = 60;
        let i = setInterval(function () {
          times--;
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
      }
    })
  },
  
})