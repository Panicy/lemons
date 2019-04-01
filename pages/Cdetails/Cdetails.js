// pages/Cdetails/Cdetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current:0,
    imageUrl:[
      'https://img14.360buyimg.com/n0/jfs/t1/3402/2/13129/73174/5bd71700Ee654b832/b941ca5a8987eec8.jpg',
      'https://img14.360buyimg.com/n0/jfs/t1/956/3/13467/84819/5bd71704E366433ad/c560d0c5a427a991.jpg',
      'https://img14.360buyimg.com/n0/jfs/t1/603/6/13728/164419/5bd716eeE2ffa896e/9d225d9e51ae43d7.jpg',
      'https://img14.360buyimg.com/n0/jfs/t1/3402/2/13129/73174/5bd71700Ee654b832/b941ca5a8987eec8.jpg'
    ]
  },

  changedImg(e){
    this.setData({
      current: e.detail.current

    })
  },
  animationImg(e){

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

  }
})