const API_BASE_URL = 'https://mobile-ms.uat.homecreditcfc.cn/mock/5c05d3ccf8c692001c64fb6c/SMT'


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
    return request('/api/tipper/payment/notaccepted','post',data)
  },
  // 客户状态->访问数量
  scancount:(data) => {
    return request('/api/tipper/payment/scancount', 'post', data)
  },
  // 基本信息
  baseInfo:(data) => {
    return request('/api/tipper/tipper-info', 'post', data)
  },
  // 居间服务费->总额
  paymentSum: (data) => {
    return request('/api/tipper/payment/paymentsum', 'post', data)
  },
  // 居间服务费->详情列表
  paymentList: (data) => {
    return request('/api/tipper/payment/paymentlist', 'post', data)
  },
  //门店->可分配的门店总数据
  getSelectableStores: (data) => {
    return request('/api/tipper-dsm/get-pos-view-data','post',data)
  },
  //上传注册信息->选择完门店后，把数据上传
  uploadTipperInfo: (data) => {
    return request('/api/tipper/update-tipper-ocr', 'post', data)
  },
  //验证Homer id->输入Homer id后第一次验证
  tipperRegisterValidateHid: (data) => {
    return request('/api/register/validate-hid','post',data)
  },
  //发送验证码->点击发送按钮，发送短信验证码
  tipperRegisterSendVcode: (data) => {
    return request('/api/register/send-vcode', 'post', data)
  },
  //验证账号->验证homer id和sms_code后登陆
  tipperRegisterValidateVcode: (data) => {
    return request('/api/register/validate-vcode', 'post', data)
  },
  //上传tipper信息注册登陆
  tipperRegisterUpateInfo: (data) => {
    return request('/api/tipper/register', 'post', data)
  }
}
