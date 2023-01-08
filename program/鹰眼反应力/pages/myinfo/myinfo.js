// index.js
// 获取应用实例
const app = getApp()
let name1='';
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    name2:'',
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  nameshow(){
    wx.cloud.database().collection('user')
    .doc('acca0db963b70b55001f9a733790365b')
    .get()
    .then(res =>{
      console.log('查询成功',res)
      name1=res.data.user_name
      console.log(name1)
      this.setData({
        user:res.data
      })
    })
    .catch(err =>{
      console.log('查询失败',err)
    })
    this.setData({
      user_name:name1
    })
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
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
