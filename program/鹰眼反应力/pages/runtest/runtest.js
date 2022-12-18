// index.js
// 获取应用实例
const app = getApp()
let clicktime = 0;//上次点击时间
let clicknum = 0;//点击次数默认0

Page({
  data: {
    motto: 'Hello World',
    color1:'red',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },

	click() {//按钮方法
		let currentTime = Date.now();//设置本次点击时间
    let intervaldate = currentTime - clicktime;//本次点击时间减上次点击时间等于间隔时间
    clicknum=clicknum+1;
    console.log(clicknum)
    if(clicknum==1){
      this.setData({color1:'blue'})
		if(intervaldate<1000){//间隔时间小于300，可以自定义
      clicknum = clicknum + 1;
      console.log(clicknum)
      console.log(intervaldate);
      if(clicknum==3){
        this.setData({color1:'blue'})
      }
			if(clicknum==6){//点击次数等于6将进行任务
                //可以使用自己想用的方法
				wx.navigateTo({
					url: '/pages/index/index',
				  })
			}
		}else if(intervaldate>2000){//间隔时间超过500将重新计数
			clicknum = 1
    }
  }
		clicktime = currentTime;//设置上次点击时间
	  },
  torank(){
    wx.navigateTo({
      url: '/pages/rank/rank',
    })
  },
  tomy(){
    wx.navigateTo({
      url: '/pages/myinfo/myinfo',
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
