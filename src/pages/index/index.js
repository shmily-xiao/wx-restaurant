// 获取全局应用程序实例对象
const app = getApp()

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: 'index',
    userInfo: null,
    userSite: '定位中',
    navList: [
      {
        navTitle: '排队取号',
        navIcon: 'iconfont icon-shalou'
      },
      {
        navTitle: '预约订座',
        navIcon: 'iconfont icon-chuliyuyue'
      },
      {
        navTitle: '扫描单号',
        navIcon: 'iconfont icon-erweima'
      }
    ],
    hotShop: [
      {
        shopImg: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        shopName: '青花椒砂锅鱼'
      },
      {
        shopImg: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        shopName: '青花椒砂锅鱼'
      },
      {
        shopImg: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        shopName: '青花椒砂锅鱼'
      },
      {
        shopImg: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        shopName: '青花椒砂锅鱼'
      },
      {
        shopImg: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        shopName: '青花椒砂锅鱼'
      },
      {
        shopImg: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        shopName: '青花椒砂锅鱼'
      }
    ],
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
      }
    ],
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ]
  },
  chooseLocation () {
    console.log(1)
    let that = this
    wx.chooseLocation({
      success (res) {
        if (res.name.length <= 0) {
          return that.setData({
            userSite: res.address
          })
        }
        that.setData({
          userSite: res.name
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
    wx.getLocation({
      success (res) {
        console.log(res)
      }
    })
    console.log(' ---------- onLoad ----------')
    // console.dir(app.data)
    app.getUserInfo()
      .then(info => this.setData({ userInfo: info }))
      .catch(console.info)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady () {
    console.log(' ---------- onReady ----------')
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow () {
    console.log(' ---------- onShow ----------')
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide () {
    console.log(' ---------- onHide ----------')
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload () {
    console.log(' ---------- onUnload ----------')
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh () {
    console.log(' ---------- onPullDownRefresh ----------')
  }
})
