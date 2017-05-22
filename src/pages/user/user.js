// 获取全局应用程序实例对象
const app = getApp()
const useUrl = require('../../utils/service')
// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: 'user',
    userInfo: null,
    userDetail: [
      {
        title: '正在排队',
        number: 1
      },
      {
        title: '优惠券',
        number: 4
      },
      {
        title: '积分',
        number: 20
      }
    ],
    userList: [
      {
        icon: 'iconfont icon-xiaoxi',
        title: '我的排单号',
        id: 'number'
      },
      {
        icon: 'iconfont icon-lingdang',
        title: '消息',
        id: 'message'
      },
      {
        icon: 'iconfont icon-fapiao',
        title: '积分兑换',
        id: 'integral'
      },
      {
        icon: 'iconfont icon-dingdan',
        title: '我的订单',
        id: 'order'
      },
      {
        icon: 'iconfont icon-iconfontruzhu-copy',
        title: '商家入驻',
        id: 'merchant'
      }
    ],
    user: {
      shopStatus: 0
    }
  },
  /**
   * 优惠券
   */
  getCoupon () {
    let that = this

    let obj = {
      url: useUrl.serviceUrl.coupons_num,
      data: {
        session_key: wx.getStorageSync('session_key')
      },
      success (res) {
        // console.log(res)
        that.data.userDetail[1].number = res.data.data.count[0]
        that.setData({
          // couponsCount: res.data.data.count,
          userDetail: that.data.userDetail
        })
      }
    }
    app.requestInfo(obj)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
    this.setData({
      userInfo: wx.getStorageSync('userInfo')
    })
    this.getCoupon()
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
