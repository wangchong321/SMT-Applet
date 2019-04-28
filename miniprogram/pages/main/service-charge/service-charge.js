const WXAPI = require('../../../wxapi/wxapi');
let app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    serviceChargeList: [],
    paymentSumAmount: '0.00',
    paymentStatus: ['付费成功', '付费失败', '付费中'],
    pageNumber: 1,
  },

  /**
   * 从服务器获得用户获得服务费的数据和状态
   */
  getServiceChargeFromServer : function () {
    let that = this;
    wx.showLoading({
      title: '加载中',
    })
    let data = {
      'page' : that.data.pageNumber,
      'page_size' : 10
    }
    WXAPI.paymentList().then(res => {
      console.log(res);
      if (res.status === 'true') {
        let temp_payment_list = res.data.payment_list;
        if (temp_payment_list.length > 0) {
          that.data.pageNumber++;
          let matchStatusToDisplay = temp => that.data.paymentStatus[temp - 1];
          for (let record of temp_payment_list) {
            record.payment_status = matchStatusToDisplay(record.payment_status);
          }
          temp_payment_list.push.apply(temp_payment_list, that.data.serviceChargeList);
          that.setData({
            serviceChargeList: temp_payment_list,
          });
          wx.hideLoading();
        }
      } else {
        //显示异常弹窗
        that.setData({
          serviceChargeList: null,
        });
        wx.hideLoading();
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
    let that = this;
    that.getPaymentSumFromServer();
    that.getServiceChargeFromServer();
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
  },
  
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh')
    let that = this;
    that.getServiceChargeFromServer();
    wx.stopPullDownRefresh();
  },

  onReachBottom: function () {
    console.log('onReachBottom')
    let that = this;
    that.getServiceChargeFromServer();
  },
  
})