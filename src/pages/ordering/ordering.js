// 获取全局应用程序实例对象
// const app = getApp()

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: 'ordering',
    restaurant: {
      img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      name: '人马科技大饭堂',
      id: 'remaid',
      address: '汇德商业大厦501',
      tel: '123412341234',
      status: '满桌',
      grade: 'four-star',
      gradeNumber: '4.8',
      comment: [
        {
          content: '服务态度好',
          number: '932'
        },
        {
          content: '食材新鲜',
          number: '932'
        },
        {
          content: '味道赞',
          number: '932'
        },
        {
          content: '一',
          number: '9132'
        },
        {
          content: '两个',
          number: '9132'
        },
        {
          content: '四个个字',
          number: '9132'
        },
        {
          content: '三个字',
          number: '9132'
        }
      ],
      menuList: [
        {
          title: '热销1',
          id: 'list1',
          list: [
            {
              img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
              name: '红烧牛肉1',
              count: '1805',
              good: '173',
              price: '23.5',
              id: 'list1_1'
            },
            {
              name: '红烧牛肉2',
              count: '1805',
              good: '173',
              price: '23.5',
              id: 'list1_2'
            },
            {
              name: '红烧牛肉3',
              count: '1805',
              good: '173',
              price: '23.5',
              id: 'list1_3'
            },
            {
              name: '红烧牛肉4',
              count: '1805',
              good: '173',
              price: '23.5',
              id: 'list1_4'
            }
          ]
        },
        {
          title: '热销2',
          id: 'list2',
          list: [
            {
              img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
              name: '红烧牛肉1',
              count: '1805',
              good: '173',
              price: '23.5',
              id: 'list2_1'
            },
            {
              name: '红烧牛肉2',
              count: '1805',
              good: '173',
              price: '23.5',
              id: 'list2_2'
            },
            {
              name: '红烧牛肉3',
              count: '1805',
              good: '173',
              price: '23.5',
              id: 'list2_3'
            },
            {
              name: '红烧牛肉4',
              count: '1805',
              good: '173',
              price: '23.5',
              id: 'list2_4'
            }
          ]
        },
        {
          title: '热销3',
          id: 'list3',
          list: [
            {
              img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
              name: '红烧牛肉1',
              count: '1805',
              good: '173',
              price: '23.5'
            },
            {
              name: '红烧牛肉2',
              count: '1805',
              good: '173',
              price: '23.5'
            },
            {
              name: '红烧牛肉3',
              count: '1805',
              good: '173',
              price: '23.5'
            },
            {
              name: '红烧牛肉4',
              count: '1805',
              good: '173',
              price: '23.5'
            }
          ]
        },
        {
          title: '热销4',
          id: 'list4',
          list: [
            {
              img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
              name: '红烧牛肉1',
              count: '1805',
              good: '173',
              price: '23.5'
            },
            {
              name: '红烧牛肉2',
              count: '1805',
              good: '173',
              price: '23.5'
            },
            {
              name: '红烧牛肉3',
              count: '1805',
              good: '173',
              price: '23.5'
            },
            {
              name: '红烧牛肉4',
              count: '1805',
              good: '173',
              price: '23.5'
            }
          ]
        },
        {
          title: '热销5',
          id: 'list5',
          list: [
            {
              img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
              name: '红烧牛肉1',
              count: '1805',
              good: '173',
              price: '23.5'
            },
            {
              name: '红烧牛肉2',
              count: '1805',
              good: '173',
              price: '23.5'
            },
            {
              name: '红烧牛肉3',
              count: '1805',
              good: '173',
              price: '23.5'
            },
            {
              name: '红烧牛肉4',
              count: '1805',
              good: '173',
              price: '23.5'
            }
          ]
        },
        {
          title: '热销6',
          id: 'list6',
          list: [
            {
              img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
              name: '红烧牛肉1',
              count: '1805',
              good: '173',
              price: '23.5'
            },
            {
              name: '红烧牛肉2',
              count: '1805',
              good: '173',
              price: '23.5'
            },
            {
              name: '红烧牛肉3',
              count: '1805',
              good: '173',
              price: '23.5'
            },
            {
              name: '红烧牛肉4',
              count: '1805',
              good: '173',
              price: '23.5'
            }
          ]
        },
        {
          title: '热销7',
          id: 'list7',
          list: [
            {
              img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
              name: '红烧牛肉1',
              count: '1805',
              good: '173',
              price: '23.5'
            },
            {
              name: '红烧牛肉2',
              count: '1805',
              good: '173',
              price: '23.5'
            },
            {
              name: '红烧牛肉3',
              count: '1805',
              good: '173',
              price: '23.5'
            },
            {
              name: '红烧牛肉4',
              count: '1805',
              good: '173',
              price: '23.5'
            }
          ]
        }
      ],
      coupon: {
        id: 'code123123',
        delmoney: 10,
        condition: 100,
        time: '2017-12-12'
      }
    },
    // 当前的tab
    currentmenu: 0,
    // 当前的left栏
    currentleftmenu: 0,
    // 侧边栏联动当前值
    currentmenuid: 'list1',
    // 设置scroll-view的高度
    scrollHeight: 880,
    needDistance: 0,
    scrollHeight2: 815,
    showShopCarContent: false,
    showMask: false,
    menu1content: [
      {
        icon: 'iconfont icon-canshi',
        title: '催促上菜'
      },
      {
        icon: 'iconfont icon-lingdang-copy',
        title: '呼叫服务员'
      },
      {
        icon: 'iconfont icon-mifen2',
        title: '加米饭'
      },
      {
        icon: 'iconfont icon-jiubei',
        title: '加酒水'
      }
    ],
    comment: [
      {
        username: '186****1234',
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        grade: 'five-star',
        time: '2016-5-5',
        userComment: ['味道不错挺好的的呀呀呀味道不错挺好的的呀呀呀味道不错挺好的的呀呀呀'],
        commentImg: [
          'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
          'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
          'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
          'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
          'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
          'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
        ]
      },
      {
        username: '186****1234',
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        grade: 'one-star',
        time: '2016-5-5',
        userComment: ['一', '一二', '一二三', '一二三四']
      },
      {
        username: '186****1234',
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        grade: 'two-star',
        time: '2016-5-5',
        userComment: ['一', '一二', '一二三', '一二三四']
      },
      {
        username: '186****1234',
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        grade: 'four-star',
        time: '2016-5-5',
        userComment: ['一二三四', '一', '一二三四', '一二', '一二三', '一二三四']
      },
      {
        username: '186****1234',
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        grade: 'three-star',
        time: '2016-5-5',
        userComment: ['一二三四', '一', '一二三四', '一二', '一二三', '一二三四']
      }
    ],
    chooseGoods: {
      // 饭店id
      restaurant_id: 'renmaid',
      // 选择的商品数量
      goods: {},
      // 总金额
      money: 0,
      // 总数
      allCount: 0
    }
  },
  /**
   * 确认订单
   */
  goCheckOrder () {
    if (this.data.chooseGoods.allCount <= 0) {
      return wx.showToast({
        title: '您还没有点餐',
        icon: 'success',
        mask: true
      })
    }
    // todo 提交订单信息，然后去到确认页面
    wx.navigateTo({
      url: '../payorder/payorder?operation=checkOrder'
    })
  },
  /**
   * 计算消费金额
   */
  calculateMoney () {
    let goods = this.data.chooseGoods.goods
    let menuList = this.data.restaurant.menuList
    let money = 0
    let singleMoney = 0
    for (var goodsId in goods) {
      // console.log(goodsId)
      // console.log(goods[goodsId])
      for (var lists of menuList) {
        // console.log(lists)
        // 具体列表内的菜单
        let list = lists.list
        // console.log(list)
        for (var goodsID of list) {
          if (goodsID.id === goodsId) {
            // console.log(goodsID.price)
            // console.log(goods[goodsId])
            singleMoney = goodsID.price * goods[goodsId]
            // console.log('success')
          }
          // return console.log(goodsID)
        }
      }
      money += singleMoney
    }
    return money
  },
  /**
   * 显示购物车内容
   */
  showContent () {
    if (this.data.chooseGoods.money <= 0) return
    this.setData({
      showShopCarContent: !this.data.showShopCarContent,
      showMask: !this.data.showMask
    })
  },
  /**
   * 获取优惠券
   * @param e
   */
  getCoupon (e) {
    wx.showToast({
      title: '领取优惠券',
      icon: 'success',
      duration: 2000,
      mask: true
    })
  },
  /**
   * 设置右侧滚动栏的位置
   */
  setNeedDistance () {
    if (!this.data.restaurant.coupon.id) return
    this.setData({
      needDistance: 142
    })
  },
  /**
   * 改变menu选择
   * @param e
   */
  choose (e) {
    // console.log(e)
    this.setData({
      currentmenu: e.currentTarget.dataset.tab
    })
  },
  /**
   * 改变left menu选择
   * @param e
   */
  leftChoose (e) {
    this.setData({
      currentleftmenu: e.currentTarget.dataset.menu,
      currentmenuid: e.currentTarget.dataset.menulistid
    })
  },
  /**
   * 选择桌子取号
   */
  getdesk (e) {
    let index = e.currentTarget.dataset.desk
    let title = null
    if (index === '0') {
      title = '小桌取号成功'
    } else if (index === '1') {
      title = '中桌取号成功'
    } else {
      title = '大桌取号成功'
    }
    wx.showToast({
      title: title,
      icon: 'success',
      duration: 2000
    })
  },
  /**
   * 户呼叫服务
   * @param e
   */
  menu1choose (e) {
    console.log(e.currentTarget.dataset.tabmenu)
  },
  /**
   * 拨打电话
   */
  callPhone () {
    wx.makePhoneCall({
      phoneNumber: this.data.restaurant.tel
    })
  },
  /**
   * 修改标题栏文字
   */
  setNavigatorText () {
    let that = this
    wx.setNavigationBarTitle({
      title: that.data.restaurant.name
    })
  },
  /**
   * 添加商品
   * @param e
   */
  addorder (e) {
    let goodsId = e.currentTarget.dataset.goodsid
    if (!goodsId) {
      return wx.showModal({
        title: '抱歉',
        content: '您选的菜品暂时无法提供',
        showCancel: false,
        confirmText: '我知道了'
      })
    }
    let chooseGoods = this.data.chooseGoods
    let goods = chooseGoods.goods
    let count = goods[goodsId]
    // 已有该商品
    if (count) {
      goods[goodsId] = ++count
    } else {
      goods[goodsId] = 1
    }
    chooseGoods.goods = goods
    this.setData({
      chooseGoods: chooseGoods
    })
    let money = this.calculateMoney()
    chooseGoods.money = money
    // 增加计数
    ++chooseGoods.allCount
    this.setData({
      chooseGoods: chooseGoods
    })
    wx.setStorageSync('chooseGoods', this.data.chooseGoods)
  },
  /**
   * 删除商品
   * @param e
   */
  delorder (e) {
    let goodsId = e.currentTarget.dataset.goodsid
    let chooseGoods = this.data.chooseGoods
    let goods = chooseGoods.goods
    let count = goods[goodsId]
    goods[goodsId] = --count
    chooseGoods.goods = goods
    this.setData({
      chooseGoods: chooseGoods
    })
    let money = this.calculateMoney()
    chooseGoods.money = money
    // 减少计数
    --chooseGoods.allCount
    if (chooseGoods.allCount <= 0) {
      this.setData({
        showMask: false,
        showShopCarContent: false
      })
    }
    this.setData({
      chooseGoods: chooseGoods
    })
    wx.setStorageSync('chooseGoods', this.data.chooseGoods)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
    // TODO: onLoad
    // 改变标题栏文字
    this.setNavigatorText()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady () {
    // TODO: onReady
    this.setNeedDistance()
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
