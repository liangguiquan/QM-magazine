// components/bigImg/cmp.js
Component({
  /**
   * 组件的属性列表
   */

  // properties的优先级比data更高
  properties: {
    imgSrc: String,
    mainTitle: String
    // imgSrc:{
    //   type: String,
    //   value: 'http://pic2.58cdn.com.cn/zhuanzh/n_v268b308001d8843eda3e37b6587e92447.jpg?w=750&h=0',  
    //   observer: function(newValue, oldValue, changePath){
    //     // 当发生改变时触发
    //     console.log(newValue, oldValue, changePath);
    //   }
    // },
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    // src: 'http://pic2.58cdn.com.cn/zhuanzh/n_v268b308001d8843eda3e37b6587e92447.jpg?w=750&h=0',
    // title: '打上火花打上火花打上火花打上火花打上火花打上火花'
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
