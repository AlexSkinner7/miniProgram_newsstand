import {
  ClassicModel
} from '../../models/classic.js'
import {
  LikeModel
} from '../../models/like.js'

let classicModel = new ClassicModel();
let likeModel = new LikeModel();


// pages/classic/classic.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classic: null,
    latest: true,
    first: false,
    likeCount: 0,
    likeStatus: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    classicModel.getLatest((res) => {
      console.log(res);
      this.setData({
        classic: res,
        likeCount:res.fav_nums,
        likeStatus:res.like_status
      })
    })
  },

  onLike: function (event) {
    let likeStatus = event.detail.behavior;
    likeModel.like(likeStatus, this.data.classic.id, this.data.classic.type);
  },
  onNext: function (event) {
    this._updateClassic('next')
  },

  onPrevious: function (event) {
    this._updateClassic('previous')
  },

  _updateClassic: function (nextOrPrevious) {
    const index = this.data.classic.index;
    classicModel.getClassic(index, nextOrPrevious, (res) => {
    this._getLikeStatus(res.id, res.type)
      this.setData({
        classic: res,
        latest: classicModel.isLatest(res.index),
        first: classicModel.isFirst(res.index)
      })
    })
  },

  _getLikeStatus: function (artID, category) {
    likeModel.getClassicLikeStatus(artID, category,
      (res) => {
        this.setData({
          likeCount: res.fav_nums,
          likeStatus: res.like_status
        })
      })
  },
})