<template>
	 <div id="my">
			<div class="lxzan-head">
				<div class="lxzan-head-main">
					<div class="lxzan-head-left">
						<router-link to="/index">
							<i></i>
						</router-link>
					</div>
					<div class="lxzan-head-center">
						我的
					</div>
				</div>
			</div>
			<div class="lxm-top">
				<div class="lxm-top-main">
					<a href="javascript:void(0)">
						<span class="lxm-pic">
							<img src="../assets/imgmy/touxiang.png">
						</span>
					</a>
					<h3>skylee000</h3>
					<div class="lxm-jieshao">	
						<p>个人介绍：<span></span></p>
					</div>
					<a href="javascript:void(0)" class="lxm-jiang">
						<i></i> 签到有奖
					</a>
				</div>
			</div>
			<div class="lxm-bottom">
				<div class="lxm-hongbao">
					<router-link to="/hongbao">
						<div class="lxm-my-hb">
							我的红包
						</div>
						<div class="lxm-my-hb"><i></i></div>
					</router-link>>
					<a href="javascript:void(0)" class="lxm-you"><i class="lxm-icon"></i></a>
				</div>
				<router-link to="/duihuan">
					<div class="lxm-hongbao">
						<a href="javascript:(0)">
							<div class="lxm-my-hb">
								商城兑换
							</div>
						</a>
						<span class="lxm-you"><i class="lxm-icon"></i></span>
					</div>
				</router-link>
				<router-link to="/shouhuodz">
					<div class="lxm-hongbao">
						<a href="javascript:(0)">
							<div class="lxm-my-hb">
								收货地址
							</div>
						</a>
						<span class="lxm-you"><i class="lxm-icon"></i></span>
					</div>
				</router-link>
				<router-link to="/index">
					<div class="lxm-hongbao lxm-tuichu">
						<div class="lxm-my-hb" @click = "tuichu()">
							退出登陆
						</div>
					</div>
				</router-link>
			</div>
		</div>
</template>

<script>
	export default {
		mounted(){
            //添加修改state数据
            this.$store.dispatch("addDate",new Date());
        },
        methods: {
            tuichu() {
                if(confirm("确定要退出么")){
                    sessionStorage.favour = ""
                }
            }
        }
	}
</script>
<style scoped>
#my{
	height:100vh;
	background-color: #eee;
}
.clearfixed:after{
    content: ".";
    visibility: hidden;
    height: 0;
    clear: both;
    display: block;
}
/**/
.lxzan-head{
    background-color: #fff;
    height: 2.2rem;
    line-height: 2.2rem;
   /* position: fixed;*/
    width: 100%;
    /*left: 0;
    top: 0;*/
    z-index: 9;
    border-bottom: 1px solid #f2f2f2;
}
.lxzan-head-main{
    min-width: 320px;
    max-width: 640px;
    margin: 0 auto;
    text-align: center;
    color: #333;
    font-size: 0.8rem;
    position: relative;
    height: 2.2rem;
}
.lxzan-head-left{
    position:absolute;
    left: 0;
    top:0;
}
.lxzan-head-left a{
    display: block;
    height: 2.2rem;
    line-height: 2.1rem;
    width: 1.6rem;
    text-align: center;
}
.lxzan-head-left i{
    display:inline-block;
    background-image: url(../assets/imgmy/ico-back-black.png);
    margin-right: 0.09rem;
    vertical-align: top;
    width: 1.4rem;
    height: 1.4rem;
    margin-top: 0.45rem;
    background-size:cover;
}
.lxzan-head-center{
    width: 8.6rem;
    height:2.2rem;
    margin:0 auto;
    text-align:center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
/**/
.lxm-top{
    width: 100%;
    height: 11.43rem;
    background: url(../assets/imgmy/1.jpg) 0% 0% / cover;
    position: relative;
    /*margin-top:2.2rem;*/
}
.lxm-top-main{
    position: absolute;
    bottom: 0;
    left: 0;
    height: 4.5rem;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    padding: 0 1rem;
    color: #fff;
}
.lxm-pic{
    width: 3rem;
    height: 3rem;
    display: block;
    position: absolute;
    top: -1.3rem;
}
.lxm-pic img{
    max-width: 100%;
    font-size: 0px;
    display: block;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    border-radius: 5rem;
}
.lxm-top-main h3{
    font-size: 0.85rem;
    margin: 0.4rem 5.5rem 0.8rem 3.5rem;
    height: 1rem;
    line-height: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    word-break: break-all;
}
.lxm-jieshao{
    font-size: 0.65rem;
    line-height: 0.9rem;
    height: 1.8rem;
}
.lxm-jieshao p{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
}
.lxm-jiang{
    position: absolute;
    top: 0.4rem;
    right: 1rem;
    padding: 0.1rem 0.3rem;
    line-height: 1rem;
    border: 1px solid #fff;
    border-radius: 0.2rem;
    font-size: 0.7rem;
    color: #fff !important;
}
.lxm-jiang i{
    display: inline-block;
    margin-top:0.05rem;
    width:0.8rem;
    height:0.8rem;
    vertical-align:top;
    background-image: url(../assets/imgmy/icon.png);
    background-size: cover;
}
/**/
.lxm-bottom{
    background-color: #e6e6e6;
}
.lxm-hongbao{
    position: relative;
    height: 2.375rem;
    line-height: 2.375rem;
    background-color: #fff;
    font-size: 0.65rem;
    padding:0 1rem;
    margin-top:0.5rem;
}
.lxm-my-hb{
    width: 50%;
    float: left;
    font-size: 0.7rem;
    color: #50493e;
    height: 2.375rem;
    line-height: 2.375rem;
    text-align: right;
    padding-right: 0.8rem;
}
.lxm-my-hb:first-child{
    text-align:left;
}
.lxm-my-hb i{
    font-style:normal;
    display:inline-block;
    margin-top: 0.65rem;
    margin-left: 0.1rem;
    width: 0.75rem;
    height: 1rem;
    background-image: url(../assets/imgmy/ico-voucher.png);
    vertical-align: top;
    background-size:cover;
}
.lxm-you{
    display: block;
    position: absolute;
    right: 0.5rem;
    vertical-align: top;
    top: 0;
}
.lxm-icon{
    font-style: normal;
    background-size: cover;
    margin-top: 0.86rem;
    margin-left: 0.1rem;
    width: .65rem;
    height: .65rem;
    background-image: url(../assets/imgmy/ico-more.png);
    vertical-align: top;
    display: inline-block;
    background-repeat:no-repeat;
}
.lxm-tuichu{
    margin:0.5rem 0;
}
.lxm-tuichu .lxm-my-hb{
    text-align: center;
    color: #ff8f5c;
    font-size: 0.7rem;
    margin:0 auto;
    float:none;
}
</style>