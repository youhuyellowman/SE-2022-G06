// index.js
// 获取应用实例
const app = getApp()
let firsttest = 0; //上次点击时间
let firstchange = 0;
let ftesttime = 0;
let clicknum = 0; //点击次数默认0
let timefirst = 0;
let timesecond = 0;
let timethird = 0;
let three = 0;
let avge=0;
Page({
  data: {
    motto: 'Hello World',
    color1: 'red',
    first: 0,
    second: 0,
    third: 0,
    avge:0,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },

  click: function () { //按钮方法
    //let currentTime = Date.now();//设置本次点击时间
    //let intervaldate = currentTime - clicktime;//本次点击时间减上次点击时间等于间隔时间
    var date = new Date();
    clicknum = clicknum + 1;
    console.log(clicknum)
    if (clicknum % 2 == 1) {
      this.setData({
        color1: 'blue'
      })
      var randNum = (Math.random() * 8000) + 2000;
      console.log(randNum)
      setTimeout(() => {
        this.setData({
          color1: 'yellow'
        })
      }, randNum)
      let firstchange = date.getMilliseconds();
    }
    if (clicknum % 2 == 0) {
      let firsttest = date.getMilliseconds();
      let timecj = firsttest - firstchange
      if (timecj < 200) {
        timecj = timecj + 1000
      }
      console.log(timecj)
      if (clicknum == 2) {
        timefirst = timecj
        this.setData({
          color1: 'red'
        })
      }
      if (clicknum == 4) {
        timesecond = timecj
        this.setData({
          color1: 'red'
        })
      }
      if (clicknum == 6) {
        timethird = timecj
        this.setData({
          color1:'red',
          first: timefirst,
          second: timesecond,
          third: timethird
        })
        // console.log(timefirst)
        // console.log(timesecond)
        // console.log(timethird)

      }

    }
    //clicktime = currentTime;//设置上次点击时间
  },
  firstshow: function () {
    this.setData({
      first: timefirst
    })
  },
  secondshow: function () {
    this.setData({
      second: timesecond
    })
  },
  thirdshow: function () {
    this.setData({
      third: timethird
    })
  },
  again:function() {
    timefirst=0,
    timesecond=0,
    timethird=0,
    clicknum=0
    this.setData({
      first: timefirst,
      second: timesecond,
      third: timethird
    })
    console.log(clicknum)
  },
  savescore: function () {
    // clicknum=0
    // this.setData({
    //   first: timefirst,
    //   second: timesecond,
    //   third: timethird
    // })
    console.log(clicknum)
    if (clicknum!=6) {
      wx.showToast({
        icon: 'none',
        title: '未完成三次测试无法保存',
        duration: 2000,
      })
    } else {
      avge=(timefirst+timesecond+timethird)/3
      console.log(avge)
      console.log(timefirst)
      wx.cloud.database().collection('record')
        .doc("b12bdba163b3f97b00022925336d463b")
        .update({
          data:{
            avg:avge,
            first:timefirst,
            second:timesecond,
            third:timethird,
          }
        })
        .then(res =>{
          console.log('修改成功',res)
        })
        .catch(res =>{
          console.log('修改失败',res)
        })
    }
  },
  torank() {
    wx.navigateTo({
      url: '/pages/rank/rank',
    })
  },
  tomy() {
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