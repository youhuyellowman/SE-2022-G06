// changename.js
const app = getApp();
Page({
  data: {
    userInfo: app.data.userInfo,
    inputValue: ''
  },
  getInput:function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  keepInput:function (e) {
    app.data.userInfo.nickName = this.data.inputValue;
    console.log(app.data.userInfo);
    wx.navigateTo({
      url: '/pages/myinfo/myinfo',
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        userInfo: app.data.userInfo
      })
    }
  }
})
