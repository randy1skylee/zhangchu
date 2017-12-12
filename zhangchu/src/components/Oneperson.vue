<template>
	<div id="oneperson">
		<div style="background-color:#f8f8f8;">
            <div class="lxz-head">
                <div class="lxz-head1">
                    <ul class="clearfixed">
                        <li><router-link to="/index">首页</router-link></li>
                        <li>&gt;</li>
                         <li><router-link to="/shequ">社区</router-link></li>
                        <li>&gt;</li>
                        <li>一人食</li>
                    </ul>
                    <div class="lxz-head2">
                        <a href="javascript:void(0)" class="lxz-head3">
                            <i class="lxz-headico"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="lxo-main">
                <div class="lxo-main-top">
                    <div class="lxo-main-Pic">
                        <img :src="data.image">
                    </div>
                    <div class="lxo-kong"></div>
                    <div class="lxo-author">
                        <div class="lxo-inline">
                            <img :src="data.head_img">
                        </div>
                        <div class="lxo-jieshao">
                            <p class="lxo-name">{{data.nick}}</p>
                            <p class="lxo-time">{{data.create_time}}</p>
                        </div>
                    </div>
                </div>
                <div class="lxo-related">
                     <router-link to="/zan"><div class="lxo-zan">
                        <span class="lxo-num">{{data.agree_count}}</span>人觉得很赞 
                        <span class="lxo-icon"></span>
                    </div>
                    <ul class="lxo-ul">
                        <a href="javascript:void(0)" class="lxo-icon1">
                            <i></i>
                        </a>
                        <li v-for="(item,index) in data.like" v-if="index<7">
                            <div class="lxo-zan-pic">
                                <img :src="item.head_img">
                            </div>
                        </li>
                    </ul></router-link>
                    <div class="lxo-more">
                        更多<span>一人食</span>的作品
                    </div>
                    <div class="lxoPic">
                        <ul class="lxo-Pic">
                            <li v-for="(item,index) in data.relates" v-if="index<8">
                                <a href="javascript:void(0)">
                                    <img :src="item.image">
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="lxo-dianping">
                    <span>0</span>条点评
                </div>
                <div class="lxo-say">
                    <span class="lxo-let-mesay">我也说两句</span>
                </div>
            </div>
            <div class="lxo-write-dianping">
                <div class="lxo-foot">
                <div class="lxo-input">
                    <input id="commentMsg" placeholder="请写下你的评论">
                </div>
                <span class="lxo-send">发送</span>
                </div>
            </div>
        </div>
	</div>
</template>

