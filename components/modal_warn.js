// components/modal_warn.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    show: {
      type: Boolean,
      value: false
    },
    height: {
      type: String,
      value: '50%'
    },
    imageUrlNumber: {
      type: String,
      value: '0'
    },
    showLeftBt: {
      type: Boolean,
      value: true
    },
    showRightBt: {
      type: Boolean,
      value: true
    },
    leftText: {
      type: String,
      value: '取消'
    },
    rightText: {
      type: String,
      value: '确定'
    },
  }, 

  /**
   * 组件的初始数据
   */
  data: {
    imageUrl: ['/images/modal/alert.png', '/images/modal/confirm.png','/images/modal/tip.png']
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickMask() {
      this.setData({show: false})
    },

    leftClick() {
      this.setData({ show: false })
      this.triggerEvent('cancel')
    },

    rightClick() {
      this.setData({ show: false })
      this.triggerEvent('confirm')
    }
  }
})
