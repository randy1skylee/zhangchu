<template>
	<div id="zhuanti">
        <v-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore" bottomPullText='' topPullText=''> 
		<div>
			<div class="lxz-head">
				<div class="lxz-head1">
					<ul class="clearfixed">
						<li><router-link to="/index">首页</router-link></li>
						<li>&gt;</li>
						<li><a href="javascript:void(0)">专题列表</a></li>
					</ul>
					<div class="lxz-head2">
						<a href="javascript:void(0)" class="lxz-head3">
							<i class="lxz-headico"></i>
						</a>
					</div>
				</div>
			</div>
			<div class="lxz-main">
				<ul>
					<li class="lxz-md" v-for="item in data"> 
						<div class="lxz-item">
							<router-link to="/lidong">
								<img :src="item.image">
								<span class="lxz-title">{{item.title}}</span>
								<span class="lxz-title2">{{item.description}}</span>
							</router-link>
						</div>
					</li>
					
				</ul>
				<div class="lxz-load" @click="more">还剩下<span class="lxz-num">{{data1.total-count*data1.size}}</span>专题</div>
			</div>
		</div>
        </v-loadmore>  
	</div>
</template>

<script>
    import {Loadmore} from 'mint-ui';
   


	export default {
        data() {
            return {
                searchCondition:
                { 
                    pageNo:"1",
                    pageSize: "10"
                },
                pageList: [],
                allLoaded: false,
                scrollMode: "auto" ,
                data:[],
                count:1,
                data1:{}
            }
        },
        components: {
            'v-loadmore': Loadmore 
        },
        
        mounted() {
            this.$http.get("http://api.izhangchu.com/",{
                params:{
                    methodName:"TopicList",
                    version:1.0,
                    user_id:0,
                    page:1,
                    size:10
                }
                }).then((res)=>{
                    this.data = res.data.data.data;
                    this.data1=res.data.data
            })
            // this.loadPageList(); //初次访问查询列表  
        },
        methods: {
            loadTop: function() { //组件提供的下拉触发方法  
                this.data = [];
                this.data1= {};
                this.$http.get("http://api.izhangchu.com/",{
                params:{
                    methodName:"TopicList",
                    version:1.0,
                    user_id:0,
                    page:1,
                    size:10
                }
                }).then((res)=>{
                    this.data = res.data.data.data;
                    this.data1=res.data.data
                })
                //下拉加载  
                this.loadPageList();
                this.$refs.loadmore.onTopLoaded(); // 固定方法，查询完要调用一次，用于重新定位  
            },
            loadBottom: function() {
                this.count++;
                this.$http.get("http://api.izhangchu.com/",{
                    params:{
                        methodName:"TopicList",
                        version:1.0,
                        user_id:0,
                        page:this.count,
                        size:10
                    }
                }).then((res)=>{
                    this.data= this.data.concat(res.data.data.data);
                });
                 // 上拉加载  
                this.more(); // 上拉触发的分页查询  
                this.$refs.loadmore.onBottomLoaded(); 
            },
            loadPageList: function() {
                // // 查询数据  
                // this.api.PageList(this.searchCondition).then((data) =>{
                //     // 是否还有下一页，加个方法判断，没有下一页要禁止上拉  
                //     this.isHaveMore(data.result.haveMore);
                //     this.pageList = data.result.pageList;
                //     this.$nextTick(function() {
                //         this.scrollMode = "touch";
                //     });
                // });
            },
            more: function() {
                // // 分页查询  
                // this.searchCondition.pageNo = parseInt(this.searchCondition.pageNo) + 1;
                // this.api.loadPageList(this.searchCondition).then(data =>{
                //     this.pageList = this.pageList.concat(data.result.pageList);
                //     this.isHaveMore(data.result.haveMore);
                // });
            },
            isHaveMore: function(isHaveMore) {
                // // 是否还有下一页，如果没有就禁止上拉刷新  
                // this.allLoaded = true; //true是禁止上拉加载  
                // if (isHaveMore) {
                //     this.allLoaded = false;
                // }
            },
            more:function(){
                this.count++;
                this.$http.get("http://api.izhangchu.com/",{
                    params:{
                        methodName:"TopicList",
                        version:1.0,
                        user_id:0,
                        page:this.count,
                        size:10
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
    background: url(../assets/imgzt/menu.png);
    width: 1.4rem;
    height: 1.4rem;
    margin-top: 0.45rem;
    background-size: cover;
    vertical-align: top;
}
.lxz-main{
    margin-top:2.6rem;
}
.lxz-md{
    background-color: #fff;
    margin-top: .4rem;
    padding: 0.5rem .5rem;
    box-shadow: 0px 0px 1px #ccc;
}
.lxz-item{
    margin-top: 0rem;
    margin-bottom: .3rem;
}
.lxz-item img{
    max-width: 100%;
    font-size: 0px;
    display: block;
    margin: 0 auto;
    border-radius:4px;
}
.lxz-title{
    margin-top: .2rem;
    margin-bottom: .2rem;
    color: #515151;
    font-size: 0.8rem;
    display:block;
}
.lxz-title2{
    display: block;
    color: #a3a3a3;
    font-size: 0.6rem;
}
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