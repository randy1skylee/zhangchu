<template>
	<div id="shequ">
		<div style="background-color:#f8f8f8;">
            <div class="lxz-head">
                <div class="lxz-head1">
                    <ul class="clearfixed">
                         <li><router-link to="/index">首页</router-link></li>
                        <li>&gt;</li>
                        <li>社区</li>
                    </ul>
                    <div class="lxz-head2">
                        <a href="javascript:void(0)" class="lxz-head3">
                            <i class="lxz-headico"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="lxs-main">
                <ul class="clearfixed">
                     <li v-for="item in data"><router-link to="/oneperson">
                        <a href="javascript:void(0)">
                            <img :src="item.image" class="lxs-pic">
                        </a>
                        <div class="lxs-infor">
                            <a href="javascript:void(0)">
                                <img :src="item.head_img">
                            </a>
                            <a href="javascript:void(0)">
                                <span class="lxs-inS1">{{item.nick}}</span>
                                <span class="lxs-inS2">{{item.create_time}}</span>
                            </a>
                        </div>
                    </router-link></li>
                    
                </ul>
            </div>
            <div class="lxz-load" @click="more">还剩下<span class="lxz-num">{{data1.total-count*data1.size}}</span>个帖子</div>
        </div>
	</div>
</template>

<script>
	export default {
		 data(){
            return {
                data:[],
                count:1,
                data1:{}
            }
        },
        created:function(){
            this.$http.get("http://api.izhangchu.com/",{
                params:{
                    methodName:"ShequList",
                    version:4.1,
                    page:1,
                    size:10,
                    is_marrow:0,
                    user_id:0
                }
            }).then((res)=>{
                this.data = res.data.data.data;
                this.data1=res.data.data
            })
        },
         methods:{
            more:function(){
                this.count++;
                this.$http.get("http://api.izhangchu.com/",{
                    params:{
                        methodName:"ShequList",
                        version:4.1,
                        page:this.count,
                        size:10,
                        is_marrow:0,
                        user_id:0
                    }
                }).then((res)=>{
                    this.data= this.data.concat(res.data.data.data);
                })
            }
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
    background: url(../assets/imgsq/menu.png);
    width: 1.4rem;
    height: 1.4rem;
    margin-top: 0.45rem;
    background-size: cover;
    vertical-align: top;
}
/**/
.lxs-main{
    padding: 0.4rem 0 0 0;
    min-height: 10rem;
    margin-top: 2.2rem;
}
.lxs-main li{
    margin-bottom: 0.1rem;
    position: relative;
    margin-top: 0;
    overflow: hidden;
    width: 50%;
    height: 10rem;
    float: left;
    background-color:#fff;
}
.lxs-main li:nth-child(2n+1){
    padding-left: 0;
    border-right: 0.05rem solid #f8f8f8;
}
.lxs-main li:nth-child(2n+2) {
    padding-left: 0.05rem;
    padding-right: 0;
}
.lxs-main a{
    background-color: #fff;
    position: relative;
    overflow: hidden;
    display: block;
}
.lxs-main li>a{
    height: 8rem;
    width: 100%;
}
.lxs-pic{
    max-width: 100%;
    font-size: 0px;
    display: block;
    margin: 0 auto;
}
.lxs-infor{
    height: 2rem;
    position: relative;
    width: 100%;
}
.lxs-main .lxs-infor a{
    position: absolute;
}
.lxs-infor a:first-child{
    margin-left: 0.25rem;
    margin-right: 0.25rem;
    width: 2rem;
    height: 2rem;
}
.lxs-infor a:last-child{
    padding-top: 0.15rem;
    width: 4.9rem;
    margin-left: 2.5rem;
    height: 2rem;
    z-index: 2;
    background-color: #fff;
}
.lxs-infor img{
    border-radius: 3rem;
    width: 1.5rem;
    height: 1.5rem;
    margin-top: 0.25rem;
    margin-left: 0.25rem;
}
.lxs-inS1{
    display: block;
    color: #50493e;
    overflow: hidden;
    height: 0.8rem;
    line-height: 0.8rem;
    font-size: 0.7rem;
    margin-bottom: 0.2rem;
}
.lxs-inS2{
    display:block;
    color: #a3a3a3;
    overflow: hidden;
    height: 0.7rem;
    line-height: 0.7rem;
    font-size:0.6rem;
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
}
</style>