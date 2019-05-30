// pages/mark/mark.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    authorized: false,
    likeList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.userAuthorized();
  },

  userAuthorized(){
    wx.getSetting({   // 判断是否已经授权  开发者可以使用 wx.getSetting 获取用户当前的授权状态。
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({  //  获取用户信息   调用前需要 用户授权 scope.userInfo。
            success: res => {
              this.setData({
                userInfo: res.userInfo,
                authorized: true
              });
              this.getMyLike();
            }
          })
        }
      }
    });
  },

  onGetUserInfo(e) {   // 没有授权的情况下，申请授权
    // console.log(e);
    const userInfo = e.detail.userInfo;
    // console.log(userInfo);
    if (userInfo) {
      this.setData({
        userInfo,
        authorized: true
      });
      this.getMyLike();
    }
  },

  getMyLike() {
    // 从缓存中取值
    const likeList = wx.getStorageSync('likeList') || [];
    this.setData({
      likeList
    });
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
    // this.getMyLike();
    this.userAuthorized();
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