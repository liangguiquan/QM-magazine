// components/articleList/cmp.js

import { IndexModel } from "../../models/index.js";
const indexModel = new IndexModel();

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    articleList: {
      type: Array,
      value: [],
      observer() {
        // console.log('adasf') 当属性改变时触发此函数
      }
    },
    more: {
      type: String,
      value: '',
      observer: 'loadMore'  //执行loadMore函数
    },
    magazineId: {
      type: Number,
      value: 0,
      observer: "hasMoreData"
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    loading: false,
    noMoreData: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    loadMore() {
      if (this._isLock() || this.data.noMoreData) {  // 加载数据时，判断是否上锁    noMoreData 没有更多数据
        return
      };

      this._loadLock();

      const magazineId = this.data.magazineId;
      const start = this.data.articleList.length;
      indexModel.getArticleList(magazineId, start).then(res => {
        this._setMoreData(res);
        this._unLoadLock();
      })
    },

    _isLock() {
      return this.data.loading
    },

    _loadLock() {
      this.setData({
        loading: true
      })
    },

    _unLoadLock() {
      this.setData({
        loading: false
      })
    },

    _setMoreData(list){
        const combineList = this.data.articleList.concat(list);

        if(combineList.length === this.data.articleList.length){
          this.setData({
            noMoreData: true
          })
          return
        }

        this.setData({
          articleList: combineList,
        });
    },


    hasMoreData(){
      this.setData({
        noMoreData: false
      })
    },

  }


})
