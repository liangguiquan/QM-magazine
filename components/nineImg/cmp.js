// components/nineImg/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    mainTitle: String,
    imgArr: Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    imgArr: ['http://i0.hdslb.com/bfs/article/272496d65c22a5cf62d39b80871ef10d6fcfecb3.png',
      'http://i0.hdslb.com/bfs/article/7cbcb3001300029950b304ab21a4753ec8da4e32.png',
      'http://i0.hdslb.com/bfs/article/86f7d2ac607c02789e9db7aff5d1e38b42b64d01.jpg',
      'http://gss0.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/9c16fdfaaf51f3de254b789498eef01f3b297941.jpg',
      'http://p0.ifengimg.com/pmop/2018/0606/AFC19EC434B13DB84F27EC03140027D735EA3C354_size28_w554_h783.jpeg',
      'http://pic2.58cdn.com.cn/zhuanzh/n_v268b308001d8843eda3e37b6587e92447.jpg?w=750&h=0',
      'http://i0.hdslb.com/bfs/archive/8b8d8f02a373108e3a5f8c3274804eac91aaa5bf.jpg',
      'http://i0.hdslb.com/bfs/article/22eab6d2354a5f8f576e68d8a168d18fc55e2d9e.jpg',
      'http://pic2.58cdn.com.cn/zhuanzh/n_v268b308001d8843eda3e37b6587e92447.jpg?w=750&h=0',
      'http://i0.hdslb.com/bfs/article/272496d65c22a5cf62d39b80871ef10d6fcfecb3.png',
      'http://i0.hdslb.com/bfs/article/7cbcb3001300029950b304ab21a4753ec8da4e32.png',
      'http://i0.hdslb.com/bfs/article/86f7d2ac607c02789e9db7aff5d1e38b42b64d01.jpg',
      'http://gss0.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/9c16fdfaaf51f3de254b789498eef01f3b297941.jpg',
      'http://p0.ifengimg.com/pmop/2018/0606/AFC19EC434B13DB84F27EC03140027D735EA3C354_size28_w554_h783.jpeg',
      'http://pic2.58cdn.com.cn/zhuanzh/n_v268b308001d8843eda3e37b6587e92447.jpg?w=750&h=0',
      'http://i0.hdslb.com/bfs/archive/8b8d8f02a373108e3a5f8c3274804eac91aaa5bf.jpg',
      'http://i0.hdslb.com/bfs/article/22eab6d2354a5f8f576e68d8a168d18fc55e2d9e.jpg',
      'http://pic2.58cdn.com.cn/zhuanzh/n_v268b308001d8843eda3e37b6587e92447.jpg?w=750&h=0']
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap(e) {
      // console.log(e, e.currentTarget.dataset.index);
      const index = e.currentTarget.dataset.index;
      const array = this.data.imgArr;
      wx.previewImage({  // 图片预览
        urls: this.data.imgArr,
        current: array[index]
      })
    }
  }
})
