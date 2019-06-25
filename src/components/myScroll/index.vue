<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
        <transition name="fade">
                    <div class="tips" v-show="isShow" >正在更新中</div>
        </transition>
    </div>
    
</template>

<script>
import betterScroll from 'better-scroll'


export default {
    name:'betterScroll',
    props:{
        handlePullDown:{
            type:Function
        },
        handlePullUp:{
            type:Function
        },
        isShow:false
    },
    mounted(){
        let myScroll=new betterScroll(this.$refs.wrapper,{
            tap:true,
                pullDownRefresh: {
                threshold: 50, // 当下拉到超过顶部 50px 时，触发 pullingDown 事件
                stop: 20 // 刷新数据的过程中，回弹停留在距离顶部还有 20px 的位置
                },
                pullUpLoad: {
                    threshold: -30,
                    stop:10
            }
        })

        this.myScroll=myScroll

        myScroll.on('pullingUp',()=>{
            this.handlePullUp();
            setTimeout(() => {
                
                // 事情做完，需要调用此方法告诉 better-scroll 数据已加载，否则上拉事件只会执行一次
                myScroll.finishPullUp()
                }, 2000)
        })

        myScroll.on('pullingDown',()=>{
            this.handlePullDown();
                  
            setTimeout(() => {  
            // 事情做完，需要调用此方法告诉 better-scroll 数据已加载，否则上拉事件只会执行一次
            myScroll.finishPullDown();
            this.pullingDownMsg=''
            }, 1000)
        })
        
    },
    methods:{
        toScrollTop(y){
            this.myScroll.scrollTo(0,-y)
        }
    }
}
</script>

<style>
.wrapper{height: 100%;}
.tips {position: fixed;top:97px;width: 100%;text-align: center;height: 25px;line-height: 25px;background: yellowgreen;color: white;z-index: 999}
.fade-enter-active,.fade-leave-active{transition: all 1s}
.fade-enter {
    opacity: 0
  }
.fade-enter-to, .fade-leave {
    opacity: 1;
}
</style>
