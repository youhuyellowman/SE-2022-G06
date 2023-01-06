// app.js
<<<<<<< HEAD
<<<<<<< HEAD
// App({
=======
App({
<<<<<<< HEAD
>>>>>>> d2d507cb4e970c62a3055feca703f271b000881d

=======
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUseGetUserProfile: false,
  }
>>>>>>> hcx
  // onLaunch: function(){
=======
App({

  onLaunch: function(){
>>>>>>> yjs
    //云开发环境的初始化
    wx.cloud.init({
      env:"cloud1-5g6hmlhg19b4edab",
      // database:'test-0gzpu617280360cb'
    })
  // onLaunch(){
  //   wx.cloud.init({
  //     env:{
  //       database:'test-0gzpu617280360cb',
  //       storage:'test-0gzpu617280360cb',//储存API默认环境
  //       functions:'test-0gzpu617280360cb'//云函数API默认环境
  //     },
  //     traceUser: true
  //   })
  // }
  globalData: {
    userInfo: null
  }
  }
})
