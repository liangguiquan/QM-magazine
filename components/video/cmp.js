// components/video/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    src: String,
    poster: String,
    duration: String,
    mainTitle: String,
    videoId: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    showPoster: true
  },

  // attached() {   // 组件的生命周期函数
  //   this._getVideoInfo();
  // },

  lifetimes: { // 组件的生命周期函数
    create() {

    },

    attached() {
      this._getVideoInfo();
    },

    ready() {  // 可以写在lifetimes里面，也可以写在外面

    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onPlay() {
      this._toggleVideoPoster();
      this.video.play();
    },

    onMaskTap() {
      this._toggleVideoPoster();
      // 视频停止
      this.video.seek(0); // 重头播放
      this.video.stop();
    },

    onVideoEnd() {
      this._toggleVideoPoster();
    },

    _toggleVideoPoster() {  // _代表私有的方法
      // 切换poster
      this.setData({
        showPoster: !this.data.showPoster,
      });

    },

    _getVideoInfo() {
      const id = this.properties.videoId;
      this.video = wx.createVideoContext(id, this);
    },

    // _playVideo() {
      // 视频播放
      // const id = this.properties.videoId;
      // const video = wx.createVideoContext(id, this);
      // video.play();
    // },

    // _stopVideo() {
    //   视频停止
    //   const id = this.properties.videoId;
    //   const video = wx.createVideoContext(id, this);
    //   video.seek(0); // 重头播放
    //   video.stop();
    // }


  }
})
