// components/network-err-modal/network-err-modal.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    show: {
      type: Boolean,
      value: false,
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    dataNetworkErr: {
      show: true,
      height: '430rpx',
      imageUrlNumber: '0',
      showLeftBt: false,
      showRightBt: true,
      leftText: '',
      rightText: '知道了',
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    rightClickEvent: function() {
      this.setData({ show: false });
    },
  }
})
