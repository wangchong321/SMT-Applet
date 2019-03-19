let app = getApp();
const WXAPI = require('../../../wxapi/wxapi')


Page({

  /**
   * 页面的初始数据
   */
  data: {
    accessNumberList: {
      totol: '',
      primary_store: '',
      store2: '',
      store3: '',
    }, 
    customers:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCustomers();
    this.getScancount();
  },

  /**
     * 生命周期函数--监听页面显示
     */
  onShow: function () {
    this.getScancount();
  },

  getCustomers:function () {
    let that = this;
    WXAPI.customers().then(res => {
      if(res.status === 'true'){
        let payment_list = res.data.payment_list;
        if(payment_list.length > 0){
          for (let customer of payment_list){
            customer.time_remaining = that.mathTime(customer.time_remaining);
          }
          that.setData({
            customers: payment_list,
          })
        }
      }
    })
  },

  getScancount: function () {
    wx.showLoading({
      title: '加载中',
    })

    let that = this;
    WXAPI.scancount().then(res =>{
      wx.hideLoading();

      if(res.status === 'true'){
        let tipper_pos_list = res.data.tipper_pos_list;
        let tmp_totol = 0;
        let primary_count = 0;
        for (let pos of tipper_pos_list){
          tmp_totol += pos.count;
          if (pos.primary_flag === 1){
            primary_count = pos.count;
          }
        }
        let tmpAccessNumberList = {};
        console.log(tmpAccessNumberList);
        tmpAccessNumberList.totol = tmp_totol;
        tmpAccessNumberList.primary_store = primary_count;
        tmpAccessNumberList.store2 = tipper_pos_list[1].count;
        tmpAccessNumberList.store3 = tipper_pos_list[2].count;
        console.log(tmpAccessNumberList);
        that.setData({
          accessNumberList: tmpAccessNumberList
        }).catch(res => {
          wx.hideLoading();
        })
      }
    })
  },

  mathTime: function (time_remaining) {
    var hours = parseInt((time_remaining % (60 * 60 * 24)) / (60 * 60));
    var minutes = parseInt((time_remaining % ( 60 * 60)) / 60);
    var seconds = (time_remaining % 60);
    return hours + " 小时 " + minutes + " 分钟 " + seconds + " 秒 ";
  }

})
