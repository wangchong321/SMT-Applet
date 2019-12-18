const API_BASE_URL = 'https://mobile-ms.uat.homecreditcfc.cn/mock/5caab2b66696420027621bfc/TAPP'
const POST = 'post'

const request = (url, method, data) => {
  let _url = API_BASE_URL + url;

  return new Promise((resolve, reject) => {
    wx.request({
      url: _url,
      data: data,
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: method,
      dataType: 'json',
      responseType: 'text',
      success(request){
        resolve(request.data)
      },
      fail(error){
        // 无网络判断
        wx.getNetworkType({
          success: function (res) {
            if (res.networkType === "none") {
              wx.showToast({
                title: '当前无网络',
                icon: 'none',
              })
            }
          },
        })
        reject(error)
      },
      complete(complete) {
        
      },
    })
  })
}

module.exports = {
  request,
  // 客户状态->客户列表
  customers: (data) => {
    return request('/api/tipper/payment/notaccepted', POST,data)
  },
  // 客户状态->访问数量
  scancount:(data) => {
    return request('/api/tipper/payment/scancount', POST, data)
  },
  // 基本信息
  baseInfo:(data) => {
    return request('/api/tipper/tipper-info', POST, data)
  },
  // 居间服务费->总额
  paymentSum: (data) => {
    return request('/api/tipper/payment/paymentsum', POST, data)
  },
  // 居间服务费->详情列表
  paymentList: (data) => {
    return request('/api/tipper/payment/paymentlist', POST, data)
  },
  //门店->可分配的门店总数据
  getSelectableStores: (data) => {
    return request('/api/tipper-dsm/get-pos-view-data', POST,data)
  },
  //上传注册信息->选择完门店后，把数据上传
  uploadTipperInfo: (data) => {
    return request('/api/tipper/update-tipper-ocr', POST, data)
  },
  //验证Homer id->输入Homer id后第一次验证
  tipperRegisterValidateHid: (data) => {
    return request('/api/register/validate-hid', POST,data)
  },
  //发送验证码->点击发送按钮，发送短信验证码
  tipperRegisterSendVcode: (data) => {
    return request('/api/register/send-vcode-tipper-by-mobile', POST, data)
  },
  //验证账号->验证homer id和sms_code后登陆
  tipperRegisterValidateVcode: (data) => {
    return request('/api/register/validate-vcode', POST, data)
  },
  //上传tipper信息注册登陆
  tipperRegisterUpateInfo: (data) => {
    return request('/api/tipper/register', POST, data)
  },
  //上传tipper信息注册登陆
  tipperPaymentHistory: (data) => {
    return request('/api/tipper/payment/paymenthistory', POST, data)
  }
}
