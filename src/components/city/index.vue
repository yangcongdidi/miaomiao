<template>
			<div class="city_body">
				<div class="city_list">
					<div class="city_hot">
						<h2>热门城市</h2>
						<ul class="clearfix">
							<li v-for="item in hotList" :key="item.index">{{item.nm}}</li>
					
						</ul>
					</div>
					<div class="city_sort" ref='citySoft'>
						<div v-for="item in cityList" :key='item.index'>
							<h2>{{item.index}}</h2>
							<ul>
								<li v-for="cityItem in item.List" :key="cityItem.id">{{cityItem.nm}}</li>
							
							</ul>
						</div>	
					</div>
				</div>
				<div class="city_index">
					<ul>
						<li v-for="(item,index) in cityList" :key='item.index' @touchstart='handleLetterList(index)'>{{item.index}}</li>
					</ul>
				</div>
			</div>
</template>

<script>
export default {
	name:'city',
	data(){
		return {
			cityList:[],
			hotList:[]
		}
	},
	mounted(){
		this.axios.get('/api/cityList').then((res)=>{
			let cityes=res.data.data.cities;
		
			if(res.data.msg='ok'){
				let {cityList,hotList}=this.formatCityes(cityes);
				this.cityList=cityList;
				this.hotList=hotList;
				console.log(this.cityList)
			}

		})
	},
	methods:{
		formatCityes(cityes){
			let cityList=[];
			let hotList=[];
				//[{index:'A',List:[{py:'阿成'},{}]}]
				
				for(let i=0;i<cityes.length;i++){
					let firstLetter=cityes[i].py.substr(0,1).toUpperCase();
					if(toCom(firstLetter)==false){
						cityList.push({index:firstLetter,List:[{id:cityes[i].id,nm:cityes[i].nm,isHot:cityes[i].isHot}]})
					}else{
						for(let n=0;n<cityList.length;n++){
							if(cityList[n].index==firstLetter){
								cityList[n].List.push({id:cityes[i].id,nm:cityes[i].id,nm:cityes[i].nm,isHot:cityes[i].isHot});
							}
						}
					}

				}

				cityList.sort((firstItem,secondItem)=>{
					if(firstItem.index>secondItem.index){
						return 1;
					}else if(firstItem.index<secondItem.index){
						return -1;
					}else{
						return 0;
					}
				})

				for(let k=0;k<cityList.length;k++){
				
					for(let n=0;n<cityList[k].List.length;n++){
						
						if(cityList[k].List[n].isHot==1){
							hotList.push(cityList[k].List[n]);
						}
					}
		
				}
				
				function toCom(firstLetter){
					for(let j=0;j<cityList.length;j++){
						if(cityList[j].index==firstLetter){
							return true;
						}
					}
					return false;
				}
				return {
					cityList,
					hotList
				}
		},
		handleLetterList(index){
			let dom=this.$refs.citySoft.getElementsByTagName('h2');
			console.log(dom[index].offsetTop);
			this.$refs.citySoft.parentNode.scrollTop=dom[index].offsetTop;
		}
	}
}
</script>

<style scoped>

#content .city_body{ margin-top: 45px; display: flex; width:100%; position: absolute; top: 0; bottom: 0;}
.city_body .city_list{ flex:1; overflow: auto; background: #FFF5F0;}
.city_body .city_list::-webkit-scrollbar{
    background-color:transparent;
    width:0;
}
.city_body .city_hot{ margin-top: 20px;}
.city_body .city_hot h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
.city_body .city_hot ul{}
.city_body .city_hot ul li{ float: left; background: #fff; width: 29%; height: 33px; margin-top: 15px; margin-left: 3%; padding: 0 4px; border: 1px solid #e6e6e6; border-radius: 3px; line-height: 33px; text-align: center; box-sizing: border-box;}
.city_body .city_sort{}
.city_body .city_sort div{ margin-top: 20px;}
.city_body .city_sort h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
.city_body .city_sort ul{ padding-left: 10px; margin-top: 10px;}
.city_body .city_sort ul li{ line-height: 30px; line-height: 30px;}
.city_body .city_index{ width:20px; display: flex; flex-direction:column; justify-content:center; text-align: center; border-left:1px #e6e6e6 solid;}


</style>
