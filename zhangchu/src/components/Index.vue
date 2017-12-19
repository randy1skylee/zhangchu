<template>
	<div id="index">
		<div class="ch-header">
	    	<div class="ch-logo">
	    		<span><a href="#"><img src="http://pub.szzhangchu.com/web/v4.2/images/logo-white.png"></a></span>
	    	</div>
	    	<div class="ch-midsearch">
	    		<div class="ch-middle">
	    			<div class="ch-midinner">
	    				<div class="ch-holder" @click = "search()">
	    					<i>11</i>请输入菜名或者食材搜索
	    				</div>
	    			</div>
	    		</div>
	    	</div>
	    	<div class="ch-person">

	    		<span v-if = 'show'><router-link to="/myself"><img src="http://img.szzhangchu.com/1445429526387_9171386134.jpg@48h_48w_1e_1c.jpg"></router-link></span>
	    		<span v-else><router-link to="/denglu"><img src="http://pub.szzhangchu.com/web/v4.2/images/login-white.png"></router-link></span>
	    	</div>
	    </div>
	    <div class="ch-table">
	        <ul class="ch-clearfixed">
	            <li><a href="#">首页</a></li>
	            <li><router-link to="/meifood">美食</router-link></li>
	            <li><router-link to="/jiankang">健康</router-link></li>
	            <li><router-link to="/shicai">食材</router-link></li>
	            <li><router-link to="/wandao">万道佳肴</router-link></li>
	            <li><router-link to="/zhuanti">专题</router-link></li>
	            <li><router-link to="/changjing">场景</router-link></li>
	            <li><router-link to="/shequ">社区</router-link></li>
	            <li><router-link to="/huodong">活动</router-link></li>
	            <li><router-link to="/xinshou">新手入门</router-link></li>
	        </ul>
	    </div>
	    <div class="ch-banner">
	        <div>
	            <router-link to="/xinwen"><img src="http://img.szzhangchu.com/1507878956959_4652279158.jpg@640w_320h_1e_1c.jpg"></router-link>
	        </div>
	    </div>
	    <div class="ch-catalog">
	        <ul class="ch-clearfixed">
	            <li>
	                <router-link to="/shicai"><img src="http://pub.szzhangchu.com/web/v4.2/images/ico/xiaochao-ico.png"><span>三分钟小炒</span></router-link>
	            </li>
	            <li>
	                <router-link to="/shicai"><img src="http://pub.szzhangchu.com/web/v4.2/images/ico/jiachangcai-ico.png"><span>简易家常菜</span></router-link>
	            </li>
	            <li>
	                <router-link to="/shicai"><img src="http://pub.szzhangchu.com/web/v4.2/images/ico/huncai-ico.png"><span>荤菜帮</span></router-link>
	            </li>
	            <li>
	                <router-link to="/shicai"><img src="http://pub.szzhangchu.com/web/v4.2/images/ico/sucai-ico.png"><span>健康素菜</span></router-link>
	            </li>
	            <li>
	                <router-link to="/shicai"><img src="http://pub.szzhangchu.com/web/v4.2/images/ico/haixian-ico.png"><span>河鲜海味</span></router-link>
	            </li>
	            <li>
	                <router-link to="/shicai"><img src="http://pub.szzhangchu.com/web/v4.2/images/ico/tang-ico.png"><span>养生靓汤</span></router-link>
	            </li>
	        </ul>
	    </div>
	    <router-link to="/wandao">
	        <div class="ch-wandao">
	          万道佳肴<i></i>
	        </div>
	    </router-link>
	    <div class="ch-all">
	        <div class="ch-allone">
	             <div class="ch-allone1">
	                 <router-link to="/today">
	                     <div class="ch-allone2">
	                         <div class="ch-allone3">
	                             今日新品<i></i>
	                         </div>
	                     </div>
	                 </router-link>
	                 <div class="ch-imgbox">
	                     <ul class="ch-clearfixed">
	                        <li><router-link to="/bofang">
	                               <div class="ch-imgwarp">
	                                   <img src="http://img.szzhangchu.com/1496395560262_7909845250.jpg@180h_211w_1e_1c.jpg">
	                                   <i></i>
	                               </div>
	                               <div class="ch-imgbar">
	                                   <p class="ch-text1">薄荷酱佐火腿汉堡</p>
	                                   <p class="ch-text2">本菜品为烤制手工汉堡，需......</p>
	                               </div>
	                            </router-link>
	                        </li>
	                        <li><router-link to="/bofang">
	                               <div class="ch-imgwarp">
	                                   <img src="http://img.szzhangchu.com/1497261472016_9349378365.jpg@180h_211w_1e_1c.jpg">
	                                   <i></i>
	                               </div>
	                               <div class="ch-imgbar">
	                                   <p class="ch-text1">燕麦沙拉</p>
	                                   <p class="ch-text2">本菜品为烤制手工汉堡，需......</p>
	                               </div>
	                            </router-link>
	                        </li>
	                        <li><router-link to="/bofang">
	                               <div class="ch-imgwarp">
	                                    <img src="http://img.szzhangchu.com/1496222806385_7326164160.JPG@180h_211w_1e_1c.jpg">
	                                   <i></i>
	                               </div>
	                               <div class="ch-imgbar">
	                                   <p class="ch-text1">滋味肉松卷</p>
	                                   <p class="ch-text2">本菜品为烤制手工汉堡，需......</p>
	                               </div>
	                            </router-link>
	                        </li>
	                     </ul>
	                 </div>
	             </div>
	        </div>
	        <div class="ch-md">
	            <div class="ch-allone1">
	                 <router-link to="/today">
	                     <div class="ch-allone2">
	                         <div class="ch-allone3">
	                             夜宵心事<i></i>
	                         </div>
	                     </div>
	                 </router-link>
	                <div class="ch-bd">
	                    <ul class="ch-clearfixed">
	                        <li>
	                            <router-link to="/today">
	                                <img src="http://img.szzhangchu.com/1461236172535_2912503413.jpg@288h_211w_1e_1c.jpg">
	                                <div class="ch-bar">
	                                    <span>夜宵心事</span>
	                                    <span>143道菜</span>
	                                </div>
	                            </router-link>
	                        </li>
	                        <li>
	                            <p class="ch-top1">
	                                <router-link to="/bofang">
	                                    <img src="http://img.szzhangchu.com/1441028370591_2641713920.jpg@140h_211w_1e_1c.jpg">
	                                    <i></i>
	                                </router-link>
	                            </p>
	                            <p class="ch-top2">
	                                <router-link to="/bofang">
	                                    <img src="http://img.szzhangchu.com/1439359787388_7502246769.jpg@140h_211w_1e_1c.jpg">
	                                    <i></i>
	                                </router-link>
	                            </p>
	                        </li>
	                        <li>
	                            <p class="ch-top1">
	                                <router-link to="/bofang">
	                                    <img src="http://img.szzhangchu.com/1440127164923_4919906216.JPG@140h_211w_1e_1c.jpg">
	                                    <i></i>
	                                </router-link>
	                            </p>
	                            <p class="ch-top2">
	                                <router-link to="/bofang">
	                                    <img src="http://img.szzhangchu.com/1439385512750_9259620499.JPG@140h_211w_1e_1c.jpg">
	                                    <i></i>
	                                </router-link>
	                            </p>
	                        </li>
	                    </ul>
	                    <div class="ch-fd">
	                        在最安静的深夜，食物才是最美的安慰。…
	                    </div>
	                </div>
	            </div>
	        </div>
	        <div class="ch-md">
	            <div class="ch-allone1">
	                <router-link to="/today">
	                     <div class="ch-allone2">
	                         <div class="ch-allone3">
	                             原产地生鲜<i></i>
	                         </div>
	                     </div>
	                 </router-link>
	                <div class="ch-bd">
	                    <ul class="ch-clearfixed">
	                        <li>
	                            <router-link to="/today">
	                                <img src="http://img.szzhangchu.com/1505893870181_5752302029.jpg@288h_211w_1e_1c.jpg">
	                                <div class="ch-bar">
	                                    <span>原产地生鲜</span>
	                                    <span>33道菜</span>
	                                </div>
	                            </router-link>
	                        </li>
	                        <li>
	                            <p class="ch-top1">
	                                <router-link to="/bofang">
	                                    <img src="http://img.szzhangchu.com/1510048882353_9246610271.jpg@140h_211w_1e_1c.jpg">
	                                    <i></i>
	                                </router-link>
	                            </p>
	                            <p class="ch-top2">
	                                <router-link to="/bofang">
	                                    <img src="http://img.szzhangchu.com/1507537406005_3957371100.jpg@140h_211w_1e_1c.jpg">
	                                    <i></i>
	                                </router-link>
	                            </p>
	                        </li>
	                        <li>
	                            <p class="ch-top1">
	                               <router-link to="/bofang">
	                                    <img src="http://img.szzhangchu.com/1503978689941_7958401705.jpg@140h_211w_1e_1c.jpg">
	                                    <i></i>
	                                </router-link>
	                            </p>
	                            <p class="ch-top2">
	                                <router-link to="/bofang">
	                                    <img src="http://img.szzhangchu.com/1507888110342_9135669696.jpg@140h_211w_1e_1c.jpg">
	                                    <i></i>
	                                </router-link>
	                            </p>
	                        </li>
	                    </ul>
	                    <div class="ch-fd">
	                        做健康可口饭菜，选顺丰大当家地道好食材。…
	                    </div>
	                </div>
	            </div>
	        </div>
	        <div class="ch-allsence">
	            <router-link to="/changjing">
	                <div class="ch-allsence1">
	                    <div class="ch-allsence2">
	                        全部场景(164)
	                        <i></i>
	                    </div>
	                </div>
	            </router-link>
	        </div>
	        <div class="ch-md ch-mdd">
	            <div class="ch-allone1">
	                 <router-link to="/shequ">
	                     <div class="ch-allone2 ch-mddallone2">
	                         <div class="ch-allone3 ch-mddallone3">
	                             精选作品<i></i>
	                         </div>
	                     </div>
	                 </router-link>
	                <div class="ch-bd">
	                    <ul class="ch-clearfixed">
	                    	<router-link to="/oneperson">
	                        <li>
	                            <a href="#">
	                                <img src="http://img.szzhangchu.com/1509969440843_6165813504.jpg@212h_212w_1e_1c.jpg">
	                            </a>
	                            <div class="ch-bbar">
	                                    <span>
	                                        <img src="http://wx.qlogo.cn/mmopen/vi_32/KMPSJp38ibxVZwibwTpfe1CWA81Tvyib5G1mrOxxjkJeRibEsC3GicMKcq13Xzb2pcvMmSAt7fCdAU6JDBdZUfkogqw/0">
	                                    </span>
	                                    <p>宝宝(•ૢ⚈͒⌄</p>
	                            </div>
	                        </li>
	                        </router-link>
	                        <router-link to="/oneperson">
	                        <li>
	                            <a href="#">
	                                <img src="http://img.szzhangchu.com/1509990392636_6302860325.jpg@212h_212w_1e_1c.jpg">
	                            </a>
	                            <div class="ch-bbar">
	                                    <span>
	                                        <img src="http://img.szzhangchu.com/1478712801693_4563551632.jpg@68h_68w_1e_1c.jpg">
	                                    </span>
	                                    <p>雅雅楊小廚</p>
	                            </div>
	                        </li>
	                        </router-link>
	                        <router-link to="/oneperson">
	                        <li>
	                            <a href="#">
	                                <img src="http://img.szzhangchu.com/1510094724460_1563423101.jpg@212h_212w_1e_1c.jpg">
	                            </a>
	                            <div class="ch-bbar">
	                                    <span>
	                                        <img src="http://wx.qlogo.cn/mmopen/Yibzo33AC8rpic7rYDtJEFia915QXTicKoyuLnRfCcuDiaTgkxOLicnktZoF2oiaCfsRMNib9tibRuUAcTlkCr2O101tKlENXvSHrvUzt/0">
	                                    </span>
	                                    <p>风之边界</p>
	                            </div>
	                        </li>
	                        </router-link>
	                    </ul>
	                    <div class="ch-fd">
	                        晒美食，是对于平凡生活的热爱。…
	                    </div>
	                </div>
	            </div>
	        </div>
	        <div class="ch-md ch-last">
	            <div class="ch-allone1">
	                 <router-link to="/zhuanti">
	                     <div class="ch-allone2 ch-mddallone2">
	                         <div class="ch-allone3 ch-mddallone3">
	                             美食专题<i></i>
	                         </div>
	                     </div>
	                 </router-link>
	                 <div class="ch-bbdd">
	                     <ul>
	                         <li>
	                            <div class="ch-end0">
	                                <router-link to="/lidong">
	                                    <img src="http://img.szzhangchu.com/1452334038925_8118630970.png@640w_215h_1e_1c.jpg">
	                                    <span class="ch-spanone">砂锅 温柔的留住每一份营养</span>
	                                    <span class="ch-spantwo">冬日里最受吃货欢迎的美食是什么？毋庸置疑，必属砂锅。</span>
	                                </router-link>
	                            </div>
	                         </li>
	                         <li>
	                            <div class="ch-end">
	                                <a href="#">
	                                    <!-- <img src="http://h5.izhangchu.com/@640w_215h_1e_1c.jpg"> -->
	                                    <span class="ch-spanone"></span>
	                                    <span class="ch-spantwo"></span>
	                                </a>
	                            </div> 
	                         </li>
	                     </ul>
	                 </div>
	            </div>
	        </div>
	        <div class="ch-footer"></div>
	    </div>
	    <div class="ch-copright">
	        <p class="ch-pp"><a href="#">粤ICP备14078563号深圳市金版文化数字传媒有限公司</a></p>
	        <div class="ch-footerend">
	            <a href="#">
	                <i></i>
	                <p>粤公网安备 44030402000542号</p>
	            </a>
	        </div>
	    </div>
	    <div class="ch-endup" v-show = "isShow">
	        <div class="ch-endall">
	            <div class="ch-endlogo">
	                <img src="http://pub.szzhangchu.com/web/v4.2/images/logo.png">
	                <div class="ch-endtext">
	                    <h6>掌厨</h6>
	                    <p>用些心做好饭</p>
	                </div>
	                <div class="ch-download">
	                    下载app

	                </div>
	                <span class="ch-endspan" @click="hide"></span>
	            </div>
	        </div>
	    </div>

		<div class="ch-header ch-sousuo" v-show = "flag">
	    	<div class="ch-logo">
	    		<span @click = "disappear()"><a href="#"><img src="http://pub.szzhangchu.com/web/v4.2/images/ico/ico-back-black.png"></a></span>
	    	</div>
	    	<div class="ch-midsearch">
	    		<div class="ch-middle">
	    			<div class="ch-midinner">
	    				<div class="ch-holder ch-reholder">
	    					<i>11</i>
	    					<input type="text" placeholder="请输入菜名或者食材搜索" @keyup = "showfood()" v-model = "zimu">
	    					</input>
	    				</div>
	    			</div>
	    		</div>
	    	</div>
	    	<div class="ch-person">
	    		<span>搜索</span>
	    	</div>
            <div class="ch-secondone">
	    	<div class="ch-soulist">
	    	    <p>热门搜索</p>
	    		<ul>
	    			<li v-for = "item in datalist">
	    			<router-link to = "/xuanji">{{item.text}}
	    			</router-link>
	    			</li>
	    		</ul>
	    	</div>
	    	<div class="ch-history">
	    		<p>历史搜索</p>
	    		<ul>
	    			<li>暂无搜索历史</li>
	    		</ul>
	    	</div>
            </div>
            <div class="ch-foodList" v-show = "slogo">
            	<ul>
            		<li v-for = "item in foodlist">
            			<router-link to = "/meifood">{{item.text}}</router-link>
            		</li>
            	</ul>
            </div>
	    </div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				show: this.$route.params[0] || false,
				isShow: true,
				flag : false,
	    		slogo :false,
	    		zimu:'',
	    		datalist : {},
	    		foodlist :{}
			}
		},
		created: function(){
			// console.log(this.$router.params.id)
			if(this.$route.params.id === "false") {
				this.show = this.$route.params.id
			}
			if(sessionStorage.favour !== undefined){
				if(sessionStorage.favour.length>0){
					this.show = sessionStorage.favour
				}
			}
			
		},
		methods:{
			hide:function(){
				this.isShow = false
			},
			search:function(){
				this.flag = true;
			},
			disappear:function(){
                this.flag = false;
			},
			showfood:function(){
				var _t = this;
				this.slogo = true;
				this.$http.get("http://api.izhangchu.com/",{
				params:{
                  methodName:"SearchKeyword",
					keyword:_t.zimu,
					user_id:0
				}
				}).then((res)=>{
					this.foodlist = res.data.data.data;
					// console.log(this.foodlist);
				})
			},
			created:function(){
				var _t = this;
				this.$http.get("http://api.izhangchu.com/",{
					params:{
	                  methodName:"SearchHot",
						size:10,
						user_id:0
					}
				}).then((res)=>{
					this.datalist = res.data.data.data;
					console.log(this.datalist);
				});
			}

		}
	}
