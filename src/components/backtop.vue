<template>
<transition name='slide-fade'>
    <div class='backtop' v-show='isShow' @click='getTop'>
    <i class="iconfont icon-xiangshang"></i>
  </div>
</transition>
</template>
<script>
export default {
  name: 'backtop',  // 这个是export出去的组件名，我定义为BackTop
  props: {
    scrollmyself: {
      type: Boolean,  // 这是选择滚动对象的props值，如果滚动的对象是当前组件的父元素，就设置scrollObj为true.如果没有设置就默认为window对象
      default: false
    }
  },
  data () {
    return {
      isShow: false,
      target: ''
    }
  },
  methods: {
    showIcon () {
  //  根据scrollTop的值来判断是否显示返回顶部的icon
      if (this.target.scrollTop > 100) {
        this.isShow = true
      } else if (this.target.scrollTop < 100) {
        this.isShow = false
      }
    },
    getTop () {
// 点击icon之后自动返回顶部的函数
      let timer = setInterval(() => {
        let top = this.target.scrollTop
        let speed = Math.ceil(top / 5)
        this.target.scrollTop = top - speed
        if (top === 0) {
          clearInterval(timer)
        }
      }, 0)
    }
  },
  mounted () {
    // 通过这个target来判断当前的滚动监听对象是谁
    if (this.scrollmyself) {
      this.target = this.$el.parentNode
    } else {
      this.target = document.body
    }
    this.target.addEventListener('scroll', this.showIcon)
  },
  beforeDestroy () {
   //  组件销毁的时候，需要删除scroll的监听事件。
    this.target.removeEventListener('scroll', this.showIcon)
  }
}
</script>
<style lang="scss">
	.backtop{
	    position: fixed;
	    text-align: center;    
	    overflow: hidden;
	    display: flex;
	    border: 1px solid #e1e1e1;
	    border-radius: 50%;
	    z-index: 1000;
	    background: #fff;
	    right: 0.12rem;
	    bottom: 0.82rem;
	    width: 0.46rem;
	    height: 0.46rem;
	    justify-content: center;
	    align-items: center;
	    i{
	        font-size: 18px;
	        color: #333;
	    }
	    
	}
	
</style>