<script>
	export default {
		data(){
            return {
                data:{}
            }
        },
        created:function(){
            this.$http.get("http://api.izhangchu.com/",{
                params:{
                    methodName:"ShequPostview",
                    version:4.2,
                    post_id:132784,
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
    background: url(../assets/imgone/menu.png);
    width: 1.4rem;
    height: 1.4rem;
    margin-top: 0.45rem;
    background-size: cover;
    vertical-align: top;
}
/**/
.lxo-main{
    margin-top:2.2rem;
    padding-bottom: 0.5rem;
}
.lxo-main-top{
    min-height: 20rem;
    width: 100%;
}
.lxo-main-top img{
    width:100%;
}
.lxo-kong{
    padding: 0.3rem 0.3rem 0 0.3rem;
    font-size: 0.6rem;
}
.lxo-author{
    padding: 1rem 0 0.5rem 0.5rem;
    border-bottom:1px solid #eaeaea;
}
.lxo-inline{
    display: inline-block;
}
.lxo-inline img{
    border-radius: 3rem;
    width: 2.5rem;
    height: 2.5rem;
}
.lxo-jieshao{
    vertical-align: top;
    margin-left: 0.4rem;
    font-size: 0.7rem;
    display:inline-block;
}
.lxo-name{
    color: #464646;
    font-size: 0.65rem;
}
.lxo-time{
    font-size:0.6rem;
    padding-top:0.4rem;
}
/**/
.lxo-related{
    padding: 0.6rem 0 0.8rem 0.4rem;
    color: #464646;
    font-size: 0.65rem;
    border-bottom:1px solid #eaeaea;
}
.lxo-zan{
    position: relative;
    height: 1rem;
    line-height: 1rem;
    margin-bottom: 0.7rem;
}
.lxo-icon{
    position: absolute;
    right: 0.5rem;
    top: 0;
    width: 1rem;
    height: 1rem;
    vertical-align: top;
    background: url(../assets/imgone/shou.png);
    background-size: cover;
}
.lxo-ul{
    position: relative;
    width: 100%;
    height: 1.5rem;
    font-size:0;
}
.lxo-icon1{
    position: absolute;
    right: 0.6rem;
    top: 0;
    width: 1rem;
    height: 1.5rem;
    color: #ccc;
}
.lxo-icon1 i{
    margin-top: 0.425rem;
    margin-left: 0.5rem;
    width: .625rem;
    height: .625rem;
    vertical-align: middle;
    background-image: url(../assets/imgone/you.png);
    background-repeat: no-repeat;
    background-size: cover;
    display: inline-block;
}
.lxo-ul li{
    display: inline-block;
}
.lxo-zan-pic{
    border-radius: 1.5rem;
    width: 1.5rem;
    height: 1.5rem;
    background-color: #ffeeee;
    margin-right: 0.5rem;
}
.lxo-zan-pic img{
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 1.5rem;
    margin-right: 0.2rem;
}
.lxo-more{
    padding:0.7rem 0;
}
.lxo-more span{
    color:#ff8f5c;
}

.lxoPic{
    overflow-y: scroll;
    font-size:0;
}
.lxoPic::-webkit-scrollbar{
    display:none;
}
.lxo-Pic{
   width:234%;
}
.lxo-Pic li{
   width:12%;
   display:inline-block;
   margin-right:.3%;
}
.lxo-Pic a{
    display:inline-block;
}
.lxo-Pic img{
    width:100%;
}
/**/
.lxo-dianping{
    font-size: 0.6rem;
    padding: 0.5rem;
}
.lxo-say{
    width: 100%;
    padding: 0 0.5rem 0.5rem 0.5rem;
    border-bottom:1px solid #eaeaea;
}
.lxo-let-mesay{
    display: block;
    width: 100%;
    text-align: center;
    background-color: #ff8f5c;
    color: #fff;
    padding: 0.2rem;
    border-radius: 4px;
    font-size:0.7rem;
}


.lxo-main{
    margin-bottom:2.5rem;
}

.lxo-write-dianping{
    position: fixed;
    z-index: 9;
    bottom: 0;
    left: 0;
    background-color: #ccc;
    padding: 0.5rem 0.2rem;
    width: 100%;
    font-size:0;
}
.lxo-foot{
    min-width: 320px;
    max-width: 640px;
    margin: 0 auto;
    position:relative;
}
.lxo-input input{
    color: #464646;
    font-family: 'Microsoft Yahei', Tahoma, Helvetica, Arial, sans-serif， Helvetica Neue, Helvetica, Arial, sans-serif;
    width: 80%;
    height: 1.5rem;
    line-height: 1.5rem;
    border: 0;
    -webkit-appearance: none;
    border-radius: 4px;
    padding: 0 0.5rem;
}
.lxo-send{
    position: absolute;
    display: block;
    right: 0;
    top: 0;
    height: 1.5rem;
    line-height: 1.5rem;
    padding: 0 0.6rem;
    background-color: #ff8f5c;
    vertical-align: top;
    border-radius: 4px;
    color: #fff;
    font-size: 0.7rem;
}
::-webkit-input-placeholder{
    color: #ccc;
    font-family:"microsoft YaHei";
    font-size: .7rem;
}
</style>