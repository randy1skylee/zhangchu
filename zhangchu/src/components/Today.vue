<template>
	<div id="today">
		 <div style="background-color:#f8f8f8;">
            <div class="lxz-head">
                <div class="lxz-head1">
                    <ul class="clearfixed">
                         <li><router-link to="/index">首页</router-link></li>
                        <li>&gt;</li>
                         <li><router-link to="/changjing">场景</router-link></li>
                        <li>&gt;</li>
                        <li><a href="javascript:void(0)">{{tou.scene_title}}</a></li>
                    </ul>
                    <div class="lxz-head2">
                        <a href="javascript:void(0)" class="lxz-head3">
                            <i class="lxz-headico"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="lxj-top">
                <a href="javascript:void(0)">
                    <img :src="tou.scene_background">
                    <div class="lxj-topMain">
                        <p>#{{tou.dish_count}}道菜#</p>
                        <p>{{tou.scene_desc}}</p>
                    </div>
                    <div class="lxj-topBg"></div>
                </a>
            </div>
            <div class="lxj-main">
                <div class="lxj-main-box">
                    <ul>
                        <li v-for="item in data.data">
                            <a href="javascript:void(0)">
                                <div class="lxj-main-img">
                                    <img :src="item.image">
                                    <i class="lxj-icon"></i>
                                </div>
                                <div class="lxj-main-bar">
                                    <h6><p>{{item.dishes_name}}</p></h6>
                                    <div class="lxj-txt">{{item.dishes_desc}}</div>
                                </div>
                            </a>
                            <div class="lxj-main-labelbar">
                                <a href="javascript:void(0)" v-for="(ite,index) in item.tags_info" v-if="index<4"><span>{{ite.text}}</span></a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="lxz-load">查看全部(<span class="lxz-num">{{data.total-data.page*data.size}}</span>)道<i></i></div>
            </div>
            <div class="lxj-foot">
                <div class="lxj-foot1">
                    <a href="javascript:void(0)">
                        <p>更多相关场景<i></i></p>
                    </a>
                </div>
                <div class="lxj-foot2">
                    <div class="swiper-container">
                        <div class="swiper-wrapper" style="height: 7rem;">
                            <div class="swiper-slide">
                                <a href="javascript:void(0)" v-for="item in tou.relates">
                                    <img :src="item.scene_background">
                                    <div class="lxj-dw">
                                        <span class="lxj-dw1">#{{item.scene_title}}#</span>
                                        <span class="lxj-dw2">{{item.dishes_count}}道菜</span>
                                    </div>
                                    <div class="lxj-sw-bg"></div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	</div>
</template>

