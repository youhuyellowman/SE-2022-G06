// app.js
App({
  onLaunch(){
    wx.cloud.init({
      env:{
        database:'test-0gzpu617280360cb',
        storage:'test-0gzpu617280360cb',//储存API默认环境
        functions:'test-0gzpu617280360cb'//云函数API默认环境
      },
      traceUser: true
    })
  },
  globalData: {
    userInfo: null
  }
})
