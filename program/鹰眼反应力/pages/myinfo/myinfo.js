// index.js
// 获取应用实例
const app = getApp();
Page({
  data: {
    motto: 'Hello World',
    userInfo: app.data.userInfo,
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  torank(){
    wx.navigateTo({
      url: '/pages/rank/rank',
    })
  },
  totest(){
wx.navigateTo({
  url: '/pages/runtest/runtest',
})
  }, 
  tologin(){
    wx.navigateTo({
      url: '/pages/runtest/runtest',
    })
  },
  toimg(){
    wx.navigateTo({
      url: '/pages/changeimg/changeimg',
    })
  } ,
  toname(){
    wx.navigateTo({
      url: '/pages/changename/changename',
    })
  },
  onLoad() {
    console.log(this.data.userInfo);
    if (wx.getUserProfile) {
      this.setData({
        userInfo: app.data.userInfo
      })
    }
  }
})
