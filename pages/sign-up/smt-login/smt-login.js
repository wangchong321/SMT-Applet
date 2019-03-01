// pages/sign-up/smt-login/smt-login.js
//本页为Sale Mgmt Tool的工作人员登录，协助推客
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
    ispassword: false //是否密文显示 true为密文， false为明文。
  },
  /**
   *获取id区域输入值
   */
  idFocus(e) {
    let that = this;
    console.log(e.detail.value);
    let inputValue = e.detail.value;
    that.setData({
      idValue: inputValue,
    })
  },
  /**
   *获取验证码区域输入值
   */
  codeFocus(e) {
    let that = this;
    console.log(e.detail.value);
    let inputValue = e.detail.value;
    that.setData({
      codeValue: inputValue,
    })
  },
  /**
   *点击ID输入区域，获取focus
   */
  tapID() {
    let that = this;
    that.setData({
      isIdFocus: true,
      isCodeFocus: false,
    })
  },
  /**
   *点击二维码区域，获取focus
   */
  tapCode() {
    let that = this;
    that.setData({
      isCodeFocus: true,
      isIdFocus: false,
    })
  },

  /**
   *提交输入信息，如果成功，跳转到核查信息界面
   */
  formSubmit(e) {
    //TODO
    let that = this;
    that.setData({
      idValue: e.detail.value.homerid,
      codeValue: e.detail.value.messagecode
    })
    wx.navigateTo({
      url: '/pages/check-user-info/check-user-info?' + 'id=' + that.data.idValue + '&messagecode=' + that.data.codeValue
    })
    console.log("ID:" + e.detail.value.homerid + ",Code:" + e.detail.value.messagecode);
  },
  /**
  *发送验证码短信给输入ID的用户
  */
  sendMessageCode(e) {
    //TODO
    console.log("发送验证码短信给用户:");
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