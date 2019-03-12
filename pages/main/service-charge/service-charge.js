const WXAPI = require('../../../wxapi/wxapi');
let app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    customerNameTitle: '客户姓氏',
    serviceChargeAmountTitle: '服务费金额',
    storeNameTitle: '门店名称',
    payTimeTitle: '付费时间',
    chargeStatusTitle: '服务费收费状态',
    serviceChargeList: [],
    paymentSumAmount: ''
  },

  /**
   * 从服务器获得用户获得服务费的数据和状态
   */
  getServiceChargeFromServer : function() {
    let that = this;
    WXAPI.paymentList().then(res => {
      if (res.status === 'true') {
        console.log(res.data);
        let temp_payment_list = res.data.payment_list;
        if (temp_payment_list.length > 0) {
          for (let record of temp_payment_list) {
            record.payment_status = that.matchStatusToDisplay(record.payment_status);
          }
          that.setData({
            serviceChargeList: temp_payment_list
          })
        }
      }
    })
  },

  /**
   * 从服务器获得用户获得的居间服务费总额
   */
  getPaymentSumFromServer : function() {
    let that = this;
    WXAPI.paymentSum().then(res => {
      if (res.status === 'true') {
        let temp_amout = res.data.amount.toFixed(2);
        that.setData({
          paymentSumAmount: temp_amout
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getPaymentSumFromServer()
    this.getServiceChargeFromServer()
  },

  //TODO 需优化
  matchStatusToDisplay:function (status) {
    switch(status) {
      case '1':return '付费成功';
      case '2': return '付费失败';
      case '3': return '付费中'
    }
  },
  //测试modal使用
  showModalTest: function (){
    wx.navigateTo({
      url: '../../sign-up/warning/warnings',
    })
  }
})