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
    history: ['人马饭堂', '千百味', 'KFC', '探鱼'],
    chooseHistory: null
  },
  /**
   * 改变标签选择
   * @param e
   */
  choosetip (e) {
    let index = e.currentTarget.dataset.choose
    this.setData({
      chooseHistory: index
    })
  },
  /**
   * 搜索返回
   */
  searchShop (e) {
    console.log(e.detail.value)
    console.log(1)
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
