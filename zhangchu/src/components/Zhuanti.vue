<template>
	<div id="zhuanti">
		<div>
			<div class="lxz-head">
				<div class="lxz-head1">
					<ul class="clearfixed">
						<li><router-link to="/index">首页</router-link></li>
						<li>&gt;</li>
						<li><a href="javascript:void(0)">专题列表</a></li>
					</ul>
					<div class="lxz-head2">
						<a href="javascript:void(0)" class="lxz-head3">
							<i class="lxz-headico"></i>
						</a>
					</div>
				</div>
			</div>
			<div class="lxz-main">
				<ul>
					<li class="lxz-md" v-for="item in data"> 
						<div class="lxz-item">
							<router-link to="/lidong">
								<img :src="item.image">
								<span class="lxz-title">{{item.title}}</span>
								<span class="lxz-title2">{{item.description}}</span>
							</router-link>
						</div>
					</li>
					
				</ul>
				<div class="lxz-load" @click="more">还剩下<span class="lxz-num">{{data1.total-count*data1.size}}</span>专题</div>
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
					methodName:"TopicList",
					version:1.0,
					user_id:0,
					page:1,
					size:10
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
                        methodName:"TopicList",
                        version:1.0,
                        user_id:0,
                        page:this.count,
                        size:10
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
    position: fixed;
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
    background: url(../assets/imgzt/menu.png);
    width: 1.4rem;
    height: 1.4rem;
    margin-top: 0.45rem;
    background-size: cover;
    vertical-align: top;
}
.lxz-main{
    margin-top:2.6rem;
}
.lxz-md{
    background-color: #fff;
    margin-top: .4rem;
    padding: 0.5rem .5rem;
    box-shadow: 0px 0px 1px #ccc;
}
.lxz-item{
    margin-top: 0rem;
    margin-bottom: .3rem;
}
.lxz-item img{
    max-width: 100%;
    font-size: 0px;
    display: block;
    margin: 0 auto;
    border-radius:4px;
}
.lxz-title{
    margin-top: .2rem;
    margin-bottom: .2rem;
    color: #515151;
    font-size: 0.8rem;
    display:block;
}
.lxz-title2{
    display: block;
    color: #a3a3a3;
    font-size: 0.6rem;
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
}
</style>