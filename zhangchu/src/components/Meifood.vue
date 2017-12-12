<template>
	<div id="meifood">
		<div class="ch-mfood">
            <div class="ch-mfood0">
                <div class="ch-mfood1">
                    <router-link to="/index"><i></i></router-link>
                </div>
                <div class="ch-mfood20">
                    <ul>
                        <li class="ch-li1"><router-link to="/tuijian">推荐</router-link></li>
                        <li class="ch-li2 ch-litwo"><a href="#">美食IP</a></li>
                         <li class="ch-li3"><router-link to="/jiankang">健康IP</router-link></li>
                    </ul>
                </div>
                <div class="ch-mfood3">
                    <a href="#">
                        <i></i>
                    </a>      
                </div>
                <div class="ch-mfood4">
                    <a href="#">
                        <i class="tablei" @click="show"></i>
                    </a>      
                </div>
            </div>
        </div>

        <div :class="['ch-tree',{'ch-tree2':1==num}]">
            <ul>
                <li>
                    <a href="#">
                        <span class="ch-ospan1"></span>
                        <label><router-link to="/index" style="color:#a0a0a0">首页</router-link></label>
                    </a>
                </li>

                 <li>
                    <a href="#">
                        <span class="ch-ospan2"></span>
                        <label><router-link to="/zhuanti" style="color:#a0a0a0">专题</router-link></label>
                    </a>
                </li>
                 <li>
                    <a href="#">
                        <span class="ch-ospan3"></span>
                        <label><router-link to="/tuijian" style="color:#a0a0a0">乐活</router-link></label>
                    </a>
                </li>
                 <li>
                    <a href="#">
                        <span class="ch-ospan4"></span>
                       <label class="ch-olabel"><router-link to="/shicai" style="color:#a0a0a0">万道佳肴</router-link></label>
                    </a>
                </li>
                 <li>
                    <a href="#">
                        <span class="ch-ospan5"></span>
                       <label><router-link to="/changjing" style="color:#a0a0a0">场景</router-link></label>
                    </a>
                </li>
                 <li>
                    <a href="#">
                        <span class="ch-ospan6"></span>
                       <label><router-link to="/shequ" style="color:#a0a0a0">社区</router-link></label>
                    </a>
                </li>
                 <li>
                    <a href="#">
                        <span class="ch-ospan7"></span>
                        <label><router-link to="/huodong" style="color:#a0a0a0">活动</router-link></label>
                    </a>
                </li>
                 <li>
                    <a href="#">
                        <span class="ch-ospan8"></span>
                        <label><router-link to="/xinshou" style="color:#a0a0a0">入门</router-link></label>
                    </a>
                </li>
                <li>
                    <a href="#">
                    
                    </a>
                </li>
            </ul>
        </div>

            <div class="ch-mfoodlogo">
                <div class="ch-mfoodlogo1">
                    <ul class="ch-clearfixed">
                        <li v-for="item in logo">
                        <router-link to="/xuanji"><img :src="item.album_logo"></router-link>
                        </li>
                    </ul>
                    <span>
                      <i></i>
                    </span> 
                </div>
            </div>
        <div class="ch_min">
            <ul class="ch-mfoodul ch-clearfixed">
                <!-- <div class="lightBox"></div> -->
                <li v-for="item in data">
                    <div>
                        <div>
                            <router-link to="/xuanji">
                                <img :src="item.image" class="ch-mfoodimg1">
                                <div class="ch-mfood-uldiv">
                                    <span class="ch-mfoodspan1">{{item.series_name}}</span>
                                    <span class="ch-mfoodspan2">更新至{{item.episode}}集&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上课人数：{{item.play}}</span>
                                    <img :src="item.album_logo" class="ch-mfoodimg2">
                                    <span class="ch-mfoodspan3">{{item.album}}</span>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="ch-mfoodend" @click="more" v-if="data1.total-count*data1.size>0">
                <span>还剩下{{data1.total-count*data1.size}}条食课</span>
            </div>
         </div>
        <div class="ch-endup">
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
                    <span class="ch-endspan"  @click="hide"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		data(){
            return{
                data:[],
                count:1,
                data1:{},
                logo:{},
                num:-1
            }
        },

        created:function(){
            this.$http.get("http://api.izhangchu.com/",{
                params:{
                    methodName:"CourseIndex",
                    version:4.4,
                    user_id:0,
                    page:1,
                    size:10
                }
            }).then((res)=>{
                this.data = res.data.data.data;
                this.data1=res.data.data
            });


            this.$http.get("http://api.izhangchu.com/",{
                params:{
                    methodName:"CourseLogo",
                    version:4.4,
                    user_id:0
                }
            }).then((res)=>{
                this.logo=res.data.data.albums;
            })
        },
        methods:{
            hide:function(){
                document.querySelector(".ch-endup").style.display= "none";
            },
            show(){
                this.num*=-1;
                if(this.num==1){
                    document.querySelector(".ch-tree").style.left="0";
                    document.querySelector(".ch-mfoodlogo").style.display= "none";
                    document.querySelector(".ch_min").style.position= "fixed";
                    document.querySelector(".ch_min").style.transform= "translateX(9.4rem)";
                    document.querySelector(".ch-mfoodul").style.marginTop= "2.2rem";
                }else{
                    document.querySelector(".ch-tree").style.left="-9.4rem";
                    document.querySelector(".ch-mfoodlogo").style.display= "block";
                    document.querySelector(".ch_min").style.position= "absolute";
                    document.querySelector(".ch_min").style.transform= "translateX(0)";
                    document.querySelector(".ch-mfoodul").style.marginTop= "5.2rem";
                }
                
            },
            more:function(){
                this.count++;
                this.$http.get("http://api.izhangchu.com/",{
                    params:{
                        methodName:"CourseIndex",
                        version:4.4,
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
.ch_min{
    position: absolute;
    left: 0;
    z-index: 1000;
    transform: translateX(0rem);
    /*transition: all .5s linear;*/
}
.lightBox{
    background:rgba(0,0,0,.6);
}
.ch-mfood20{
    width: 9rem;
    margin: 0rem auto;
    height: 2.2rem;
    text-align:center;
    box-sizing: border-box;
}
.ch-mfood20 li{
	margin: 0;
    width: 33.333333%;
        float: left;
    line-height: 2.15rem;
    height: 2.15rem;
    border-bottom: 0.1rem solid #fff;
}
.ch-mfood20 li a{
	    color: #333;
    font-size: .8rem;
}
.ch-mfood20 .ch-litwo{
	border-bottom:0.1rem solid #ff8f5c;
}
.ch-mfood{
	background-color:#fff;
    height: 2.2rem;
    line-height: 2.2rem;
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 10000;
    border-bottom: 1px solid #f2f2f2;
}
.ch-mfood0{
	width:100%;
	height:2.2rem;
	position: relative;
}
.ch-mfood1{
	width:1.4rem;
	float: left;
}
.ch-mfood1 a{
   display: inline-block;
   width:1.4rem;
   height:2.2rem;
   text-align: center;
   line-height: 2.2rem;
}
.ch-mfood1 a i{
	display: inline-block;
	width:1.4rem;
	height:1.2rem;
	background:url(../assets/img/mfood/0.png) no-repeat;
	background-size: cover;
	margin:0.45rem 0.1rem 0 0;
}
.ch-mfood2{
	display:block;
	height:2.2rem;
	width:9rem;
	margin:0 auto;
}
.ch-mfood2 ul li{
	float: left;
	width:33.3%;
	height:2.15rem;
	line-height: 2.15rem;
	text-align: center;
}
.ch-mfood2 ul li a{
	color:#333;
	font-size: 0.8rem;
}
.ch-litwo{
	border-bottom:0.1rem solid #ff8f5c;
}
.ch-lione{
	border-bottom:0.1rem solid #ff8f5c;
}
.ch-lithree{
	border-bottom:0.1rem solid #ff8f5c;
}
.ch-mfood3 a,.ch-mfood4 a{
	display: inline-block;
	width:1.2rem;
	height:2.2rem;

}
.ch-mfood3 a i,.ch-mfood4 a i{
	display: inline-block;
	width:1.2rem;
	height:1.2rem;
	background:url(../assets/img/mfood/1.png) no-repeat;
	background-size: cover;
	margin-top: 0.42rem;
}
.ch-mfood4 a i{
	background:url(../assets/img/mfood/2.png) no-repeat;
	background-size: cover;
}
.ch-mfood3{
	position: absolute;
	top: 0;
	right:1.4rem;
}
.ch-mfood4{
	position: absolute;
	top:0;
	right:0;
}
.ch-mfoodlogo{
	position: fixed;
    top: 2.2rem;
    left: 0;
    height: 3rem;
    width: 100%;
    overflow-x: scroll;
    background: #fff;
    z-index: 1009;
}
.ch-mfoodlogo::-webkit-scrollbar{
	display: none;
}
.ch-mfoodlogo1{
	position: relative;
	width:100%;
	height:3rem;
}
.ch-mfoodlogo ul{
	width:200%;
	display: flex;
    font-size:17px;
}
.ch-mfoodlogo ul li{
	flex:1;
	width:16.6%;
	height:3rem;
	line-height: 3rem;
	text-align: center;
	display: block;
    padding-right:1.4em;
}
.ch-mfoodlogo ul li:first-child{
    padding-left:1em;
}
.ch-mfoodlogo ul li img{
	width:1.8rem;
	height:1.8rem;
	border-radius: 50%;
	vertical-align: middle;
}
.ch-mfoodlogo span{
	display: inline-block;
	width:3rem;
	height:3rem;
	line-height:3rem;
	position:fixed;
	top:2rem;
	right:0;
	background: rgba(255,255,255,0.9);
	text-align: center;
	z-index: 10;
}
.ch-mfoodlogo span i{
	display: inline-block;
	width:1rem;
	height:1rem;
	margin-top: 1.2rem;
	background:url(../assets/img/mfood/3.png) no-repeat;
	background-size: cover;
}
.ch-mfoodul{
	width:100%;
	/*height:100px;*/
	margin-top: 5.2rem;
}
.ch-tuijian{
	margin-top: 2.2rem;
}
.ch-mfoodimg1{
	width:100%;
	height:100%;
	display: block;
}
.ch-mfood-uldiv{
	padding: 0.7rem;
    position: relative;
    height: 3.2rem;
    /*background-color: pink;*/
}
.ch-mfoodspan1{
	display: block;
	width:70%;
	height:0.8rem;
	line-height: 0.8rem;
	font-size: 0.7rem;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	color:#464646;
}
.ch-mfoodspan2{
	color: #a0a0a0;
    font-size: 0.6rem;
    position: absolute;
    left: 0.7rem;
    bottom: 0.7rem;
    display: block;
}
.ch-mfoodimg2{
	width: 2.6rem;
    height: 2.6rem;
    border-radius: 50%;
    position: absolute;
    right: 0.7rem;
    top: -1.3rem;
}
.ch-mfoodspan3{
	text-align: center;
	display: inline-block;
    width: 3rem;
    height: 0.8rem;
    font-size: 0.6rem;
    color: #a0a0a0;
    position: absolute;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    right: 0.5rem;
    bottom: 0.7rem;
}
.ch-mfoodend span{
	display: block;
    text-align: center;
    background-color: #f8f8f8;
    color: #666;
    font-size: .8rem;
    height: 1.6rem;
    line-height: 1.6rem;
    border-radius: .8rem;
}
.ch-mfoodend{
	width:100%;
	 background-color: #f8f8f8;
	 padding:0.3rem;
}
/*----------------------------ch-endall-----------------*/
.ch-endup{
	width:100%;
	height:2.5rem;
	background-color:#f8f8f8; 

}
.ch-endall{
	position: fixed;
	left: 0;
	bottom: 0;
	width:100%;
	height:2.5rem;
	background-color: rgba(0,0,0,0.4);
    z-index:1001; 
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
/*.....树形菜单...*/
.ch-tree{
    width:9.4rem;
    /*height:31.5rem;*/
    background-color:#f8f8f8;
    position: fixed;
    top:2.2rem;
    left:0;
    overflow-y:scroll;
    position: fixed;
    left: -9.4rem;
    /*transition: all .5s linear;*/
}
.ch-tree2{
    display: block;
}
.ch-tree::-webkit-scrollbar{
    display: none;
}
.ch-tree li{
    width:100%;
    height:3.5rem;
    line-height: 3.5rem;
    font-size: 0.7rem;
    background-color: transparent;
    text-align: center;
    margin-left: 2.5rem;
    text-align: left;
    border-bottom: 1px solid #e0e0e0;
}
.ch-tree li a{
    display: block;
}
.ch-tree li a span{
    display: inline-block;
    width:1.2rem;
    height:1.2rem;
    line-height: 1.2rem;
    vertical-align: middle;
}
.ch-ospan1{
    background:url(../assets/img/tree/0.png) no-repeat;
    background-size: cover;
}
.ch-ospan2{
    background:url(../assets/img/tree/1.png) no-repeat;
    background-size: cover;
}
.ch-ospan3{
    background:url(../assets/img/tree/2.png) no-repeat;
    background-size: cover;
}
.ch-ospan4{
    background:url(../assets/img/tree/3.png) no-repeat;
    background-size: cover;
}
.ch-ospan5{
    background:url(../assets/img/tree/4.png) no-repeat;
    background-size: cover;
}
.ch-ospan6{
    background:url(../assets/img/tree/5.png) no-repeat;
    background-size: cover;
}
.ch-ospan7{
    background:url(../assets/img/tree/6.png) no-repeat;
    background-size: cover;
}
.ch-ospan8{
    background:url(../assets/img/tree/7.png) no-repeat;
    background-size: cover;
}
.ch-tree li a label{
    display: inline-block;
    width:2rem;
    height:3.5rem;
    line-height: 3.5rem;
    margin-left: 0.8rem;
}
.ch-tree li a .ch-olabel{
    width:3rem;
}
</style>