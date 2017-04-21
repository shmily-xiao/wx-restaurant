// 获取全局应用程序实例对象
// const app = getApp()

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: 'search',
    nearShop: [
      {
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        name: '青花椒砂锅鱼',
        price: '30',
        kind: '中国菜',
        distance: '8.6km',
        status: '无需排队',
        grade: 'five-star'
      },
      {
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        name: '青花椒砂锅鱼',
        price: '30',
        kind: '中国菜',
        status: '无需排队',
        grade: 'four-star'
      },
      {
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        name: '青花椒砂锅鱼',
        price: '128',
        kind: '中国菜',
        status: '无需排队',
        grade: 'one-star'
      },
      {
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        name: '青花椒砂锅鱼',
        price: '128',
        kind: '中国菜',
        status: '无需排队',
        grade: 'one-star'
      },
      {
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        name: '青花椒砂锅鱼',
        price: '128',
        kind: '中国菜',
        status: '无需排队',
        grade: 'one-star'
      },
      {
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        name: '青花椒砂锅鱼',
        price: '128',
        kind: '中国菜',
        status: '无需排队',
        grade: 'one-star'
      },
      {
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        name: '青花椒砂锅鱼',
        price: '128',
        kind: '中国菜',
        status: '无需排队',
        grade: 'one-star'
      },
      {
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        name: '青花椒砂锅鱼',
        price: '128',
        kind: '中国菜',
        status: '无需排队',
        grade: 'one-star'
      }
    ],
    searchText: null,
    history: [],
    chooseHistory: null,
    searchShow: true
  },
  /**
   * 清空搜索记录
   */
  cleanHistory () {
    this.setData({
      history: [],
      searchShow: false
    })
    wx.removeStorageSync('history')
  },
  /**
   * 改变标签选择
   * @param e
   */
  chooseTip (e) {
    let index = e.currentTarget.dataset.choose
    this.setData({
      chooseHistory: index
    })
  },
  /**
   * 搜索返回
   */
  searchShop (e) {
    let searcheText = null
    if (e.currentTarget.dataset.type === 'btn') {
      // 按钮搜索
      console.log(this.data.searchText)
      searcheText = this.data.searchText
    } else {
      // 打字框搜索
      console.log(e.detail.value)
      searcheText = e.detail.value
    }
    let that = this
    // 设置缓存
    for (var index of that.data.history) {
      if (index === searcheText) return
    }
    let history = that.data.history
    console.log(history)
    if (!history) {
      history = [searcheText]
      that.data.history = history
    } else {
      let count = history.unshift(searcheText)
      if (count >= 10) {
        that.data.history.pop()
      }
    }
    this.setData({
      chooseHistory: 0,
      searchShow: true
    })
    wx.setStorage({
      key: 'history',
      data: that.data.history,
      success () {
        that.setData({
          history: wx.getStorageSync('history')
        })
      }
    })
  },
  /**
   * 键盘输入改变搜索结果
   */
  searchInput (e) {
    console.log(e.detail.value)
    this.setData({
      searchText: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
    // 读取搜索历史
    let history = wx.getStorageSync('history')
    if (!history) {
      this.setData({
        searchShow: false
      })
    }
    this.setData({
      history: history
    })
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
