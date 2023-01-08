// index.js
let history=0;
let lastscore=0;
Page({
  data: {
    testcount:0,
    history:0,
    lastscore:0,
    user:{}
  },
  check() {
    wx.cloud.database().collection('user')
    .doc('acca0db963b70b55001f9a733790365b')
    .get()
    .then(res =>{
      console.log('查询成功',res)
      this.setData({
        user:res.data
      })
    })
    .catch(err =>{
      console.log('查询失败',err)
    })
  },
  check2() {
    wx.cloud.database().collection('user')
    .doc('acca0db963b70b55001f9a733790365b')
    .get()
    .then(res =>{
      console.log('查询成功',res)
      this.setData({
        user:res.data
      })
    })
    .catch(err =>{
      console.log('查询失败',err)
    })
  },
  up:function(){
    this.setData({
      history_score:history,
      last_score:lastscore
    })
  },
  totest(){
    wx.navigateTo({
      url: '/pages/runtest/runtest',
    })
  },
  tomy(){
    wx.navigateTo({
      url: '/pages/myinfo/myinfo',
    })
  }
})
