import {
  HTTP
} from '../util/http-p.js'

class BookModel extends HTTP {
  getHotList() {
    return this.request({
      url: 'book/hot_list'
    })
  }
  getDetail(bid){
    return this.request({
      url: `book/${bid}/detail`
    })
  }

  getComment(bid){
    return this.request({
      url: `book/${bid}/short_comment`
    })
  }

  getBookLikeStatus(bid) {
    return this.request({
      url: `book/${bid}/favor`
    })
  }

  addShortComment(bid,content){
    return this.request({
      url: `book/add/short_comment`,
      method:'POST',
      data:{
        book_id:bid,
        content:content
      }
    })
  }

  search(start, q) {
    return this.request({
      url: 'book/search?summary=1',
      data: {
        q: q,
        start: start
      }
    })
  }

  getMyBookCount() {
    return this.request({
      url: 'book/favor/count'
    })
  }
}

export {
  BookModel
}