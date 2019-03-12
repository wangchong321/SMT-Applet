// pages/main/service-charge/tip-history/tip-history.js
const WXAPI = require('../../../../wxapi/wxapi')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    historyData: [{payment_month:'2018年8月',amount:'800.00'}]
  },

  getHistoryFromServer: function() {
    let that = this;
    WXAPI.tipperPaymentHistory().then(res => {
      if (res.status === 'true') {
        console.log(res.data)
        let tList = res.data.payment_history_list;
        for(let item of tList){
          item.payment_month = item.payment_month.substring(0, 4) + '年' + item.payment_month.substring(5, 7) + '月';
          item.amount = parseFloat(item.amount).toFixed(2);
        }
        that.setData({
          historyData : tList
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getHistoryFromServer()
  }
})