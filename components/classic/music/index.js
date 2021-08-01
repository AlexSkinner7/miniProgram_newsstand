// components/classic/music/index.js
import {
  classicBeh
} from '../classic-beh.js'
const mMgr = wx.getBackgroundAudioManager()

Component({
  /**
   * 组件的属性列表
   */
  behaviors: [classicBeh],
  properties: {
    src: String,
    title: String,
  },

  /**
   * 组件的初始数据
   */
  data: {
    playing: false,
    pauseSrc: 'images/player@pause.png',
    playSrc: 'images/player@play.png',
  },

  attached: function () {
    if(!this.data.playing)[
      this.onPlay()
    ]
    this._recoverStatus()
    this._monitorSwitch()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onPlay: function () {
      if (!this.data.playing) {
        this.setData({
          playing: true
        })
        mMgr.src = this.properties.src;
        mMgr.title = this.properties.title;
      } else {
        this.setData({
          playing: false
        })
        mMgr.pause();
      }
    },
    _recoverStatus: function () {
      if (mMgr.paused) {
        this.setData({
          playing: false
        })
        return
      }
      if (this.properties.src === mMgr.src) {
        this.setData({
          playing: true
        })
      }
    },
    _monitorSwitch: function () {
      mMgr.onPlay(() => {
        console.log('onPlay');
        this._recoverStatus()
      })
      mMgr.onPause(() => {
        console.log('onPause');
        this._recoverStatus()
      })
      mMgr.onStop(() => {
        this._recoverStatus()
      })
      mMgr.onEnded(() => {
        this._recoverStatus()
      })
    }
  }
})