<script>
	export default {
		data(){
            return {
                data:{},
                tou:{}
            }
        },
        created:function(){
            this.$http.get("http://api.izhangchu.com/",{
                params:{
                    methodName:"SceneInfo",
                    version:4.2,
                    scene_id:51,
                    user_id:0
                }
            }).then((res)=>{
                this.tou = res.data.data;
            });
            this.$http.get("http://api.izhangchu.com/",{
                params:{
                    methodName:"SceneDishes",
                    version:4.2,
                    page:1,
                    size:20,
                    scene_id:51,
                    user_id:0
                }
            }).then((res)=>{
                this.data = res.data.data;
            })
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
    background: url(../assets/imgtoday/menu.png);
    width: 1.4rem;
    height: 1.4rem;
    margin-top: 0.45rem;
    background-size: cover;
    vertical-align: top;
}
/**/
.lxj-top{
    padding: 0;
    position: relative;
    height: 100%;
    min-height: 10.975rem;
    background-color: #fff;
    font-size: .6rem;
    text-align: center;
    color: #999;
    float: none;
    width: 100%;
    margin-top:2.2rem;
}
.lxj-top img{
    width:100%;
    max-width: 100%;
    font-size: 0px;
    display: block;
    margin: 0 auto;
}
.lxj-topMain{
    width: 100%;
    z-index: 2;
    padding: 0 1rem;
    color: #fff;
    position: absolute;
    bottom: 0.5rem;
    overflow: hidden;
}
.lxj-topMain p:first-child{
    font-size: 0.75rem;
    margin-bottom: 0.5rem;
    line-height: 0.9rem;
}
.lxj-topMain p:last-child{
    font-size: 0.65rem;
    line-height: 0.8rem;
}
.lxj-topBg{
    background-image:linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(0,0,0,0.5) 100%);
    position: absolute;
    height: 5.5rem;
    width: 100%;
    bottom: 0;
    z-index: 1;
}
/**/
.lxj-main{
    margin-top: .4rem;
    padding: 0 0 0.4rem 0;
    min-height: 10rem;
    background-color: #fff;
    padding-bottom:0.4rem;
    box-shadow: 0px 0px 1px #ccc;
}
.lxj-main-box{
    padding: .2rem 0.6rem 0;
    background-color: #fff;
    border-top: 1px solid #eee;
}
.lxj-main-box li{
    height: 4.125rem;
    background-color: #fff;
    position: relative;
    text-align: left;
    margin-top: 0;
    padding-top: 0.4rem;
    overflow: hidden;
    border-bottom: none;
    padding-left: 0;
    padding-bottom: 0;
}
.lxj-main-box a{
    font-size: .55rem;
    display: inline-block;
}
.lxj-main-img{
    width: 6rem;
    height: 4.125rem;
    margin-right: 0.4rem;
    position: relative;
    float: left;
    margin-top: 0;
    margin-left: 0;
}
.lxj-main-img img{
    max-width: 100%;
    font-size: 0px;
    display: block;
    margin: 0 auto;
}
.lxj-icon{
    background-image: url(../assets/imgtoday/icon.png);
    background-size: cover;
    display: inline-block;
    vertical-align: middle;
    width: 1.2rem;
    height: 1.2rem;
    margin-top: -0.6rem;
    margin-left: -0.6rem;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 5;
}
.lxj-main-bar{
    line-height: 0.85rem;
    padding-left: 6.4rem;
}
.lxj-main-bar h6{
    font-size: 0.7rem;
    color: #50493e;
    line-height: 0.8rem;
}
.lxj-txt{
    color: #a3a3a3;
    font-size: 0.6rem;
    margin: .2rem 0 0 0;
    line-height: 0.8rem;
    height: 1.6rem;
    overflow: hidden;
}
.lxj-main-labelbar{
    overflow: hidden;
    background-color: #fff;
    margin-left: 6.4rem;
    line-height: 0.8rem;
    height: 1rem;
    position: absolute;
    bottom: 0;
}
.lxj-main-labelbar a{
    font-size: .55rem;
    display: inline-block;
}
.lxj-main-labelbar span{
    line-height: 0.5rem;
    text-align: center;
    color: #ff8f5c;
    font-size: 0.5rem;
    display: inline-block;
    border-radius: 0.5rem;
    border: 1px solid #ff8f5c;
    padding: 0.1rem 0.3rem;
    box-sizing: border-box;
}
/**/
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
.lxz-load i{
    margin-left: 0.6rem;
    background-image: url(../assets/imgtoday/you.png);
    vertical-align: middle;
    width: 0.8rem;
    height: .8rem;
    background-size: cover;
    display: inline-block;
}
/**/
.lxj-foot{
    background-color: #fff;
    margin-top: .4rem;
    padding: 0.1px 0.1px 0.4rem 0.1px;
    box-shadow: 0px 0px 1px #ccc;
}
.lxj-foot1{
    width: 100%;
    text-align: center;
    margin: 0.6rem 0;
    height: 1.6rem;
}
.lxj-foot1 p{
    font-size: 0.8rem;
    color: #666;
    line-height: 1.6rem;
}
.lxj-foot1 i{
    display:inline-block;
    margin-left: 0.6rem;
    background-image: url(../assets/imgtoday/you.png);
    background-size:cover;
    vertical-align: middle;
    width: 0.8rem;
    height: .8rem;
}
.lxj-foot2{
    width:100%;
    height:100%;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    z-index: 1;
}
.swiper-slide{
    font-size:0;
}
.swiper-slide a{
    position:relative;
    width:33% !important;
    display:inline-block;
    margin-right:1px !important;
}
.lxj-foot2 img{
    width:100%;
    height:7rem;
}
.lxj-dw{
    line-height: 0.75rem;
    width: 100%;
    z-index: 2;
    position: absolute;
    bottom: 0.3rem;
    text-align: center;
    color: #fff;
}
.lxj-dw1{
    display:block;
    font-size: 0.7rem;
    margin-bottom: 0.2rem;
}
.lxj-dw2{
    display:block;
    font-size: 0.6rem;
}
.lxj-sw-bg{
    position: absolute;
    height: 3.5rem;
    width: 100%;
    bottom: 0;
    z-index: 1;
    background-image:linear-gradient(to bottom,rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%);

}
</style>