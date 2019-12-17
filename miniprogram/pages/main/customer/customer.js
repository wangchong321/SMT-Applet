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
    page:1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCustomers(this.data.page);
  },
  /**
     * 生命周期函数--监听页面显示
     */
  onShow: function () {
    this.getScancount();
  },
  // 上拉加载更多
  onReachBottom() {
    this.getCustomers(this.page);
  },
  // 下拉刷新
  onPullDownRefresh: function () {
    this.data.page = 1;
    this.getCustomers(this.data.page);
  },
  getCustomers:function (page) {
    wx.showLoading({
      title: '加载中',
    })
    let that = this;
    let data = {
      'tipper_id': "123",
      'page': page,
      'page_size': 20,
    }
    WXAPI.customers().then(res => {
      wx.hideLoading();
      
      if(res.status === 'true'){
        if (page === 1) {
          that.data.customers = [];
          wx.stopPullDownRefresh();
        }
        that.data.page++;
        let payment_list = res.data.payment_list;
        if(payment_list.length > 0){
          for (let customer of payment_list){
            customer.time_remaining = that.mathTime(customer.time_remaining);
          }
          that.setData({
            customers: that.data.customers.concat(payment_list),
          })
        }
      }
    }).catch(res => {
      wx.hideLoading();
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
        tmpAccessNumberList.totol = tmp_totol;
        tmpAccessNumberList.primary_store = primary_count;
        tmpAccessNumberList.store2 = tipper_pos_list[1].count;
        tmpAccessNumberList.store3 = tipper_pos_list[2].count;
        that.setData({
          accessNumberList: tmpAccessNumberList
        })
      }
    }).catch(res => {
      wx.hideLoading();
    })
  },

  mathTime: function (time_remaining) {
    var hours = parseInt((time_remaining % (60 * 60 * 24)) / (60 * 60));
    var minutes = parseInt((time_remaining % ( 60 * 60)) / 60);
    var seconds = (time_remaining % 60);
    return hours + " 小时 " + minutes + " 分钟 " + seconds + " 秒 ";
  }

})
