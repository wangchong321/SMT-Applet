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
}
