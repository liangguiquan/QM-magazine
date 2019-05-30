// components/nav/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    magazineTypeArr: ['轻芒', '兴趣', '物质', '世界', '新事', '灵魂'],
    magazineIndex: 0,
    activeId: 'magazine0'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap(e){
      const lastIndex = this.data.magazineIndex;

      // console.log(e.currentTarget.dataset.index);
      const index = e.currentTarget.dataset.index;
      this.setData({
        magazineIndex: index,
        activeId: 'magazine' + (index === 0 ? 0 : index -1 )
      });

      // this.triggerEvent()   类似Vue中的$emit()，子组件触发父组件自定义事件   triggerEvent() 三个参数： 自定义事件名， 参数， 冒泡捕获(可以不写)
      // 参数会传递给具体的自定义事件e中的detail
      if(lastIndex == index){
        return;
      }
      this.triggerEvent("nav", {index: index}, {});
    }
  }
})
