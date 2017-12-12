<template>
	<div id="addadress">
		<!-- 头部 -->
		<div class="shB_header">
			<router-link to="/shouhuodz" class="shB_headA1"><span></span></router-link>
			<p class="sh_ell">添加收货地址</p>
		</div>
		<div class="shA_heaDown"></div>
		<form>
			<div class="shA_addInfo">
				<ul>
					<li>
						<label>收货人</label>
						<input type="text" name="" placeholder="请输入收货人姓名">
					</li>
					<li>
						<label>手机号码</label>
						<input type="text" name="" placeholder="请输入正确的联系号码">
					</li>
					<li>
						<label>详细地址</label>
						<input type="text" name="" placeholder="请输入真实详细地址">
					</li>
					<li class="shA_addOn">
						<label>设为默认地址	</label>
						<p>
							<input type="checkbox" checked name="">
							<i></i>
						</p>
					</li>
				</ul>
			</div>
			<div class="shA_addNan"></div>
			<router-link to="/index">
			<div class="shA_bottom">
				<input type="button" name="" value="保存">
			</div>
			</router-link>
		</form>
	</div>
</template>

<script>
	
</script>
<style scoped>
#shA_box{
	width:100%;
	background: #f8f8f8;
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
.shB_headA1 span{
	display:inline-block;
	width:1.4rem;
	height:1.4rem;
	background:url("../assets/img/B_arr.png") no-repeat;
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
	background:url("../assets/img/menu.png") no-repeat;
	background-size:cover;
	margin-top:.45rem;
}
.shB_header p{
	width:75%;
	margin:0 auto;
}
.shA_heaDown{
	height:2.7rem;
}
/*.........添加............*/
.shA_addInfo{
	margin:.5rem 0;
	padding:0 1rem;
	margin-top:0;
	background:#fff;	
}
.shA_addInfo li{
	height:2.5rem;
	line-height:2.5rem;
	border-bottom:1px solid #eaeaea;
	position:relative;
	font-size:.6rem;
}
.shA_addInfo li label{
	font-size:.7rem;
}
.shA_addInfo li>input{
	position:absolute;
	font-size:.7rem;
	color:#5d5d5d;
	font-family:"microsoft YaHei", sans-serif;
	left:3.7rem;
	top:50%;
	transform:translateY(-50%);
   	background-color: transparent;
   	border:none;
   	outline:none;
}
.shA_addInfo li input::-webkit-input-placeholder{
	color:#ccc;
	font-size:.4rem;
}
.shA_addInfo .shA_addOn{
	border:none;
}
.shA_addNan{
	height:2.5rem;
	background:#f8f8f8;
}
.shA_addOn p{
	height:2rem;
	line-height:2rem;
	float:right;
	margin-top:.5rem;
	position:relative;
}
.shA_addOn p input{
	display:inline-block;
	width:2rem;
	height:1rem;
	position:relative;
	border:1px solid #ff7836;
	border-radius:.5rem .5rem .5rem .5rem;
	-webkit-appearance:none;
	box-shadow: #ff7836 0 0 0 16px inset;
}
.shA_addOn p i{
	display:inline-block;
	width:1rem;
	height:1rem;
	position:absolute;
	top:.25rem;
	left:1.05rem;
	border-radius:.5rem .5rem .5rem .5rem;
	background:#fff;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
}
/*......底部....*/
.shA_bottom{
	height:3rem;
	line-height:3rem;
	position:fixed;
	bottom:0;
	left:0;
	border-top:1px solid #ececec;
	width:100%;
	background:#fff;
	text-align:center;
}
.shA_bottom input{
	font-size:.7rem;
	font-family:"microsoft YaHei", sans-serif;
	color:#ff8f5c;
	border:1px solid #ff8f5c;
	height:1.6rem;
	line-height:1.5rem;
	background:transparent;
	border-radius:.2rem;
	padding:0 5rem;
}
</style>