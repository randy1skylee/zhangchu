<template>
	<div id="shipin">
		<div class="ch-mfood ch-shicai">
            <div class="ch-mfood0 ch-shicai0">
                <div class="ch-mfood1 ch-shicai1">
                    <router-link to="/shicai">
                    <a href="#">
                        <i></i>
                    </a>
                    </router-link>
                </div>
                <div class="ch-mfood2 ch-shicai2">
                    <ul>
                        <li class="ch-lizero"><a href="#">素菜</a></li>
                    </ul>
                </div>
                <div class="ch-mfood4 class=ch-shicai4">
                    <a href="#">
                        <i></i>
                    </a>      
                </div>
            </div>
        </div>
        <div class="ch-bofang">
            <ul>
                <li v-for="item in data.data">
                    <a href="#">
                        <img :src="item.image">
                        <div class="ch-bodiv">
                            <span class="ch-bospan1">{{item.title}}</span>
                            <span class="ch-bospan2">{{item.description}}</span>
                        </div>
                        <i class="ch-boi"></i>
                    </a>
                </li>
            </ul>
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
                    <span class="ch-endspan"></span>
                </div>
            </div>
        </div>
	</div>
</template>

<script>
	export default {
		data(){
            return{
                data:{}
            }
        },

       created:function(){
        this.$http.get("http://api.izhangchu.com/",{
           params:{
                methodName:"CategorySearch",
                version:1.0,
                user_id:0,
                type:1,
                page:1,
                cat_id:123,
                size:5
           }
        }).then((res)=>{
            this.data=res.data.data;
        })
       }
	}
</script>
<style scoped>
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
	width:8.6rem;
	margin:0 auto;
}
.ch-mfood2 ul li{
	float: left;
	width:100%;
	height:2.15rem;
	margin:0 0.3rem;
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

.ch-bofang{
	margin-top: 2.2rem;
	width:100%;
	background-color:#f8f8f8;
}
.ch-bofang li{
	padding:0.5rem 0 0 0;
	background-color:rgba(236,236,236,1);
}
.ch-bofang li a img{
	width:100%;
	height:100%;
	display: block;
}
.ch-bofang li a{
	position:relative;
	display: block;
	padding:0.5rem 0;
	background-color: #fff;
}
.ch-bodiv{
	position: absolute;
    bottom: 0.5rem;
    left: 0rem;
    right: 2.4rem;
    z-index: 4;
    height: 3rem;
    width:100%;
    padding-top: 0.7rem;
    background: -webkit-linear-gradient(top, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
}
.ch-bodiv span{
	display: block;
	margin-left:0.5rem;
	
}
.ch-bospan1{
	font-size: 0.7rem;
	color:#fff;
}
.ch-bospan2{
	font-size: 0.6rem;
	color:#f0f0f0;
}
.ch-boi{
	display: block;
	position: absolute;
    right: 0.8rem;
    bottom: .8rem;
    z-index: 4;
    width: 2.1rem;
    height: 2.1rem;
    left:50%;
    top:50%;
    margin-top: -1.05rem;
    margin-left: -1.05rem;
    background:url(../assets/img/bofang/play.png) no-repeat;
    background-size:cover;
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
</style>