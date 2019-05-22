// pages/refreshScrollView/refreshScrollView.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataSource:[
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 滚动
   */
  scroll:function(e){
    console.log('滚动-----');
    console.log(e);
    var deltaY = e.detail.deltaY;
    console.log(deltaY);
  },

  /**
   * 滑动到底部
   */
  lower:function(e){
    console.log('滑动到底部-----');
    console.log(e);
  },

  /**
   * 滑动到顶部
   */
  upper:function(e){
    console.log('滑动到顶部-----');
    console.log(e);
  },

  /**
   * 开始滑动
   */
  start:function(e){
    console.log('开始滑动-----');
    console.log(e);
  },

  /**
   * 停止滑动
   */
  end:function(e){
    console.log('停止滑动-----');
    console.log(e);
  },

})