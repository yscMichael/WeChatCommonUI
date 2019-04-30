Component({
  /**
   * 在组件定义时的选项中启用多slot支持
   */
  options: {
    multipleSlots: true
  },

  /**
   * 组件的属性列表
   */
  properties:{
    pullText: {
      type: String,
      value: '下拉可以刷新',//1
    },
    releaseText: {
      type: String,
      value: '松开立即刷新',//2
    },
    loadingText: {
      type: String,
      value: '正在刷新数据中',//3
    },
    finishText: {
      type: String,
      value: '刷新完成',//4
    },
    loadmoreText: {
      type: String,
      value: '正在加载更多数据',
    },
    isHiddenBottom:{
      type: Boolean,//是否隐藏底部加载圈
      value: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    pullDownStatus: 3
  },

  /**
   * 组件的方法列表
   */
  methods:{
    //滚动事件
    _onScroll: function (e) {
      //记录当前的滚动值
      // this.data.scrollTop = e.detail.scrollTop;
      // wx.showToast({
      //   title: '数值=' + e.detail.scrollTop,
      // })
    },

    //加载更多
    _onLoadmore(e) {
      wx.createSelectorQuery().select('#body-scroll-view').fields({
      dataset: true,
      size: true,
      scrollOffset: true,
      properties: ['scrollX', 'scrollY'],
      computedStyle: ['margin', 'backgroundColor'],
      context: true,
    }, function (res) {
      console.log('节点的竖直滚动位置=' + res.scrollTop);
      wx.showToast({
        title: 'ww' + res.scrollTop ,
      })
    }).exec();


      // if(this.data.isHiddenBottom)
      // {//当前是隐藏状态
      //   //改为不隐藏状态
      //   this.data.isHiddenBottom = false;
      //   //移动scrollView
      //   this.data.scrollTop += 200;
      //   this.setData({
      //     isHiddenBottom: this.data.isHiddenBottom,
      //     scrollTop: this.data.scrollTop
      //   });
      //   wx.showToast({
      //     title: this.data.scrollTop,
      //   })

      //   //加载完成、2s后消失弹出框
      //   //scrollTop减去50(向上滑动，放置无法继续上拉)
      //   var that = this;
      //   setTimeout(function () {
      //     that.data.isHiddenBottom = true;
      //     that.data.scrollTop -= 50;
      //     that.setData({
      //       isHiddenBottom: that.data.isHiddenBottom,
      //       scrollTop: that.data.scrollTop
      //     })
      //   }, 2000);
      // }
    }
  }
})