<template>
	<div id="xuanji">
		<!-- 头部 -->
        <div class="shB_header">
             <router-link to="/index" class="shB_headA1"><i></i></router-link>
            <p class="sh_ell">{{showList.series_name}}</p>
            <a href="###"  class="shB_headA2"><i></i></a>
        </div>
        <div class="shB_banner">
            <video poster="../assets/img3/B_banner.jpg">
                <source src="http://video.szzhangchu.com/bohejiangzuohuotuihanbaoA.mp4" type="">
            </video>
            <span></span>
        </div>
        <div class="sh_banPeo">
            <p>上课人数：<span>4258</span></p>
        </div>
        <div class="sh_banBrief" id="sh_banBrief">
            <h5 class="sh_ell">{{showList.series_title
            }}</h5>
            <p>{{showList.series_title
            }}</p>
            <span><i></i></span>
        </div>
        <!-- 选集 -->
        <div class="sh_banCourse">
            <div class="sh_courseList">
                <span>选集</span>
                <p>更新至<span>{{showList.episode
            }}</span>集<i></i></p>
            </div>
            <ul class="sh_clearfixed">
                <li v-for="(item,index) in showList.data"><router-link to="/bofang">{{index+1}}</router-link></li>
            </ul>
        </div>
        <div class="sh_banComment">
            <p><span>{{comment.total}}</span>条评论</p>
            <ul>
                <li class="sh_clearfixed" v-for="item in comment.data">
                    
                    <div class="sh_commentLeft">
                        <img :src="item.head_img||'../assets/img3/img-empty.gif'">
                    </div>
                    <div class="sh_commentRight"></div>
                    <div class="sh_commentMiddle">
                        <p>{{item.nick}}</p>
                        <span>{{item.content}}</span>
                        <i>{{item.create_time
                            }}</i>
                    </div>
                </li>
            </ul>
            <div class="shH_surplus">
                还剩下<span class="shH_num">{{comment.total-10}}</span>条评论
            </div>
        </div>
	</div>
</template>

<script>
	export default {
		data(){
            return{
                showList:{},
                comment:{}
            }
        },
        created:function(){
            this.$http.get("http://api.izhangchu.com/",{
                params:{
                    methodName:"CourseSeriesView",
                    version:4.33,
                    series_id:136,
                    user_id:0,
                    page:1,
                    size:10
                }
            }).then((res)=>{
                this.showList = res.data.data
            });
            this.$http.get("http://api.izhangchu.com/",{
                params:{
                    methodName:"CommentList",
                    version:4.33,
                    relate_id:136,
                    user_id:0,
                    page:1,
                    size:10,
                    type:2
                }
            }).then((res)=>{
                this.comment = res.data.data
            })
        }
	}
