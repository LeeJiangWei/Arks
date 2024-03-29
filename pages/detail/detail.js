Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // option为url参数中query字段属性
    // 保存组件this指针
    let that = this;
    wx.request({
      url: 'http://localhost:3000/operator-detail',
      method: 'get',
      data:{
        "name":options.name
      },
      header: {

      },
      //以下为回调函数
      success: function(res) {
        if (res.data.error) {
          that.setData({
            errorMsg: res.data.error
          })
        } else {
          that.setData({
            name_zh: res.data.name_zh,
            sex: res.data.sex,
            operator_class: res.data.operator_class,
            stars: res.data.stars,
            tags: res.data.tags,
            img_src: res.data.img_src
          });
          console.log(res.data)
        }
      },
      fail: function(){

      },
      complete: function(){

      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})