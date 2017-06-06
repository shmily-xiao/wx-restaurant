// 获取全局应用程序实例对象
// const app = getApp()

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: 'caidetail',
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    name: '小米椒秘制葱香牛肉',
    current: 0,
    kinds: [
      {
        i: '大份',
        p: '78.0'
      },
      {
        i: '中份',
        p: '58.0'
      },
      {
        i: '小份',
        p: '48.0'
      }
    ],
    count: 1,
    introduce: '小米椒秘制葱香牛肉小米椒秘制葱香牛肉小米椒秘制葱香牛肉小米椒秘制葱香牛肉小米椒秘制葱香牛肉小米椒秘制葱香牛肉小米椒秘制葱香牛肉小米椒秘制葱香牛肉小米椒秘制葱香牛肉小米椒秘制葱香牛肉小米椒秘制葱香牛肉小米椒秘制葱香牛肉小米椒秘制葱香牛肉小米椒秘制葱香牛肉小米椒秘制葱香牛肉小米椒秘制葱香牛肉小米椒秘制葱香牛肉'
  },
  // 增加数量
  addorder () {
    let count = this.data.count
    ++count
    this.setData({
      count: count
    })
  },
  // 减少数量
  delorder () {
    let count = this.data.count
    if (count <= 1) return
    --count
    this.setData({
      count: count
    })
  },
  // 选择规格
  choosetip (e) {
    let cur = e.currentTarget.dataset.index
    this.setData({
      current: cur
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
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
