// 获取全局应用程序实例对象
// const app = getApp()
const tcity = require('../../utils/city')
// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: 'businessCooperation',
    // 地区选择相关
    provinces: [],
    province: '',
    citys: [],
    city: '',
    countys: [],
    county: '',
    value: [0, 0, 0],
    values: [0, 0, 0],
    condition: false,
    // 地区选择相关
    shopAddress: '添加地图标记',
    showMain: true,
    allHidden: false,
    hiddenMain: false,
    // 图片上传
    addPicText: '立即上传',
    faceImg: '../../images/4.png',
    insideImg: '../../images/5.png',
    IdFaceImg: '../../images/6.png',
    licenseImg: '../../images/2.png',
    restaurantLicenseImg: '../../images/3.png',
    upStatus: 0,
    license: [
      {name: 'noraml', value: '营业执照', checked: 'true'},
      {name: 'special', value: '特许证件'}
    ],
    licenseTime: [
      {name: 'noTime', value: '长期有效'},
      {name: 'haveTime', value: '固定有效期'}
    ],
    restaurantLicenseTime: [
      {name: 'noTime', value: '长期有效'},
      {name: 'haveTime', value: '固定有效期'}
    ]
  },
  /**
   *
   */
  nextStep2 () {
    this.setData({
      allHidden: true
    })
  },
  /**
   * 单项选择设置
   * @param e
   */
  radioChange (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  /**
   * 选择地区
   * @param e
   */
  bindChange: function (e) {
    // console.log(e);
    var val = e.detail.value
    var t = this.data.values
    var cityData = this.data.cityData

    if (val[0] !== t[0]) {
      console.log('province no ')
      const citys = []
      const countys = []

      for (let i = 0; i < cityData[val[0]].sub.length; i++) {
        citys.push(cityData[val[0]].sub[i].name)
      }
      for (let i = 0; i < cityData[val[0]].sub[0].sub.length; i++) {
        countys.push(cityData[val[0]].sub[0].sub[i].name)
      }
      this.setData({
        province: this.data.provinces[val[0]],
        city: cityData[val[0]].sub[0].name,
        citys: citys,
        county: cityData[val[0]].sub[0].sub[0].name,
        countys: countys,
        values: val,
        value: [val[0], 0, 0]
      })
      return
    }
    if (val[1] !== t[1]) {
      console.log('city no')
      const countys = []
      for (let i = 0; i < cityData[val[0]].sub[val[1]].sub.length; i++) {
        countys.push(cityData[val[0]].sub[val[1]].sub[i].name)
      }
      this.setData({
        city: this.data.citys[val[1]],
        county: cityData[val[0]].sub[val[1]].sub[0].name,
        countys: countys,
        values: val,
        value: [val[0], val[1], 0]
      })
      return
    }
    if (val[2] !== t[2]) {
      // console.log('county no')
      this.setData({
        county: this.data.countys[val[2]],
        values: val,
        value: [val[0], val[1], val[2]]
      })
      return
    }
  },
  /**
   * 地区显示开关
   */
  open: function () {
    this.setData({
      condition: !this.data.condition
    })
  },
  /**
   * 添加店铺图片
   */
  addPic () {
    this.setData({
      showMain: false
    })
  },
  /**
   * 选择地址
   */
  addMapSite () {
    var that = this
    wx.chooseLocation({
      success (res) {
        // console.log(res)
        that.setData({
          shopAddress: res.name || res.address || '添加地图标记'
        })
      }
    })
    // todo 添加地址后展示地址
  },
  /**
   * 保存上传后的店铺图片
   */
  saveShopImg () {
    this.setData({
      showMain: true
    })
    if (this.data.upStatus === 1) {
      this.setData({
        addPicText: '重新上传图片'
      })
    }
  },
  /**
   * 上传门脸图
   */
  upFacePic (e) {
    var that = this
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths[0]
        // console.log(tempFilePaths)
        if (e.currentTarget.dataset.shop === 'faceImg') {
          that.setData({
            faceImg: tempFilePaths
          })
        } else if (e.currentTarget.dataset.shop === 'insideImg') {
          that.setData({
            insideImg: tempFilePaths
          })
        } else if (e.currentTarget.dataset.shop === 'IdFaceImg') {
          that.setData({
            IdFaceImg: tempFilePaths
          })
        } else if (e.currentTarget.dataset.shop === 'licenseImg') {
          that.setData({
            licenseImg: tempFilePaths
          })
        } else if (e.currentTarget.dataset.shop === 'restaurantLicenseImg') {
          that.setData({
            restaurantLicenseImg: tempFilePaths
          })
        }
        that.setData({
          upStatus: 1
        })
      }
    })
  },
  /**
   * 显示资质信息
   */
  nextStep () {
    // todo判断必要信息是否完整继续下一步
    this.setData({
      hiddenMain: true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
    // TODO: onLoad
    var that = this
    tcity.init(that)
    var cityData = that.data.cityData
    const provinces = []
    const citys = []
    const countys = []
    for (let i = 0; i < cityData.length; i++) {
      provinces.push(cityData[i].name)
    }
    // console.log('省份完成')
    for (let i = 0; i < cityData[0].sub.length; i++) {
      citys.push(cityData[0].sub[i].name)
    }
    // console.log('city完成')
    for (let i = 0; i < cityData[0].sub[0].sub.length; i++) {
      countys.push(cityData[0].sub[0].sub[i].name)
    }
    that.setData({
      'provinces': provinces,
      'citys': citys,
      'countys': countys,
      'province': cityData[0].name,
      'city': cityData[0].sub[0].name,
      'county': cityData[0].sub[0].sub[0].name
    })
    // console.log('初始化完成')
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
