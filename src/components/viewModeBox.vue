<template>
	<div class="viewModeBox">
		<div  :class="{ 'chosenMode' : viewMode=='card' }">
			<i class='iconCard'></i>
			<span>卡片檢視</span>
		</div>
		<div :class="{ 'chosenMode' : viewMode=='list' }">
			<i class='iconList'></i>
			<span>摘要檢視</span>
		</div>
		<div :class="{ 'chosenMode' : viewMode=='text' }">
			<i class='iconText' ></i>
			<span>文字列表檢視</span>
		</div>
		
		
		
	</div>
</template>
<script>
	export default {
		name: 'viewModeBox',
		props: {
			"viewMode": String
		},
		data: function() {
			return {
				// viewMode: this.viewModeNow
			}
		},
		computed: {

		}
	}
</script>
<style lang="scss">
@import "@/scss/_variables.scss";
	.viewModeBox{
		width: 180px;
		padding-top: 20px;
		height: 150px;
		background-color: #F4F6F7;
		position: absolute;
		border: 2px solid $border-cl;
		z-index: 999;
		top: 25px;
		border-radius: 5px;
	}
	.viewModeBox>div {
		margin: auto;
		display: flex;
		align-content: center;
		padding: 10px;
	}
	.viewModeBox>div>span {
		margin-left: 10px;
	}
	.chosenMode {
		background-color: $primary;
		color: #fff;
	}
</style>