<template>
    <div class="main">
        <Header title="我的喵喵"/>
        <div id='content'>
            <Login/>
        </div>
        <Tarbar/>
    </div>
</template>

<script>
import Header from '@/components/header';
import Tarbar from '@/components/tarbar';
import Login  from  '@/components/login';

export default {
    name:'mine',
    components:{
        Header,
        Login,
        Tarbar
    }
}
</script>

<style>

</style>
