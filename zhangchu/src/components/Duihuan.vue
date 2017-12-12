<template>
	<div id="duihuan">
		<div>
			<div class="lxzan-head">
				<div class="lxzan-head-main">
					<div class="lxzan-head-left">
						<router-link to="/myself">
							<i></i>
						</router-link>
					</div>
					<div class="lxzan-head-center">
						红包兑换
					</div>
				</div>
			</div>
			<div class="lxd-main">
				<div class="lxd-main1">
					<ul>
						<li>
							<a href="javascript:void(0)">兑换礼品</a>
						</li>
						<li>
							<a href="javascript:void(0)">我的订单</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="lxd-jilu">
				<ul>无兑换记录，快去兑换哦</ul>
			</div>
		</div>
	</div>
</template>

<script>
	
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
    background-image: url(../assets/imgdh/ico-back-black.png);
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
.lxd-main{
    width:100%;
    text-align: center;
    position: fixed;
    top: 2.2rem;
    left: 0;
    z-index: 1;
    margin: 0rem auto;
    height: 2.2rem;
}
.lxd-main1{
    height: 2.2rem;
    min-width: 320px;
    max-width: 640px;
    margin: 0 auto;
    text-align: center;
    position: relative;
    background-color: #f8f8f8;
    border-bottom: 1px solid #eaeaea;
}
.lxd-main1 ul{
    display: inline-block;
    text-align: center;
    margin: 0.5rem 0 0;
}
.lxd-main1 li{
    color: #999999;
    border-bottom: none;
    width: auto;
    padding: 0 2rem;
    height: 1.25rem;
    line-height: 1.25rem;
    margin: 0;
    float:left;
}
.lxd-main1 li:first-child{
    border-right: 1px solid #e3e3e3;
}
.lxd-main1 li a{
    color: #999999;
    font-size: .7rem;
    height: 1.5rem;
    line-height: 1.25rem;
    display: block;
}
.lxd-main1 li:first-of-type a{
    border-bottom: 0.1rem solid #ff8f5c;
    color: #50493e;
}
/**/
.lxd-jilu{
    padding: 0.5rem 0.2rem;
    background-color: #fff;
    position: relative;
    top:4.4rem;
    padding-bottom: 0.1rem;
}
.lxd-jilu ul{
    font-size: 0.7rem;
    text-align: center;
    color: #999999;
}
</style>