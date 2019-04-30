//index.js
//获取应用实例
const app = getApp()
var upperInt = 0;
var lowerInt = 0;

Page({
  /**
   * 页面的初始数据
   */
  data: {
    scrollTop: '100',
    dataSource: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    refreshing: true,
    nomore: false,
    isHideBottomView: false
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {

  },
  _upper(e) {
    // console.log(e);
    // upperInt ++;
    // wx.showToast({
    //   title: '_upper' + upperInt,
    // })
  },

  _onPullDownRefresh(e) {
    console.log('实验_onPullDownRefresh');
  },

  _onLoadmore() {
    console.log('实验_onLoadmore');
  },

  _onScroll(e) {
    // console.log('实验_onScroll');
  },

  _lower(e) {
    // lowerInt ++
    // wx.showToast({
    //   title: '_lower' + lowerInt,
    // })
  },


  _scroll(e) {
    console.log(e.detail.scrollTop);
    wx.showToast({
      title: 'scrollTop = ' + e.detail.scrollTop,
    })

    wx.createSelectorQuery().select('.main-scroll-view').fields({
      dataset: true,
      size: true,
      scrollOffset: true,
      properties: ['scrollX', 'scrollY'],
      computedStyle: ['margin', 'backgroundColor'],
      context: true,
    }, function (res) {
      console.log('点的dataset=' + res.dataset);
      console.log('节点的水平滚动位置=' + res.scrollLeft);
      console.log('节点的竖直滚动位置=' + res.scrollTop);
      console.log('节点的高度=' + res.height);
      console.log('res.margin=' + res.margin);
      console.log('res.backgroundColor' + res.backgroundColor);
      console.log('节点对应的Context对象=' + res.context);
    }).exec()
  },
  _onTouchEnd(e) {
    // lowerInt = 0;
    // upperInt = 0;
    // wx.showToast({
    //   title: '_onTouchEnd',
    // })
  }
})
