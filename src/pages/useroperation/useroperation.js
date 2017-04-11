// 获取全局应用程序实例对象
// const app = getApp()

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: 'useroperation',
    operation: null,
    numberList: {
      img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      name: '人马大饭堂',
      kind: '湘菜',
      average: 88,
      distance: 453,
      desk: 'C2',
      wait: 5
    },
    message: [
      {
        title: '三太子三汁',
        id: 'message1',
        content: '阿斯顿飞那是的疯狂就拉上的了风景阿萨德来房间爱绿色饭店就卡死的李开复',
        time: '2012-12-12'
      },
      {
        title: '三太子三汁2',
        id: 'message2',
        content: '阿斯顿飞那是的疯狂就拉上的了风景阿萨德来房间爱绿色饭店就卡死的李开复',
        time: '2012-12-12'
      }
    ],
    integral: [
      {
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        integralid: 'renma1',
        name: '人马大饭堂',
        delMoney: 20,
        useMoney: 100,
        needIntegral: 200
      },
      {
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        integralid: 'renma2',
        name: '人马大饭堂',
        delMoney: 20,
        useMoney: 100,
        needIntegral: 200
      },
      {
        img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        name: '人马大饭堂',
        integralid: 'renma3',
        delMoney: 20,
        useMoney: 100,
        needIntegral: 200
      }
    ],
    currentCouponTab: 0,
    couponNumber: [
      {
        title: '未使用',
        count: 6
      },
      {
        title: '使用记录',
        count: 0
      },
      {
        title: '已过期',
        count: 0
      }
    ],
    couponNoUseList: [
      {
        name: '人马科技大饭堂',
        id: 'shopId',
        delMoney: 10,
        useCondition: '消费即用',
        starTime: '2015.12.01',
        endTime: '2016.12.03'
      },
      {
        name: '人马科技大饭堂',
        id: 'shopId',
        delMoney: 10,
        useCondition: '满100可用',
        starTime: '2015.12.01',
        endTime: '2016.12.03'
      },
      {
        name: '人马科技大饭堂',
        id: 'shopId',
        discount: 7,
        useCondition: '满100可用',
        starTime: '2015.12.01',
        endTime: '2016.12.03'
      }
    ]
  },
  /**
   * 设置couponTab
   * @param e
   */
  chooseCouponTab (e) {
    this.setData({
      currentCouponTab: e.currentTarget.dataset.tabid
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (params) {
    // 由跳转链接设置标题
    let operation = params.operation
    // 设置operation
    this.setData({
      operation: params.operation
    })
    // 判断传入类型
    if (operation === 'number') {
      operation = '我的排单号'
    } else if (operation === 'message') {
      operation = '消息'
    } else if (operation === 'integral') {
      operation = '积分兑换'
    } else {
      operation = '优惠卷'
    }
    // 设置导航栏标题
    wx.setNavigationBarTitle({
      title: operation
    })
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
