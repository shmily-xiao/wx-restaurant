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
              id: 'list1-1'
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
          title: '热销2',
          id: 'list2',
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
    scrollHeight: 1000,
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
        userComment: ['一二三四', '一', '一二三四', '一二', '一二三', '一二三四']
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
    ]
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
