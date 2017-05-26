// 获取全局应用程序实例对象
const app = getApp()
const useUrl = require('../../utils/service')
// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: '排队取号',
    nearShop: [],
    star: ['zero-star', 'one-star', 'two-star', 'three-star', 'four-star', 'five-star']
  },
  /**
   * 排队、预约取号
   */
  getpaidui (param) {
    let that = this
    let userSite = wx.getStorageSync('userSite')
    let url = useUrl.serviceUrl[param]
    let obj = {
      url: url,
      data: {
        session_key: wx.getStorageSync('session_key'),
        latitude: userSite.latitude,
        longitude: userSite.longitude
      },
      success (res) {
        if (!res.data.data) return
        that.setData({
          nearShop: res.data.data
        })
      }
    }
    app.requestInfo(obj)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (e) {
    // console.log(e)
    if (e.type === '1') {
      wx.setNavigationBarTitle({
        title: '预约取号'
      })
      this.setData({
        title: '预约订座'
      })
      this.getpaidui('yuding_shop')
    } else {
      this.getpaidui('paidui_shop')
    }
    // TODO: onLoad
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady () {
    // TODO: onReady
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow () {
    // TODO: onShow
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide () {
    // TODO: onHide
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload () {
    // TODO: onUnload
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh () {
    // TODO: onPullDownRefresh
  }
})