</script>
<style scoped>
/*.....头部......*/
#shB_box{
	width:100%;
}
.shB_header{
	width:100%;
	height:2.2rem;
	line-height:2.2rem;
	position:fixed;
	top:0;
	left:0;
	right:0;
	margin:0 auto;
	border-bottom:1px solid #f2f2f2;
	z-index:2;
	background:#fff;
	font-size:.8rem;
	color:#333;
	text-align:center;
	min-width:320px;
	max-width:640px;
}
.shB_headA1,.shB_headA2{
	display:block;
	width:1.6rem;
	height:2.2rem;
	line-height:2.1rem;
	text-align:center;
}
.shB_headA1{
	position:absolute;
	top:0;
	left:0;
}
.shB_headA1 i{
	display:inline-block;
	width:1.4rem;
	height:1.4rem;
	background:url("../assets/img3/B_arr.png") no-repeat;
	background-size:cover;
	margin:.45rem .09rem 0 0;
}
.shB_headA2{
	position:absolute;
	right:0;
	top:0;
}
.shB_headA2 i{
	display:inline-block;
	width:1.4rem;
	height:1.4rem;
	background:url("../assets/img3/menu.png") no-repeat;
	background-size:cover;
	margin-top:.45rem;
}
.shB_header p{
	width:75%;
	margin:0 auto;
}
/*.....播放banner.......*/
.shB_banner{
	margin-top:2.2rem;
	width:100%;
	height:12.225rem;
	position:relative;
	background:#000;
}
.shB_banner video{
	width:100%;
	height:100%;
	background:url("../assets/img3/B_banner.jpg") no-repeat;
	background-size:cover;
}
.shB_banner span{
	display:block;
	width:3rem;
	height:3rem;
	position:absolute;
	top:50%;
	left:50%;
	transform:translate(-50%,-50%);	
	cursor:pointer;
	background:url("../assets/img3/ico-play-video.png") no-repeat;
	background-size:cover;
}
/*.....人数........*/
.sh_banPeo{
	color:#a0a0a0;
	font-size:.6rem;
	height:2rem;
	border-bottom:1px solid #f2f2f2;
	background:#fff;
	/*padding:0.1px;*/
	overflow: hidden;
}
.sh_banPeo p{
	height:1rem;
	line-height:1rem;
	margin:.5rem 1rem;
}
/*...视频标题....*/
.sh_banBrief{
	padding:.5rem 1rem;
	background:#fff;
	position:relative;
}
.sh_banBrief h5{
	color:#5d5d5d;
	font-size:.75rem;
	height:1rem;
	line-height:1rem;
	width:85%;
	font-weight:500;
	margin:.1rem 0 .3rem 0;
}
.sh_banBrief p{
	color:#909090;
	font-size:.65rem;
	line-height:1rem;
}
.sh_banBrief span{
	position:absolute;
	display:inline-block;
	width:.6rem;
	height:.6rem;
	padding:.5rem;
	top:.25rem;
	right:.6rem;
	box-sizing:content-box;
}
.sh_banBrief span i{
	display: block;
	width:.6rem;
	height:.6rem;
	background:url("../assets/img3/ico-up-grey.png");
	background-size:cover;
}
/*.....选集.........*/
.sh_banCourse{
	padding:0 1rem .8rem 1rem;
	background:#fff;
}
.sh_courseList{
	font-size:0;
}
.sh_courseList>span{
	display:inline-block;
	width:3rem;
	height:.8rem;
	line-height:.8rem;
	font-size:.65rem;
}
.sh_courseList p{
	float:right;
	height:.8rem;
	line-height:.8rem;
	color:#a0a0a0;
	font-size:.65rem;
	text-align:center;
	margin-right:.1rem;
}
.sh_courseList p i{
	display:inline-block;
	width:.6rem;
	height:.6rem;
	background:url("../assets/img3/ico-up-grey.png");
	background-size:cover;
	margin:-.1rem 0 0 .5rem;
	vertical-align:middle;
}
.sh_banCourse ul{
	margin-top:.2rem;
	overflow:hidden;
	height:100%;
	max-height:100%;
}
.sh_banCourse ul li{
	float:left;
	width:10%;
	height:1.6rem;
	line-height:1.6rem;
	margin-top:.3rem;
	margin-right:2.5%;
}
.sh_banCourse ul li:nth-of-type(8n){
	margin-right:0;
}
.sh_banCourse ul li:last-of-type a{
	background:#ff8f5c;
	color:#fff;
}
.sh_banCourse ul li a{
	font-size:.6rem;
	background:#f7f7f7;
	display:block;
	width:100%;
	height:100%;
	color:#909090;
	text-align:center;
}
/*.........评论..........*/
.sh_banComment{
	background:#fff;
	margin-top:.4rem;
	padding:1rem .5rem 0 .5rem;
}
.sh_banComment>p{
	font-size:.7rem;
	padding:0 .5rem .5rem .5rem;
	border-bottom:0.03rem solid #B3B3B3;
}
.sh_banComment li{
	font-size:.5rem;
	padding:.3rem 0;
	border-bottom:0.03rem solid #B3B3B3;
}
.sh_commentLeft{
	float:left;
	margin-right:-.3rem;
	width:3rem;
	min-height:2rem;
}
.sh_commentLeft img{
	width:2rem;
	height:2rem;
	border-radius:3rem;
	margin-top:.3rem;
}
.sh_commentRight{
	float:right;
	width:.1rem;
	min-height:2rem;
}
.sh_commentMiddle{
	width:auto;
	font-size:.6rem;
	min-height:2rem;
	margin:0 0.1rem 0.2rem 2.5rem;
}
.sh_commentMiddle p{
	color:#5d5d5d;
	font-size:.7rem;
}
.sh_commentMiddle span{
	padding:.4rem 0;
	color:#000;
	display:block;
}
.sh_commentMiddle i{
	display:block;
	margin-left:.2rem;
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