</script>
<style scoped>
.ch-person img{
	border-radius: 50%;
}

.ch-header{
	width:100%;
	height:2.2rem;
	line-height: 2.2rem;
	background-color: #ff7836;
	border-bottom: 1px solid #f2f2f2;
	position: fixed;
	left:0;
	top:0;
	z-index: 10;
}
.ch-logo,.ch-person{
	width:2.2rem;
	height:2.2rem;
	line-height: 2.2rem;
	position: absolute;
	top:0;
	
}
.ch-logo{
	left:0;
}
.ch-person{
	right: 0;
	font-size: 0.65rem;
}
.ch-logo span,.ch-person span{
	width:100%;
	height:100%;
	display:inline-block;
	text-align: center;
	color:#828282;

}
.ch-logo a,.ch-person a{
	width:100%;
	height:100%;
	display:inline-block;

}
.ch-logo img,.ch-person img{
	width:1.2rem;
	height:1.2rem;
	line-height: 1.2rem;
	margin:0.5rem;
}
.ch-midsearch{
	width:100%;
	height:2.2rem;
}
.ch-middle{
	height:2.2rem;
	margin:0 2.2rem;
	padding:0.4rem 0;
}
.ch-midinner{
	height:1.4rem;
	line-height: 1.4rem;
	background-color: #fff;
}
.ch-midinner{
	font-size: 0.6rem;
	
}
.ch-holder{
	text-align: center;
	height:1.4rem;
	color: #828282;
}
.ch-holder i{
display: inline-block;
width:1.2rem;
height:1.2rem;
margin-right: 0.5rem;
font-size: 0;
vertical-align: top;
margin-top: 0.1rem;
background:url(http://pub.szzhangchu.com/web/v4.2/images/ico/ico-search-gray.png) no-repeat;
background-size:cover;
}
/*------------------------ch-table-------------------------*/
.ch-table{
	width:100%;
	height:3.6rem;
	line-height: 1.5rem;
	margin-top: 2.2rem;
	padding:0.3rem 0;
	background-color: #fff;
}
.ch-table ul{
	width:100%;
}
.ch-table ul li{
	float: left;
	display: inline-block;
	width:16.6%;
	font-size: 0.7rem;
	text-align: center;
}
.ch-table ul li:nth-child(5n+5){
	width:25.41%;
}
.ch-table ul li:nth-child(5n+1){
	margin-left: 3.91%;
}
.ch-table a{
	color:#464646;
}
/*------------------------ch-banner--------------------*/
.ch-banner{
	width:100%;
	background-color:#fff;
}
.ch-banner img{
	width:100%;
	height:100%;
}
/*--------------------ch-catalog-------------------------*/
.one{
	width:100%;
	height:226px;
	/*background-color: red;*/
}
.ch-catalog ul{
	padding:0.6rem 0;
	border-bottom: 1px solid #f2f2f2;
}
.ch-catalog ul li{
	float: left;
	width:33.3%;
	text-align: center;
	margin:0.3rem 0;
}
.ch-catalog a{
	font-size: 0.7rem;
	color:#464646;
	display: block;
}
.ch-catalog img{
	width:2.2rem;
	height:2.2rem;
}
.ch-catalog span{
	display: block;
	margin-top: 0.2rem;
}
/*-------------------------ch-wandao------------------*/
.ch-wandao{
	font-size: 0.75rem;
	height:0.75rem;
	line-height: 0.75rem;
	color:#464646;
	text-align: center;
	margin:0.5rem 0;

}
.ch-wandao i,.ch-allone3 i{
	display: inline-block;
	width:0.625rem;
	height:0.625rem;
	background:url(http://pub.szzhangchu.com/web/v4.2/images/ico/ico-more-circle.png) no-repeat;
	background-size:100% 100%;
	margin-left: 0.85rem;

}
/*------------------------ch-all-----------------------*/
.ch-all{
	width:100%;
	min-height: 20rem;
	background-color: #eeeeee;
	overflow: hidden;
}
.ch-allone{
	background-color: #fff;
	margin-top: 0.4rem;
	padding:0.3rem 0;
	box-shadow: 0px 0px 1px #ccc;

}
.ch-allone2{
	line-height: 1.75rem;
	padding:0.8rem 0;
}
.ch-allone3{
	font-size: 0.75rem;
	height:0.75rem;
	line-height: 0.75rem;
	color:#464646;
	text-align: center;
}
.ch-imgbox li{
	float: left;
	width:33.3%;
}
.ch-imgwarp img{
	width:100%;
	height:4.5rem;
}
.ch-imgwarp{
	position: relative;
}
.ch-imgwarp i{
	display: inline-block;
	width:1.2rem;
	height:1.2rem;
	background:url(http://pub.szzhangchu.com/web/v4.2/images/ico/ico-play.png) no-repeat;
	background-size:cover;
	position: absolute;
	top:50%;
	left:50%;
	margin-top: -0.6rem;
	margin-left: -0.6rem;
}
.ch-imgbar{
	font-size: 0.6rem;
	text-align: center;
	color:#5d5d5d;
}
.ch-text1{
	font-size: 0.7rem;
	height:1.2rem;
	color:#464646;
	padding:0.1rem 0.4rem;
	overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.ch-text2{
	height:1.6rem;
	padding:0 0.3rem;
	overflow: hidden;
	line-height: 0.8rem;
	color:#a0a0a0;
}
.ch-imgbox li:nth-child(1) a{
	display: block;
	margin-right:0.1rem;
}
.ch-imgbox li:nth-child(2) a{
	display: block;
	margin-right:0.1rem;
}
/*-------------------ch-md------------*/
.ch-md{
	min-height: 10rem;
	background-color: #fff;
	margin-top: 0.4rem;
	/*margin-bottom: 0.4rem;*/
	box-shadow: 0px 0px 1px #ccc;
}
.ch-md ul li{
	float: left;
	width:33.3%;
	height:7.2rem;
	position: relative;
}
.ch-md ul li:nth-child(1){
	border-right: 0.05rem solid #fff;
}
.ch-md ul li:nth-child(2){
	border-right: 0.025rem solid #fff;
	border-left: 0.025rem solid #fff;
}
.ch-md ul li:nth-child(3){
	border-left: 0.05rem solid #fff;
}
.ch-md ul li img{
	width:100%;
	height:100%;
}
.ch-bar{
	position: absolute;
	left:0;
	bottom:0.5rem;
	width:100%;
	font-size: 0.7rem;
}
.ch-bar span{
	display: block;
	text-align: center;
	color:#fff;
}
.ch-top1,.ch-top2{
	width:100%;
	height:50%;
	position: relative;
	/*background-color: red;*/
}
.ch-top1 i,.ch-top2 i{
	display: inline-block;
	width:1.2rem;
	height:1.2rem;
	background:url(http://pub.szzhangchu.com/web/v4.2/images/ico/ico-play.png) no-repeat;
	background-size:cover;
	position: absolute;
	top:50%;
	left:50%;
	margin-top: -0.6rem;
	margin-left: -0.6rem;
}
.ch-top1{
	border-bottom: 0.1rem solid #fff;
}
.ch-fd{
	height:2rem;
	line-height: 2.2rem;
	font-size: 0.6rem;
	text-align: center;
	color:#a0a0a0;
}
.ch-md2{
	min-height: 10rem;
	background-color: #fff;
	margin-top: 0.4rem;
	/*margin-bottom: 0.4rem;*/
	box-shadow: 0px 0px 1px #ccc;
}
/*----------------------ch-allsence-------------------*/
.ch-allsence1{
	height:1.75rem;
	line-height: 1.75rem;
	padding:0.5rem 0;
	/*background-color: pink;*/
}
.ch-allsence2{
	height: 0.75rem;
	/*line-height: 0.75rem;*/
	font-size: 0.75rem;
	text-align: center;
	color:#464646;
}
.ch-allsence2 i{
	display: inline-block;
	width:0.625rem;
	height:0.625rem;
	background:url(http://pub.szzhangchu.com/web/v4.2/images/ico/ico-more-circle.png) no-repeat;
	background-size:100% 100%;
	margin-left: 0.85rem;
}
.ch-allsence{
	padding:0 0 0.5rem 0;
}
/*-------------------------ch-mdd------------------*/
.ch-mdd ul li{
	height:7.5rem;
}
.ch-mdd ul li a{
	display: block;
	height:72%;
}
.ch-mdd ul li img{
	width:100%;
	height:100%;
	display: block;
}
.ch-mddallone2{
	padding:0.5rem;
}
.ch-mddallone3{
	line-height: 1.3rem;
}
.ch-bbar{
	position: absolute;
    text-align: center;
    font-size: 0.6rem;
    left: 0;
    bottom: 0.3rem;
    width: 100%;
    color: #515151;
}
.ch-bbar span{
	width: 1.8rem;
    height: 1.8rem;
    display: block;
    margin: 0.2rem auto;
    vertical-align: top;
    background-color: #fff;
    padding-top: 0.1rem;
    border-radius: 1rem;
    -webkit-border-radius: 1rem;
}
.ch-bbar span img{
	height:1.6rem;
	width:1.6rem;
	border-radius: 1rem;
}
.ch-bbar p{
	width:100%;
	height:1rem;
	overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 0.7rem;
    text-align: center;
    padding:0.1rem 0.4rem;
}
/*-----------------ch-last--------------------------*/
.ch-last ul li{
 float: none;
 width:100%;
 height:100%;
}
.ch-bbdd{
	margin-top: 0.5rem;
}
.ch-spanone{
	margin: 0.5rem 0 0.2rem 0.62rem;
    color: #464646;
    font-size: 0.7rem;
    display: block;
}
.ch-spantwo{
	color: #a0a0a0;
    font-size: 0.6rem;
    display: block;
    margin-left: 0.62rem;
}
.ch-end0{
	margin-bottom: 1.2rem;
}
.ch-end{
	height:1rem;
	margin-bottom: 0.4rem;
}
.ch-footer{
	height:0.5rem;
}
/*--------------------copright---------------*/
.ch-copright{
	font-size: 0.5rem;
	background-color: #eee;
	text-align: center;
}
.ch-pp a{
	color:#999;
}
.ch-footerend{
	width:100%;
	padding:20px 0;
	margin:0 auto;
}
.ch-footerend a{
	display: inline-block;
	height:20px;
	line-height: 20px;
}
.ch-footerend a i{
	display: inline-block;
	float: left;
	width:20px;
	height:20px;
	background: url(http://pub.szzhangchu.com/web/v4.2/images/ico/icon_netsecurity.png) no-repeat;
}
.ch-footerend a p{
	float: left;
	margin-left: 5px;
	height:20px;
	line-height: 20px;
	color:#939393;
}
.ch-msg{
	    color: #fff;
    text-align: center;
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 1000000;
    font-size: 0.65rem;
    min-height: 1.5rem;
    min-width: 10rem;
    max-width: 600px;
    line-height: 1.1rem;
    background-color: rgba(0,0,0,0.4);
    border-radius: 1.5rem;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    padding: 0.2rem 0.5rem;
}
/*----------------------------ch-endall-----------------*/
.ch-endup{
	width:100%;
	height:2.5rem;
	background-color:#eee; 
}
.ch-endall{
	position: fixed;
	left: 0;
	bottom: 0;
	width:100%;
	height:2.5rem;
	background-color: rgba(0,0,0,0.4);
}
.ch-endlogo{
	margin:0.25rem 0;
}
.ch-endlogo img{
	width:1.7rem;
	height:1.7rem;
	margin:0.2rem 0.3rem 0 0.5rem;
	display: inline-block;
	position: relative;

}
.ch-endtext{
	display: inline-block;
	margin-bottom: 1rem;
}
.ch-endtext p{
	font-size: 0.45rem;
	height:0.8rem;
	line-height: 0.8rem;
	color:#eee;
}
.ch-endtext h6{
	font-size: 0.7rem;
	color:#fff;
}
.ch-download{
	display: inline-block;
	float: right;
	margin: 0.4rem 2rem 0 0;
	color:#fff;
	font-size: 0.7rem;
	padding:0.2rem;
	background-color: rgb(255, 143, 92);
}
.ch-endspan{
	width:0.55rem;
	height:0.55rem;
	display: inline-block;
	background:url(http://pub.szzhangchu.com/web/v4.2/images/ico/ico-delete.png) no-repeat;
	background-size: cover;
	position: absolute;
	right:3%;
	top:45%;
}
/*搜索页面*/

 .ch-sousuo{
		position: fixed;
		top: 0;
		left: 0;
		z-index: 10;
		width: 100%;
		height: 100%;
		background: white;
	}
.ch-reholder{
	background-color: #e6e6e6;
	/*margin-right: 0.5rem;*/
}
.ch-reholder input{
	outline: none;
	border:none;
	background-color: #e6e6e6;
	color:#5d5d5d;
}
.ch-soulist{
	background-color: #fff;
	padding-bottom: 0.2rem;
}
.ch-soulist ul{
    display: flex;
    flex-wrap: wrap;
    padding-left: 0.5rem;
}
.ch-soulist ul li{
	/*width:20%;*/
}
.ch-soulist ul li a{
	
    display: block;
  
    border: 1px solid #ff8f5c;
    color: #5d5d5d;
    border-radius: 3px;
    /*width:2rem;*/
    text-align: center;
    height:1.5rem;
    line-height: 1.5rem;
    font-size: 0.6rem;
    margin: 0.2rem;
    padding:0 0.75rem;
}
.ch-soulist p{
	margin-left: 1.2rem;
    font-size: .6rem;
    color:#828282;
}
.ch-history{
	background-color: #fff;
	margin-top: 0.3rem;
}
.ch-history p{
	margin-left: 1.2rem;
	color:#828282;
	font-size: .6rem;
}
.ch-history li {
	font-size: .6rem;
	text-align: center;
}
.ch-secondone{
	width:100%;
	height:100%;
	background-color:#e6e6e6; 
	padding-top: 0.3rem;
}
.ch-foodList{
	position: fixed;
	width:100%;
	left:0;
	top:2.5rem;
	background-color: #fff;
}
.ch-foodList ul{
	width:100%;
	margin-left: 5%;
}
.ch-foodList li{
	width:90%;
	height:2rem;
	line-height: 2rem;
	border-bottom: 1px solid #bbb;
	padding-left: 1rem;
}
.ch-foodList li a{
	 color:#828282;
	 font-size: 0.8rem;
}
.ch-foodList li:last-of-type{
  border-bottom: none;
}
</style>