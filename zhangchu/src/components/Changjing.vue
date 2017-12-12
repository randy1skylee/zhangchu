<template>
	<div id="main">
		<div>
			<div class="lxz-head">
				<div class="lxz-head1">
					<ul class="clearfixed">
						<li><router-link to="/index">首页</router-link></li>
						<li>&gt;</li>
						<li><a href="#">场景</a></li>
					</ul>
					<div class="lxz-head2">
						<a href="javascript:void(0)" class="lxz-head3">
							<i class="lxz-headico"></i>
						</a>
					</div>
				</div>
			</div>
			<div class="lxc-main">
				<div class="lxc-mainTop">
					<ul class="clearfixed">
						<li v-for="item in data">
							<router-link to="/today">
								<img :src="item.scene_background">
								<div class="lxc-mainText">
									<span>#{{item.scene_title}}#</span>
									<span>{{item.dish_count}}道菜</span>
								</div>
								<div class="lxc-mainBg"></div>
								<div class="lxc-mainNew" v-if="item.is_new">NEW</div>
							</router-link>
						</li>
					</ul>
				</div>
				<div class="lxz-load" @click="more">还剩下<span class="lxz-num">{{data1.total-count*data1.size}}</span>个场景</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				data:[],
                count:1,
                data1:{}
			}
		},
		created:function(){
			this.$http.get("http://api.izhangchu.com/",{
				params:{
					methodName:"SceneList",
					version:4.2,
					page:1,
					size:9,
					user_id:0
				}
			}).then((res)=>{
				this.data = res.data.data.data;
                this.data1=res.data.data
			})
		},
         methods:{
            more:function(){
                this.count++;
                this.$http.get("http://api.izhangchu.com/",{
                    params:{
                        methodName:"SceneList",
                        version:4.2,
                        page:this.count,
                        size:9,
                        user_id:0
                    }
                }).then((res)=>{
                    this.data= this.data.concat(res.data.data.data);
                })
            }
        }
	}
</script>
<style scoped>
.clearfixed:after{
    content: ".";
    visibility: hidden;
    height: 0;
    clear: both;
    display: block;
}
/**/
.lxz-head{
    background-color: #fff;
    height: 2.2rem;
    line-height: 2.2rem;
    position: relative;
    width: 100%;
    left: 0;
    top: 0;
    z-index:2;
    border-bottom: 1px solid #f2f2f2;
}
.lxz-head a{
    color: #333;
}
.lxz-head1{
    min-width: 320px;
    max-width: 640px;
    margin: 0 auto;
    text-align: center;
    font-size: 0.8rem;
    position: relative;
    height: 2.2rem;

}
.lxz-head1 ul{
    padding-left: 0.5rem;
    height: 2.2rem;
    line-height: 2.2rem;
    width: 85%;
}
.lxz-head1 ul li{
    float: left;
    padding-right: 0.3rem;
    max-width: 45%;
    height: 2.2rem;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
}
.lxz-head2{
    position: absolute;
    right: 0;
    top: 0;
}
.lxz-head3{
    display: block;
    height: 2.2rem;
    line-height: 2.1rem;
    width: 1.6rem;
    text-align: center;
}
.lxz-headico{
    display:inline-block;
    background: url(../assets/imgb1/menu.png);
    width: 1.4rem;
    height: 1.4rem;
    margin-top: 0.45rem;
    background-size: cover;
    vertical-align: top;
}

/**/
.lxc-main{
    padding: 0.4rem 0;
    min-height: 10rem;
    background-color:#f8f8f8;
}
.lxc-mainTop{
    background-color: #fff;
    padding-bottom: 0.3rem;
}
.lxc-mainTop li{
    height: 7rem;
    margin-bottom: 0.075rem;
    position: relative;
    text-align: center;
    margin-top: 0;
    overflow: hidden;
    width: 33.333333333%;
    float: left;
}
.lxc-mainTop ul li:nth-child(3n+1){
    border-right: 0.05rem solid #fff;
}
.lxc-mainTop ul li:nth-child(3n-1){
    border-right: 0.025rem solid #fff;
    border-left: 0.025rem solid #fff;
}
.lxc-mainTop ul li:nth-child(3n+3){
    border-left: 0.05rem solid #fff;
}
.lxc-mainTop li img{
    width: 100%;
    height: 100%;
    max-width: 100%;
    font-size: 0px;
    display: block;
    margin: 0 auto;
}
.lxc-mainText{
    line-height: 0.75rem;
    width: 100%;
    z-index: 2;
    position: absolute;
    bottom: 0.3rem;
    text-align: center;
    color: #fff;
}
.lxc-mainText span{
    display:block;
    font-size: 0.6rem;
}
.lxc-mainText span:first-child{
    font-size:0.7rem;
    margin-bottom: 0.2rem;
}
.lxc-mainBg{
    background: rgba(0, 0, 0, 0.4);
    position: absolute;
    height: 100%;
    width: 100%;
    bottom: 0;
    z-index: 1;
}
.lxc-mainNew{
    position: absolute;
    width: 5.5rem;
    height: 1.5rem;
    line-height: 1.1rem;
    padding-top: 0.4rem;
    right: 0;
    background-color: #ff8f5d;;
    font-size: 0.5rem;
    overflow: hidden;
    z-index: 2;
    color: #FFFFFF;
    text-align: center;
    transform: rotate(45deg);
    top: 2rem;
    margin-right: -2.25rem;
    margin-top: -2.25rem;
}
.lxz-load{
    margin: .5rem;
    padding: 0 .6rem;
    text-align: center;
    background: #ddd;
    color: #666;
    font-size: .8rem;
    height: 1.6rem;
    line-height: 1.6rem;
    border-radius: .8rem;
    /*margin-top:0.1rem;*/
}
</style>