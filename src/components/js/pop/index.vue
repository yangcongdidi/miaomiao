<template>
    <div class="pop">
        <h3>{{title}}</h3>
        <p>{{content}}</p>
        <div>
            <div @click='handleCannel'>{{cannel}}</div>
            <div @click='handleOk'>{{ok}}</div>
        </div>
    </div>
</template>

<script>

export default {
    name:'MyPop'
}
</script>

<style scoped>
.pop{position: fixed;top: 50%;left: 50%;width: 150px;text-align: center;    box-shadow: 0 0 15px #868686;height: 130px;margin-left: -75px;margin-top: -68px;background: white;border-radius: 15px}
.pop h3{padding:0px 10px ;text-align: left}
.pop p{margin-top: 10px;font-size: 20px;}
.pop >div{position: absolute;bottom: 0;display: flex;width: 100%;height: 30px;line-height: 30px;border-top: 1px solid #d8d6d6;}
.pop >div div{border-right: 1px solid #d8d6d6;flex: 1;}
.pop >div div:last-child{border-right:none}
</style>
