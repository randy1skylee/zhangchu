<template>
	<div id="huodong">
		<div class="shH_header">
	        <ul class="sh_clearfixed">
	            <li><router-link to="/index" class="sh_ell">首页</router-link></li>
	            <li></li>
	            <li><a href="###" class="sh_ell">活动</a></li>
	        </ul>
	        <span><a href="###">
	            <i></i>
	        </a></span>
	    </div>
	    <div class="headerDown"></div>
	    <!-- <Loading v-if="isShow"/> -->
	    <div class="shH_list">
	        <ul>
	            <li v-for="item in showList.data">
	                <router-link to="/huobottom">
	                <div class="shH_listImg">
	                    <a href="###">
	                        <img :src="item.image">
	                        <div class="shH_listText">
	                            <p>2017-09-30</p>
	                            <p>{{item.user_count}}人参与</p>
	                        </div>
	                        <div class="shH_end">已结束</div>
	                    </a>
	                </div>
	                </router-link>
	            </li>
	        </ul>
	        <div class="shH_surplus" @click="addList" v-if="showList.total-num*showList.size>0">
	            还剩下<span class="shH_num">{{showList.total-num*showList.size}}</span>个活动
	        </div>
	    </div>
	</div>
</template>

<script>
	// import Loading from './Load'
	export default {
		data(){
            return{
                showList:{},
                num:1,
                isShow: true
            }
        },
        created(){
            this.$http.get("http://api.izhangchu.com/",{
                params:{
                    methodName:"ShequActivity",
                    version:4.3,
                    page:1,
                    size:10,
                    user_id:0
                }
            }).then((res)=>{
                this.showList = res.data.data;
                this.isShow = false;
            })
        },
        // components: {
        // 	Loading
        // },
        methods:{
        	addList(){
        		this.num++;
        		this.$http.get("http://api.izhangchu.com/",{
                    params:{
                        methodName:"ShequActivity",
                        version:4.3,
                        page:this.num,
                        size:10,
                        user_id:0
                	}
                }).then((res)=>{
                    this.showList.data = this.showList.data.concat(res.data.data.data);
                });
        	}
        }
	}
</script>
<style scoped>
/*.....头部......*/
.shH_header{
	height: 2.2rem;
	line-height:2.2rem;
	position:fixed;
	top:0;
	border-bottom:1px solid #f2f2f2;
	background:#fff;
	width:100%;
	box-sizing:border-box;
	z-index: 2;
	min-width:320px;
	/*max-width:640px;*/
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
/*.......列表......*/
.shH_list{
	margin-top:.4rem;
}
.shH_listImg{
	min-height:2.5rem;
	overflow: hidden; 
}
.shH_list ul li{
	margin-bottom:.2rem;
}
.shH_list ul li a{
	display:block;
	height:100%;
	font-size:0;
	position:relative;
}
.shH_list ul li img{
	width:100%;
	height:;
}
.shH_listText{
	height:2rem;
	line-height:2rem;
	background:#fff;
	width:100%;
	text-align:center;
	font-weight:500;
}
.shH_listText p:first-of-type{
	color:#464646;
	font-size:.65rem;
	float:right;
	margin-right:.75rem;
}
.shH_listText p:last-of-type{
	color:#464646;
	font-size:.6rem;
	line-height:2rem;
	float:left;
	margin-left:.75rem;
}
.shH_end{
	background:#7a7a7a;
	color:#e0e0e0;
	position:absolute;
	top:2rem;
	right:0;
	width:5rem;
	height:1rem;
	line-height:1rem;
	z-index: 1;
	font-size:.55rem;
	text-align:center;
	transform:rotate(45deg);
	margin-right:-1.5rem;
	margin-top:-1.5rem;
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