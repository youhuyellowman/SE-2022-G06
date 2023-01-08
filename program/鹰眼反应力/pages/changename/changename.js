// index.js
let input='';
let inputValue='';
Page({
  data: {
    inputValue: ''
  },
  bindKeyInput: function (e) {
    input=e.detail.value
    this.setData({
      inputValue: e.detail.value
    })
  },
  save:function(e){
    wx.cloud.database().collection('user')
    .doc('acca0db963b70b55001f9a733790365b')
    .update({
      data:{
        user_name:input
      }
    })
    .then(res =>{
      console.log('修改成功',res)
    })
    .catch(err =>{
      console.log('修改失败',err)
    })
    wx.showToast({
      icon: 'none',
      title: '修改成功',
      duration: 2000,
    })
  }
})
