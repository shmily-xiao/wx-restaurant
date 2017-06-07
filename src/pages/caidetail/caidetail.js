// 获取全局应用程序实例对象
const app = getApp()

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
        p: '3',
        id: 8
      },
      {
        i: '中份',
        p: '10',
        id: 9
      }
      // ,
      // {
      //   i: '小份',
      //   p: '48.0',
      //   id: 7
      // }
    ],
    count: 1,
    introduce: '小米椒秘制葱香牛肉小米椒秘制葱香牛肉小米椒秘制葱香牛肉小米椒秘制葱香牛肉小米椒秘制葱香牛肉小米椒秘制葱香牛肉小米椒秘制葱香牛肉小米椒秘制葱香牛肉小米椒秘制葱香牛肉小米椒秘制葱香牛肉小米椒秘制葱香牛肉小米椒秘制葱香牛肉小米椒秘制葱香牛肉小米椒秘制葱香牛肉小米椒秘制葱香牛肉小米椒秘制葱香牛肉小米椒秘制葱香牛肉'
  },
  // 添加到购物车
  addcar () {
    let that = this
    let choosegoods = wx.getStorageSync('chooseGoods')
    // console.log(choosegoods)
    let current = that.data.current
    let goodsId = that.data.kinds[current].id
    // todo 菜的信息相关计算
    var goods, money, allCount
    if (choosegoods) {
      goods = choosegoods['goods']
      money = choosegoods['money'] * 1
      // console.log(money)
      allCount = choosegoods['allCount'] * 1
      if (goods[goodsId]) {
        goods[goodsId] += that.data.count
      } else {
        goods[goodsId] = that.data.count
      }
      money += (that.data.kinds[current]['p'] * 1) * (that.data.count * 1)
      // console.log('second' + money)
      allCount += (that.data.count * 1)
    } else {
      goods = {}
      goods[goodsId] = that.data.count
      money = (that.data.kinds[current]['p'] * 1) * (that.data.count * 1)
      allCount = (that.data.count * 1)
    }
    choosegoods = {
      goods: goods,
      money: money,
      allCount: allCount,
      s_id: app.data.s_id
    }
    wx.setStorageSync('chooseGoods', choosegoods)
    wx.switchTab({
      url: '../ordering/ordering',
    })
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
