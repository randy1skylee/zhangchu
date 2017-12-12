<template>
	<div>
        <div class="shH_header">
            <ul class="sh_clearfixed sh_ell">
                <li class="sh_ell">
                    <router-link to="/index">首页</router-link>
                </li>
                <li class="sh_ell">></li>
                <li class="sh_ell">
                    <router-link to="/huodong">活动</router-link>
                </li>
                <li>></li>
                <li class="sh_ell"><a href="###">{{Text.share_title}}</a></li>
            </ul>
            <span><a href="###">
                <i></i>
            </a></span>
        </div>
        <div class="headerDown"></div>
        <div class="shH_list">
            <ul>
                <li>
                    <div class="shH_listImg">
                        <a href="###">
                            <img :src="Text.image">
                            <div class="shH_listText">
                                <p>2017-09-30</p>
                                <p>{{Text.status}}人参与</p>
                            </div>
                            <div class="shH_end">已结束</div>
                        </a>
                    </div>
                </li>
            </ul>
        </div>
        <!-- 折叠列表 -->
        <div style="width:100%; background:#fff;" class="shF_wrap">
            <div v-html="Text.content"></div>
            <div class="shF_wrapAbso">
                <span></span>
            </div>
        </div>
        <div class="shF_newDid">
            <ul>
                <li class="shF_newActive"><a href="###">最新作品</a></li>
                <li><a href="###">点赞榜</a></li>
                <li><a href="###">评论榜</a></li>
            </ul>
        </div>
        <div class="shF_ShowList">
            <ul class="sh_clearfixed">
                <li v-for="item in showList.data">
                    <p><a href="###"><img :src="item.image"></a></p>
                    <div class="shF_info-bar">
                        <a href="###"><img :src="item.head_img"></a>
                        <span class="sh_ell">{{item.nick}}</span>
                        <p class="sh_clearfixed">
                            <i>{{item.create_time}}</i>
                            <span><em>{{item.agree_count}}</em><i></i></span>
                        </p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="shH_surplus">
            还剩下<span class="shH_num">{{showList.total-10}}</span>个活动
        </div>
        <div style="height:3rem"></div>
    </div>
</template>

<script>
	export default {
		data(){
                return{
                    showList:{},
                    Text:{}
                }
            },
            created(){
                this.$http.get("http://api.izhangchu.com/",{
                    params:{
                       methodName:"ShequActivitypost",
                        version:4.3,
                        activity_id:248,
                        order_by:"create_time",
                        page:1,
                        size:10,
                        user_id:0
                    }
                }).then((res)=>{
                    this.showList = res.data.data;
                });
                this.$http.get("http://api.izhangchu.com/",{
                    params:{
                        methodName:"ShequActivityview",
                        version:4.3,
                        id:248,
                        user_id:0
                    }
                }).then((res)=>{
                    this.Text = res.data.data;
                })
            }
	}
