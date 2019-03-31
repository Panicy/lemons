// pages/index/index.js
let App=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://browser.qq.com/new/10.0/images/head/rect1.png',
      'https://activity.ui.cn/Public/uiapp/img/banner.png',
      'https://browser.qq.com/new/10.0/images/head/rect1.png',
      'https://activity.ui.cn/Public/uiapp/img/banner.png',
    ],
    swiperIndex:0,
    sysInfo: App.getSysIngo(),
    opc:0
   
  },
  // 轮播图动画
  changedImg(e){
    this.setData({
      swiperIndex: e.detail.current
    })
  },

  //滑动窗口
  scrollFns(e){
    let This=this;
    let Topview = e.detail.scrollTop;
    let opc =  Topview/90;
    if(opc>1){
      opc=1;
    }else if(opc<=0){
      opc = 0;
    }
    console.log(Topview)
   This.setData({
     opc: opc
   })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let SysInfo = App.getSysIngo();
    console.log(SysInfo.screenHeight)
    
    this.setData({
      SysInfo: SysInfo
    })

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

  }
})