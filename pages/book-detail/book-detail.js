// pages/book-detail/book-detail.js
import {
  BookModel
} from '../../models/book'
const bookModel = new BookModel()
import {
  LikeModel
} from '../../models/like.js'
const likeModel = new LikeModel()



Page({

  /**
   * 页面的初始数据
   */
  data: {
    bid: 0,
    book: [],
    comments: [],
    likeStatus: false,
    likeCount: 0,
    posting: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    wx.showLoading()
    let bid = options.bid;
    let book = await bookModel.getDetail(bid)
    let comments = await bookModel.getComment(bid)
    let {
      fav_nums,
      like_status
    } = await bookModel.getBookLikeStatus(bid)

    this.setData({
      bid,
      book,
      comments: comments.comments,
      likeStatus: like_status,
      likeCount: fav_nums
    })

    wx.hideLoading();
  },
  onLike: function (event) {
    let likeStatus = event.detail.behavior;
    likeModel.like(likeStatus, this.data.bid, 400);
  },
  onFakePost: function (params) {
    this.setData({
      posting: true
    })
  },
  onCancel: function (params) {
    this.setData({
      posting: false
    })
  },
  onPost: async function (event) {
    let comment = event.detail.text || event.detail.value;
    if (!this._commentValidator(comment)) return;

    let res = await bookModel.addShortComment(this.data.bid, comment);
    this._success(res,comment)
  },

  _success(res,comment) {
    if (res.msg === "ok") {
      wx.showToast({
        title: '添加成功'
      })
      this.data.comments.unshift({content:comment,nums:1});
      this.setData({
        comments:this.data.comments,
        posting:false
      })
    }
  },

  _commentValidator(comment) {
    if (comment.length > 12) {
      wx.showToast({
        title: '短评仅限12个字以内',
        duration: 2000
      })
      return false
    }
    return true
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})