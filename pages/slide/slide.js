Page({

  /**
   * 页面的初始数据
   */
  data: {
    operatorList:[
      {
        name:"能天使",
        imagePath:"/images/exusiai.png",
        id:1
      },
      {
        name:"德克萨斯",
        imagePath:"/images/texas.png",
        id:2
      },
      {
        name: "可颂",
        imagePath: "/images/croissant.png",
        id:3
      },
      {
        name: "空",
        imagePath: "/images/sora.png",
        id:4
      }
    ],
    currentIndex:0
  },

  f0:function(event) {
    this.setData({
      currentIndex: this.data.operatorList.length - 1
    })
  },

  f1:function(event) {
    let id = event.currentTarget.dataset.operatorId
    let name = event.currentTarget.dataset.operatorName
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + id + '&name=' + name
    })
  },

  onSubmit:function(event) {
    const name = event.detail.value.operatorName;
    // console.log(name);
    wx.navigateTo({
      url: '/pages/detail/detail?&name=' + name
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      currentIndex:this.data.operatorList.length - 1
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