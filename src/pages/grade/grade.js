// 获取全局应用程序实例对象
const app = getApp()
const useUrl = require('../../utils/service')
// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: 'grade',
    text_ph: '菜品口味如何，服务如何？环境如何？',
    upPhotoList: [],
    currentStar: 4,
    comment: ['服务态度好', '分量足', '热情周到', '味道赞', '长得帅有食欲', '人很nice'],
    chooseArr: [],
    checkStatus: false
  },
  /**
   * 改变标签选择
   * @param e
   */
  choosetip (e) {
    let index = e.currentTarget.dataset.choose
    this.data.chooseArr[index] = !this.data.chooseArr[index]
    this.setData({
      chooseArr: this.data.chooseArr
    })
  },
  /**
   * 星星打分
   * @param e
   */
  chooseStar (e) {
    this.setData({
      currentStar: e.currentTarget.dataset.star
    })
  },
  /**
   * 用户上传图片
   */
  upPhoto () {
    let that = this
    if (that.data.upPhotoList.length >= 6) {
      return wx.showToast({
        title: '最多6张图片',
        icon: 'success',
        duration: 2000
      })
    }
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        let temp = tempFilePaths[0]
        that.data.upPhotoList.push(temp)
        that.setData({
          upPhotoList: that.data.upPhotoList
        })
      }
    })
  },
  /**
   * 图片展示
   */
  showImage (e) {
    let that = this
    wx.previewImage({
      current: e.currentTarget.dataset.imgsrc, // 当前显示图片的http链接
      urls: that.data.upPhotoList // 需要预览的图片http链接列表
    })
  },
  /**
   * 删除当前图片
   * @param e
   */
  delphoto (e) {
    let that = this
    that.data.upPhotoList.splice(that.data.upPhotoList.indexOf(e.currentTarget.dataset.delsrc), 1)
    this.setData({
      upPhotoList: that.data.upPhotoList
    })
  },
  /**
   * 设置消费金额
   * @param e
   */
  setMoney (e) {
    this.setData({
      useMoney: e.detail.value
    })
  },
  /**
   * 提交评论信息
   */
  gradeBtn () {
    // let that = this
    // let obj = {
    //   url: useUrl.serviceUrl.post_comment,
    //   data: {
    //     session_key: wx.getStorageSync('session_key'),
    //     s_id: that.data.sId,
    //     level: that.data.currentStar * 1 + 1,
    //     o_id: that.data.oId,
    //     desc:
    //   }
    // }
    // wx.switchTab({
    //   url: '../index/index'
    // })
  },
  /**
   * 输入文字
   * @param e
   */
  textBlur (e) {
    console.log(e)
  },
  /**
   * checkbox 选项
   * @param e
   */
  changbox () {
    this.setData({
      checkStatus: !this.data.checkStatus
    })
  },
  /**
   * 获取评论标签
   * @param params
   */
  getTips (params) {
    // let that = this
    let obj = {
      url: useUrl.serviceUrl.user_flow_comment,
      data: {
        session_key: wx.getStorageSync('session_key'),
        s_id: params.s_id
      },
      success (res) {
        console.log(res)
      }
    }
    app.requestInfo(obj)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad (params) {
    this.getTips(params)
    this.setData({
      sId: params.s_id,
      oId: params.o_id
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
