import {
  HTTP
} from '../util/http.js'

class LikeModel extends HTTP {
  like(status, artId, type) {
    let url = `${status==='like'?'like':'like/cancel'}`;
    this.request({
      url: url,
      method: 'POST',
      data: {
        art_id: artId,
        type: type
      }
    })
  }

  getClassicLikeStatus(artID, category, sCallback) {
    this.request({
      url: `classic/${category}/${artID}/favor`,
      success: sCallback
    })
  }
}

export {
  LikeModel
}