</script>
<style scoped>
 /*.....头部......*/
 .sh_clearfixed:after{
        content:".";
        font-size:0;
        display:block;
        clear:both;
    }
 .sh_ell{
 	white-space: nowrap;
 	overflow: hidden;
 	text-overflow:ellipsis;
 }
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
        max-width:640px;
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
        max-width: 46%;
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
    /*....文字介绍.....*/
    .shF_wrap{
        padding:0.5rem 1rem 1.5rem 1rem;
        background:#fff;
        color:#a0a0a0;
        font-size:.7rem;
        line-height:1rem;
        position:relative;
    }
    .shF_title{
        text-align:center;
        margin:.5rem 0;
    }
    .shF_title strong{
        background:rgb(149, 55, 52);
        color:#fff;
    }
    .shF_txt{
        text-align:center;
        color:#000;
        font-size:.7rem;
    }
    .shF_txt p{
        text-align:left;
        line-height:1rem;
    }
    .shF_wrapImg{
        margin:.5rem 0;
        text-align:center;
    }
    .shF_wrapAbso{
        height:.7rem;
        width:3rem;
        position:absolute;
        left:50%;
        text-align: center;
        transform:translate(-50%);
    }
    .shF_wrapAbso span{
        background:url(../assets/img_sh/ico-up-grey.png);
        display:inline-block;
        width:.8rem;
        height:.8rem;
        text-align:center;
        background-size:cover;
    }
    /*....已结束......*/
    .shF_cam{
        background:#fff;
        padding:1.8rem .5rem 2.2rem .5rem;
        height:2.2rem;
        width:100%;
        margin-bottom:.9rem;
    }
    .shF_cam a{
        display:block;
        height:1.5rem;
        line-height:1.5rem;
        color:#fff;
        background:#ccc;
        font-size:.7rem;
        border-radius:.2rem;
        text-align:center;
        width:100%;
    }
    .shF_cam a i{
        background:url("../assets/img_sh/ico-photograph-white.png");
        display: inline-block;
        width:1.1rem;
        height:.85rem;
        background-size:cover;
        margin:.3rem .5rem 0 -.2rem;
    }
    /*...榜单...*/
    .shF_activeL{
        padding:.3rem 0 1.2rem .5rem;
        font-size:.75rem;
        background:#fff;
        border-bottom:1px solid #eaeaea;
    }
    .shF_activeL p{
        font-size:.6rem;
        padding:.5rem 0;
    }
    .shF_activeL ul{
        height:1.9rem;
        width:89.375%;
        overflow:hidden;
    }
    .shF_activeL ul li{
        width:1.8rem;
        height:1.9rem;
        margin-left:.6rem;
        float:left;
    }
    .shF_activeL ul li img{
        width:100%;
        height:100%;
        border-radius:1.5rem;
    }
    .shF_activeL>div{
        position:relative;
    }
    .shF_activeL>div a{
        position:absolute;
        top:0;
        right:0;
        width:1.8rem;
        height:1.8rem;
    }
    .shF_activeL>div a i{
        background:url("../assets/img_sh/ico-more-red.png");
        width:100%;
        height:100%;
        display:block;
        background-size:cover;
    }
    .shF_newDid{
        background:#fff;
        height:2rem;
        text-align:center;
    }
    .shF_newDid ul{
        display:inline-block;
    }
    .shF_newDid ul li{
        height:2rem;
        line-height:1.8rem;
        margin:0 .3rem;
        float:left;
        width:3.7rem;
        text-align:center;
    }
    .shF_newDid ul li a{
        font-size:.7rem;
        color:#a0a0a0;
    }
    .shF_newActive{
        border-bottom:0.1rem solid #ff8f5c;
        color:#464646;
    }
    /*......底部图片列表.....*/
    .shF_ShowList li{
        width:50%;
        margin-top:.6rem;
        overflow:hidden;
        float:left;
    }
    .shF_ShowList li:nth-of-type(2n+1){
        padding-right:.025rem;
    }
    .shF_ShowList li:nth-of-type(2n){
        padding-left:.025rem;
    }
    .shF_ShowList li>p a{
        display:block;
        font-size:0;
    }
    .shF_ShowList li>p a img{
        width:100%;
        height:9.35rem;
    }
    .shF_info-bar{
        height:3rem;
        width:100%;
        position:relative;
        background:#fff;
    }
    .shF_info-bar>a{
        display:block;
        height:2.5rem;
        margin:0 .25rem;
    }
    .shF_info-bar>a img{
        width:2rem;
        height:2rem;
        border-radius:3rem;
        margin-top:.3rem;
    }
    .shF_info-bar>span{
        display:block;
        width:65%;
        height:1rem;
        line-height:1rem;
        color:#50493e;
        font-size:.65rem;
        position: absolute;
        right:.2rem;
        top:.6rem;
    }
    .shF_info-bar>p{
        width:65%;
        position:absolute;
        right:.2rem;
        bottom:.5rem;
        height:1.5rem;
        font-size:0;
    }
    .shF_info-bar>p>i{
        display:inline-block;
        height:.7rem;
        line-height:.7rem;
        font-size:.6rem;
        color:#a3a3a3;
        width:50%;
        float:left;
        margin-top:.8rem;
    }
    .shF_info-bar>p span{
        display:inline-block;
        height:1rem;
        line-height:.7rem;
        font-size:.6rem;
        color:#a3a3a3;
        width:50%;
        float:left;
        text-align:right;
    }
    .shF_info-bar>p span em{
        display:inline-block;
        width:60%;
        margin-top:.8rem;
        float:left;
    }
    .shF_info-bar>p span i{
        display:inline-block;
        width:1rem;
        height:1rem;
        background:url("../assets/img_sh/Fzan.png") no-repeat;
        background-size:cover;
        float:right;
        margin-top:.4rem;
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