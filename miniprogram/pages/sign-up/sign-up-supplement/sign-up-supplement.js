var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    buttonTittle: "获取验证码",
    verificationCodeButtonStatus: true, // 验证码按钮状态
    numberButtonStatus: false, // 手机号状态
    isClick: false, // 用来标识按钮是否已经点击过
    signUpButtonStatus: true, // 注册按钮状态
    name: '',
    iDCard: '',
    tipInfo: {// 标记是否隐藏tip
      nameTip: true, 
      numberTip: true, 
      smsTip: true,
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    if (!app.globalData.userInfoObj) {
      app.globalData.userInfoObj = new Object();
    }

    app.globalData.userInfoObj.name = app.globalData.faceData.name;
    app.globalData.userInfoObj.iDCard = app.globalData.faceData.num;
    this.setData({
      name: app.globalData.userInfoObj.name,
      iDCard: app.globalData.userInfoObj.iDCard,
    })
  },

  onSendVerificationCode: function(e) {
    if (this.isClick) {
      return;
    }
    this.isClick = true;

    let that = this;
    var times = 60
    let i = setInterval(function() {
      times--;
      if (times <= 0) {
        that.isClick = false;
        that.setData({
          verificationCodeButtonStatus: false,
          buttonTittle: "获取验证码",
          numberButtonStatus: false,
        })
        clearInterval(i);
      } else {
        that.setData({
          verificationCodeButtonStatus: true,
          buttonTittle: times + "秒重新发送",
          numberButtonStatus: true,
        })
      }
    }, 1000)
  },
  // 手机号
  inputNumber: function(res) {
    if (/^\d+$/.test(res.detail.value) || res.detail.value === ""){
      this.data.tipInfo.numberTip = true;
    }else{
      this.data.tipInfo.numberTip = false;
    }

    this.setData({
      tipInfo: this.data.tipInfo,
      verificationCodeButtonStatus: false,
    })

    app.globalData.userInfoObj.number = res.detail.value;
    this.setupSignUpButtonStatus();
  },
  // 姓名
  inputName: function(res) {
    if (/^(-?\d+)(\.\d+)?$/.test(res.detail.value)) {
      this.data.tipInfo.nameTip = false;
    }else{
      this.data.tipInfo.nameTip = true;
    }
    this.setData({
      tipInfo: this.data.tipInfo,
    })
    app.globalData.userInfoObj.name = res.detail.value;
    this.setupSignUpButtonStatus();
  },
  inputVerificationCode: function(res) {
    app.globalData.userInfoObj.verificationCode = res.detail.value;
    this.setupSignUpButtonStatus();
  },
  inputIDCard: function(res) {
    app.globalData.userInfoObj.iDCard = res.detail.value;
    this.setupSignUpButtonStatus();
  },
  inputAilPay: function(res) {
    app.globalData.userInfoObj.aliPayNickname = res.detail.value;
    this.setupSignUpButtonStatus();
  },
  onProtocol: function() {
    wx.showModal({
      title: '捷信推客居间服务协议',
      content: "本协议是由捷信消费金融有限公司（以下简称“捷信”）与您（以下或称“推客”）就注册、使用本捷信推客系统（以下简称“本系统”）为捷信提供居间服务所订立的有效合约。本协议将有助于您了解本居间服务的内容及您提供本服务的权利义务，请您仔细阅读（特别是以粗体标注的内容）。如果您对本协议的条款有任何疑问，请通过捷信地区销售经理进行询问，捷信将向您解释条款内容。您同意，通过网络页面点击确认或以其他方式选择接受本协议的，即表示您已充分理解、接受本协议的全部条款、并与捷信签署本协议。\n"+
            "为保证您提供居间服务的质量，捷信有权利制定、发布捷信推客居间服务规则（以下简称“服务规则”），包括但不限于推客居间服务费机制、捷信推客行为规范、操作流程等。服务规则构成本协议不可分割的一部分，您应当一并遵守。\n"+
      "您了解并同意，捷信有权根据您的居间服务情况决定向您支付居间服务费，并有权使用您在注册本系统时登录的支付宝账号作为您居间服务费（如有）收款账号，且捷信有权调整贷款居间服务的内容及居间服务费的发放方式。\n"+
      "您在提供居间服务时，应当遵守法律法规、公序良俗、社会公德及服务规则等规定，不得侵犯捷信及包括客户、商家在内的任何第三方的合法权益，如：诱导他人消费并办理捷信贷款或建议他/她在办理捷信贷款后取消贷款或提前还款等违反居间服务规则的行为。为确保您提供的居间服务质量合格，您接受捷信的相关风控考核标准及捷信对您服务考核的结果，且捷信有权根据该考核结果决定是否发放或调整发放您的服务费（如有），或取消您的推客资格。具体内容以捷信通过适当方式向您发送的通知为准。\n"+
      "您保证对您在居间服务过程中所获知的客户联系方式等客户信息（如有）严格保密，不得向任何第三方披露。若您发现客户有套现或欺诈嫌疑的情况，您应当终止居间服务并立刻向捷信销售人员反馈。\n"+
      "推客居间服务费机制为捷信单方政策，捷信可以不时自主决定终止、暂停或修改该机制，也不因此而承担按本协议向您发放居间服务费的合同义务。"+
      "您理解并确认，捷信与您并非劳动关系，捷信有权不向您支付任何费用和酬劳。\n"+
            "与本协议相关的一切事宜，均适用中国人民共和国大陆地区法律。因捷信与您就本协议的签订、履行或解释发生争议，双方应努力友好协商解决。如协商不成，捷信和您均同意由本协议签订地（天津市和平区）有管辖权的人民法院解决。",
      showCancel: false,
      confirmText: '同意',
      confirmColor: '#4A4A4A',
    })
  },

  onSignUp: function() {
    wx.navigateTo({
      url: '../smt-login/smt-login',
    })
  },
  setupSignUpButtonStatus: function() {
    if (app.globalData.userInfoObj.number && app.globalData.userInfoObj.name && app.globalData.userInfoObj.verificationCode && app.globalData.userInfoObj.iDCard && app.globalData.userInfoObj.aliPayNickname && this.data.tipInfo.nameTip === true && this.data.tipInfo.numberTip === true && this.data.tipInfo.smsTip === true) {
      this.setData({
        signUpButtonStatus: false,
      })
    } else {
      this.setData({
        signUpButtonStatus: true,
      })
    }
  },
  
})


  
