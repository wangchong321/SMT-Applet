const OCR_URL = 'https://dm-51.data.aliyun.com/rest/160601/ocr/ocr_idcard.json'

const request = (url, method, data) => {
  let _url = url;
  return new Promise((resolve, reject) => {
    wx.request({
      url: _url,
      data: data,
      header: {
        "Authorization": "APPCODE 8203b67bae954fa68ab249744beebbf5"
      },
      method: method,
      dataType: 'json',
      responseType: 'text',
      success: function (request) {
        resolve(request)
      },
      fail: function (error) {
        reject(error)
      },
      complete: function (complete) {
      },
    })
  })
}

module.exports = {
  request,
  // 客户状态->客户列表
  ocrRequest: (image, configure) => {
    return request(OCR_URL, 'POST', {
      "image": image,
      "configure": configure
    })
  }
}