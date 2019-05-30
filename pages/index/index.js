
// import {Request} from "../utils/request.js";
// const request = new Request;

// Page({
//   onLoad: function(options){
//     request.getData({
//       url: '/getRecommendInfo/0'
//     }).then(res=>{
//       console.log(res);
//     })

//     request.getData({
//       url: '/getMarkTypeList/0'
//     }).then(res=>{
//       console.log(res);
//     })

//     request.getData({
//       url:'/getIndexArticleList/0/0'
//     }).then((res)=>{
//       console.log(res);
//     })

//   }
// })


import { random } from "../../utils/randomStr";

import { IndexModel } from "../../models/index.js";
const indexModel = new IndexModel();

Page({
  data: {
    articleList: [],
    markList: [],
    recommend: [],
    getMore: '',
    magazineId: 0,
    loading: true
  },

  onLoad: function (options) {
    this.getData();
    // wx.showLoading(); // 系统默认loading图

  },

  onCatalog(){
    wx.switchTab({  // 切换tabbar
      url: '/pages/catalog/catalog'
    })
  },

  onNav(e){
    // console.log(e);
    const magazineId = e.detail.index;
    this.setMagazineId(magazineId);
    this.resetData();
    // 切换导航时，回滚到顶部
    this.scrollpPageToTop();

    this.getData(magazineId);
  },


  getData(magazineId) {
    // indexModel.getArticleList().then((res)=>{
    //   console.log(res);
    // })

    // indexModel.getMarkList().then((res)=>{
    //   console.log(res);
    // })

    // indexModel.getRecommendInfo().then((res)=>{
    //   console.log(res);
    // })

    const articleList = indexModel.getArticleList(magazineId);
    const markList = indexModel.getMarkList(magazineId);
    const recommend = indexModel.getRecommendInfo(magazineId);

    Promise.all([articleList, markList, recommend]).then(res => {
      // console.log(res[0], res[1], res[2]);
      this.setData({
        articleList: res[0],
        markList: res[1],
        recommend: res[2]
      })
      // wx.hideLoading();  // 隐藏系统默认loading图
      this.hideLoading();
    });

  },

  // 上拉触底
  onReachBottom(){  
    this.setData({
      getMore: random(20)
    })
  },


  hideLoading(){
    this.setData({
      loading: false
    })
  },

  resetData(){
    this.setData({
      articleList: [],
      markList: [],
      recommend: [],
    })
  },

  setMagazineId(magazineId){
    this.setData({
      magazineId
    })
  },

  scrollpPageToTop(){
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 0
    })
  }



})
