// index.js
// 获取应用实例
const app = getApp()
Page({
  data: {
    userInfo: app.data.userInfo
  },
  chooseImage(e) {
    wx.chooseMedia({
      count: 1,
      mediaType: ['image'],
      sourceType: ['album', 'camera'],
      camera: 'back',
      success(res) {
        console.log(res.tempFiles.tempFilePath)
        app.data.userInfo.avatarUrl = res.tempFiles.tempFilePath;
        console.log(app.data.userInfo);
      }
    })
  },
  keepImg:function (e) {
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
