<template>
	<div id="main">
		<span>main欢迎你</span>
	</div>
</template>

<script>
	export default {
		mounted(){
			console.log(this.$store.getters.getDate);
		}
	}
</script>
<style>
	
</style>