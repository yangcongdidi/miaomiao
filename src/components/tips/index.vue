<template>
         <transition name="fade">
                    <div class="tips">正在更新中</div>
        </transition>
</template>

<script>
export default {
    props:{
        isShow:false
    }
}
</script>

<style>
.tips {position: fixed;top:97px;width: 100%;text-align: center;height: 25px;line-height: 25px;background: yellowgreen;color: white;z-index: 999}
.fade-enter-active,.fade-leave-active{transition: all 1s}
.fade-enter {
    opacity: 0
  }

  .fade-enter-to, .fade-leave {
    opacity: 1;
  }
</style>
