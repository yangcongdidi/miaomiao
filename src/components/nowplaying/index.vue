<template>
        <div class="movie_body" ref='movieBody'>
            <loading v-if="loading"/>
            <myScroll v-else :handlePullDown=this.getMovieList :isShow=isShow>
                <ul>
                    <li v-for="item in movieList" :key="item.id" v-if="item.sc!=0">
                        
                            <div class="pic_show" @tap='handleToDetail(item.id)'><img :src="item.img|setWH('/160.180/')"></div>
                            <div class="info_list" @tap='handleToDetail(item.id)'>
                                <h2>{{item.nm}} <img v-if="item.version=='v3d imax'" src="@/assets/maxs.png"/></h2>
                                <p>观众评 <span class="grade">{{item.sc}}</span></p>
                                <p>{{item.star}}</p>
                                <p>{{item.showInfo}}</p>
                            </div>
                            <div class="btn_mall">
                                购票
                            </div>
                    
                    </li>
                </ul>
            </myScroll>
     
        </div>
       
  
</template>

<script>
import {message} from '@/components/js'
export default {
    name:'nowplaying',
    data(){
        return {
            movieList:[],
            pullingDownMsg:'',
            isShow:true,
            loading:true
        }
    },
 
    activated(){
        this.getMovieList(this.$store.state.city.id);
        this.getNowCity();
    
    },
    filters:{
        setWH(url,wh){

            return url.replace('/w.h/',wh)
        }
    },
    methods:{
        handleToDetail(id){
            this.$router.push({
                path:'/movie/detail/'+id,

            })
        },
        getMovieList(cityId){
            this.isShow=true;
            this.axios.get('/api/movieOnInfoList?cityId='+cityId).then((res)=>{
                if(res.data.msg=='ok'){
                        this.movieList =res.data.data.movieList;
                        this.isShow=false;
                        this.loading=false;
                }
            })
        },
        getNowCity(){
            this.axios.get('/api/getLocation').then((res)=>{
                if(res.data.msg=='ok'){
                    var cityNm=res.data.data.nm;
                    var cityId=res.data.data.id;
                   
                }
                console.log(this.$store.state.city.nm);
                if(cityNm==this.$store.state.city.nm){return;}
                setTimeout(() => {
                        message({
                        title:'检测到你当前城市是',
                        content:cityNm,
                        cannel:'取消',
                        ok:'切换城市',
                        handleCannel(){
                            
                        },
                        handleOk(){
                            window.localStorage.setItem('cityNm',cityNm);
                            window.localStorage.setItem('cityId',cityId);
                            this.$store.commit('city/CITY_INFO',{nm:cityNm,id:cityId});
                
                        }
                     })
                }, 3000);
        


            })

            

        }
    }
}
</script>

<style scoped>
#content .movie_body{ flex:1; overflow:auto;}
.movie_body ul{ margin:0 12px; overflow: hidden;}
.movie_body ul li{ margin-top:12px; display: flex; align-items:center; border-bottom: 1px #e6e6e6 solid; padding-bottom: 10px;}
.movie_body .pic_show{ width:64px; height: 90px;}
.movie_body .pic_show img{ width:100%;}
.movie_body .info_list { margin-left: 10px; flex:1; position: relative;}
.movie_body .info_list h2{ font-size: 17px; line-height: 24px; width:150px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
.movie_body .info_list p{ font-size: 13px; color:#666; line-height: 22px; width:200px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
.movie_body .info_list .grade{ font-weight: 700; color: #faaf00; font-size: 15px;}
.movie_body .info_list img{ width:50px; position: absolute; right:10px; top: 5px;}
.movie_body .btn_mall , .movie_body .btn_pre{ width:47px; height:27px; line-height: 28px; text-align: center; background-color: #f03d37; color: #fff; border-radius: 4px; font-size: 12px; cursor: pointer;}
.movie_body .btn_pre{ background-color: #3c9fe6;}




</style>
