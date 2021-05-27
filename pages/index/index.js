// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
   
  },
  onLoad(){
this.getInfo()
  },
  getInfo(){
    wx.request({
      url: 'https://www.escook.cn/api/get',
      method:'GET',
      data:{
        name:'zs',
        age:18
      },
      success(res){
        console.log(res.data);
      }
    })
  }
 
})
