Page({
  data: {
    //模态框的状态(true:隐藏 false:显示)
    hideModal: true,
    animationData: {}
  },

  /**
   * 左侧弹出框
   */
  showModal: function () {
    //1、显示蒙层
    var that = this;
    that.setData({
      hideModal: false
    });
    //2、创建动画
    var animation = wx.createAnimation({
      //动画的持续时间 默认400ms
      duration: 600,
      //动画的效果 默认值是linear
      timingFunction: 'ease',
    })
    //3、调用动画
    this.animation = animation;
    setTimeout(function () {
      that.fadeIn();//调用显示动画
    }, 200);
  },

  /**
   * 隐藏底部弹出框
   */
  hideModal: function () {
    var that = this;
    var animation = wx.createAnimation({
      //动画的持续时间默认400ms   
      duration: 800,
      //动画的效果 默认值是linear
      timingFunction: 'ease',
    })
    this.animation = animation
    //调用隐藏动画  
    that.fadeDown(); 
    setTimeout(function () {
      that.setData({
        hideModal: true
      })
    }, 720);//先执行下滑动画，再隐藏模块
  },

  /**
   * 显示动画
   */
  fadeIn: function () {
    this.animation.translateX(0).step();
    this.setData({
      //动画实例的export方法导出动画数据传递给组件的animation属性
      animationData: this.animation.export()
    })
  },

  /**
   * 隐藏动画
   */
  fadeDown: function () {
    var width = wx.getSystemInfoSync().windowWidth;
    this.animation.translateX(width).step()
    this.setData({
      animationData: this.animation.export(),
    })
  },
})