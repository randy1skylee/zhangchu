<template>
	<div id="xinshou">
		 <!-- 头部 -->
        <div class="shH_header">
            <ul class="sh_clearfixed">
                <li><router-link to="/index" class="sh_ell">首页</router-link></li>
                <li>></li>
                <li><a href="###" class="sh_ell">新手入门</a></li>
            </ul>
            <span><a href="###">
                <i></i>
            </a></span>
        </div>
        <div class="headerDown"></div>
        <!-- 菜单 -->
        <div class="shX_nav">
            <ul class="sh_clearfixed">
                <li class="shX_navActive" v-for="item in topList">
                    <img :src="item.logo">
                    <p class="sh_ell">{{item.name}}</p>
                </li>
            </ul>
        </div>
        <!-- 列表 -->
        <div class="shX_list">
            <ul class="sh_clearfixed">
                <li v-for="item in showList.data">
                    <a href="###">
                        <img :src="item.image">
                        <div class="sh_clearfixed">
                            <p class="sh_ell">{{item.title}}</p>
                            <span>浏览量：{{item.views}}</span>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <div class="shH_surplus" @click="addList" v-if="showList.total-num*showList.size>0">
            还剩下<span class="shH_num">{{showList.total-num*showList.size}}</span>篇
        </div>
	</div>
</template>

<script>
	export default {
		 data(){
                return{
                    topList:{},
                    showList:{},
                    num:1,
                   // last:""
                }
            },
            created(){
                this.$http.get("http://api.izhangchu.com/",{
                    params:{
                        methodName:"TourLogo",
                        version:4.4,
                        user_id:0
                    }
                }).then((res)=>{
                    this.topList = res.data.data.logos;
                });
                this.$http.get("http://api.izhangchu.com/",{
                    params:{
                        methodName:"TourIndex",
                        version:4.4,
                        page:1,
                        size:10,
                        type:2,
                        catid:7
                    }
                }).then((res)=>{
                    this.showList = res.data.data;
                   // this.last = this.showList.total-this.num*this.showList.size;
                })
            },
            methods:{
            	addList(){
            		
            		this.num++;
            		this.$http.get("http://api.izhangchu.com/",{
	                    params:{
	                        methodName:"TourIndex",
	                        version:4.4,
	                        page:this.num,
	                        size:10,
	                        type:2,
	                        catid:7
	                    }
	                }).then((res)=>{
	                    this.showList.data = this.showList.data.concat(res.data.data.data);
	                });
	                /*if(this.showList.total-this.num*this.showList.size>0){
	                	this.last = this.showList.total-this.num*this.showList.size;
	                }else{
	                	this.last=0;
	                }*/
            	}
            }
	}
</script>
<style scoped>
.sh_clearfixed:after{
	content:".";
	font-size:0;
	display:block;
	clear:both;
}
.sh_ell{
	overflow:hidden;
	white-space:nowrap;
	text-overflow:ellipsis;
}
/*.....头部......*/
.shH_header{
	height: 2.2rem;
	line-height:2.2rem;
	position:fixed;
	top:0;
	left:0;
	border-bottom:1px solid #f2f2f2;
	background:#fff;
	width:100%;
	box-sizing:border-box;
	z-index: 2;
}
.shH_header ul{
	padding-left:.5rem;
	font-size:.8rem;
	width:82%;
	height:2.2rem;
}
.shH_header li{
	height:2.2rem;
	padding-right:.3rem;
	float:left;
}
.shH_header li a{
	color:#333;
	display:inline-block;
}
.shH_header span{
	position:absolute;
	right:0;
	top:0;
	height:100%;
}
.shH_header span a{
	width:1.6rem;
	height:2.2rem;
	line-height:2.1rem;
	display:block;
	text-align:center;
}
.shH_header span a i{
	display:inline-block;
	height:1.4rem;
	width:1.4rem;
	background:url(../assets/img_sh/menu.png) no-repeat;
	background-size:cover;
	margin-top:.45rem;
}
.headerDown{
	height: 2.2rem;
}
/*.......nav.......*/
.shX_nav{
	height:4.2rem;
	width:100%;
	background:#fff;
	position:fixed;
	top:2.2rem;
	left:0;
	z-index:2;
	border-bottom:1px solid #eee;
	box-sizing:border-box;
	overflow-x:scroll;
}
.shX_nav ul{
	width:32.8rem;
	box-sizing:border-box;
	height: 100%;
}
.shX_nav::-webkit-scrollbar{
	display:none;
}
.shX_nav ul li{
	width:3.7rem;
	margin-left:.4rem;
	padding:.3rem 0;
	font-size:.7rem;
	height:100%;
	float:left;
	text-align:center;
	box-sizing:border-box;
}
.shX_nav ul li img{
	width:2.4rem;
	height:2.4rem;
	border-radius:50%;
	display:block;
	margin:0 auto;
	margin-bottom:.2rem;
}
.shX_nav ul li p{
	height:1rem;
	line-height: 1rem;
}
.shX_navActive{
	color:#ff8f5c;
}
/*.....列表....*/
.shX_list{
	background:#f8f8f8;
	width:100%;
	margin-top:4.6rem;
}
.shX_list li{
	background:#fff;
	margin-top:.4rem;
}
.shX_list li a{
	display:block;
	min-height:8.5rem;
}
.shX_list li a img{
	height:9.96rem;
	width:100%;
}
.shX_list li a div{
	padding:.5rem;
}
.shX_list li a div p{
	color:#464646;
	float:left;
	height:1rem;
	line-height:1rem;
	font-size:.75rem;
	width:60%;
	font-weight:500;
}
.shX_list li a div span{
	float:right;
	color:#a0a0a0;
	font-size:.6rem;
	height:1rem;
	line-height:1rem;
	width:38%;
	text-align:right;
}
/*......底部....*/
.shH_surplus{
	margin:.7rem .5rem .5rem;
	padding:0 .6rem;
	background:#ddd;
	color:#666;
	text-align:center;
	height:1.6rem;
	line-height:1.6rem;
	font-size:.8rem;
	border-radius:.8rem;
}
</style>