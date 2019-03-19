const WXAPI = require('../../../wxapi/wxapi');
let app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    serviceChargeList: [{
      "amount": '20.00',
      "payment_status": '付费成功',
      "id": 1,
      "customer_name": "张三",
      "payment_time": '2018-12-13 15:07',
      "pos_name": "我是地址我是地址我是地址"
    }],
    paymentSumAmount: '0.00',
    paymentStatus: ['付费成功', '付费失败', '付费中'],
  },

  /**
   * 从服务器获得用户获得服务费的数据和状态
   */
  getServiceChargeFromServer : function () {
    let that = this;
    WXAPI.paymentList().then(res => {
      console.log(res);
      if (res.status === 'true') {
        console.log(res.data);
        let temp_payment_list = res.data.payment_list;
        if (temp_payment_list.length > 0) {
          let matchStatusToDisplay = temp => that.data.paymentStatus[temp - 0];
          for (let record of temp_payment_list) {
            record.payment_status = matchStatusToDisplay(record.payment_status);
          }
          that.setData({
            serviceChargeList: temp_payment_list
          });
        }
      } else {
        //显示异常弹窗
      }
    })
  },

  /**
   * 从服务器获得用户获得的居间服务费总额
   */
  getPaymentSumFromServer : function () {
    let that = this;
    WXAPI.paymentSum().then(res => {
      if (res.status === 'true') {
        let temp_amout = res.data.amount.toFixed(2);
        that.setData({
          paymentSumAmount: temp_amout
        });
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getPaymentSumFromServer();
    this.getServiceChargeFromServer();
  },

  //测试modal弹窗使用
  showModalTest: function () {
    wx.navigateTo({
      url: '../../sign-up/warning/warnings',
    })
  },

  showTipHistory: function() {
    wx.navigateTo({
      url: 'tip-history/tip-history',
    })
  }
  
})