// pages/musiclist/musiclist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    musicList:[],
    listInfo:{},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getMusicList(options.id)
  },
  _getMusicList(id) {
    wx.showLoading({
      title:'Loading'
    })
    wx.cloud.callFunction({
      name:'music',
      data:{
        $url:'musicList',
        playlistId:id,
      }
    }).then((res)=>{
      const pl = res.result.playlist
      this.setData({
        musicList:pl.tracks,
        listInfo:{
          coverImgUrl:pl.coverImgUrl,
          name:pl.name
        }
      })
      this._setMusicList()
      wx.hideLoading()
    })
  },
  _setMusicList(){
    wx.setStorageSync('musicList',this.data.musicList)
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
