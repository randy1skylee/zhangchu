<template>
	<div id="zan" style="background-color:#eee">
		<div class="lxzan-head">
            <div class="lxzan-head-main">
                 <router-link to="/oneperson"><div class="lxzan-head-left">
                    <a href="javascript:void(0)">
                        <i></i>
                    </a>
                </div></router-link>
                <div class="lxzan-head-center">
                    TA们都点了赞
                </div>
            </div>
        </div>
        <div class="lxzan-main">
            <div class="lxzan-lists">
                <div class="lxzan-comment" v-for="item in data.data">
                    <div class="lxzan-comment-list">
                        <div class="lxzan-list-pic">
                            <img :src="item.head_img">
                        </div>
                        <div class="lxzan-say"> 
                            <p>
                                <span class="lxzan-nick">{{item.nick}}</span>,觉得该作品很赞
                            </p>
                            <div class="lxzan-time">
                                {{item.create_time_cn}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="lxzan-foot">
                <div class="lxz-load">还剩下<span class="lxz-num">{{data.total-data.page*data.size}}</span>条点赞</div>
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
                    methodName:"DianzanList",
                    version:4.2,
                    post_id:132779,
                    page:1,
                    size:10,
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
.lxzan-head{
    background-color: #fff;
    height: 2.2rem;
    line-height: 2.2rem;
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    z-index: 9;
    border-bottom: 1px solid #f2f2f2;
}
.lxzan-head-main{
    min-width: 320px;
    max-width: 640px;
    margin: 0 auto;
    text-align: center;
    color: #333;
    font-size: 0.7rem;
    position: relative;
    height: 2.2rem;
}
.lxzan-head-left{
    position:absolute;
    left: 0;
    top:0;
}
.lxzan-head-left i{
    display:inline-block;
    background-image: url(../assets/imgzan/ico-back-black.png);
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
}
/**/
.lxzan-main{
    margin-top:2.2rem;
    padding-bottom:0.5rem;
}
.lxzan-comment {
    padding: 0.2rem 0.2rem 0.2rem 0.4rem;
    border-bottom: 1px solid #ccc;
}
.lxzan-comment-list{
    padding:0.2rem;
    font-size:0.6rem;
}
.lxzan-list-pic{
    display:inline-block;
    zoom:1;
    width:14%;
    height:2rem;
}
.lxzan-list-pic img{
    border-radius: 3rem;
    width: 2rem;
    height: 2rem;
}
.lxzan-say{
    display:inline-block;
    zoom:1;
    min-height: 1rem;
    vertical-align: top;
    width: 84%;
    position: relative;
}
.lxzan-say p{
    margin-top:0.2rem;
}
.lxzan-nick{
    color:#ff8f5c;
}
.lxzan-time{
    margin-top:0.3rem;
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
</style>