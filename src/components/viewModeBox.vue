<template>
	<div class="outer" @click="viewBoxDisappear">
		<div class="viewModeBox" @click="viewBoxDisappear">
			<div v-for='mode in getAllViewMode'
				:id="mode.id"
				:key="mode.key"
				:class="{ 'chosenMode' : viewMode==mode.name }"
				@click="changeViewMode(mode.name)">
				<i :class="'icon-'+mode.name"></i>
				<span>{{mode.text}}</span>
			</div>
		</div>
	</div>
	
</template>
<script>
	export default {
		name: 'viewModeBox',
		props: {
			"viewMode": String,
			"isShowModeBox": Boolean
		},
		data: function() {
			return {
				// viewMode: this.viewModeNow
			}
		},
		computed: {
			getAllViewMode: function() {
				return this.$store.state.allViewMode
			},
			getNowViewMode: {
				get: function(){
					return this.$store.state.nowViewMode
				},
				set: function(val) {
					this.$store.state.nowViewMode = val
				}
			}
		},
		methods: {
			changeViewMode: function(name) {
				this.getNowViewMode = name
			},
			viewBoxDisappear: function() {
				this.$emit('viewBoxDisappear',this.isShowModeBox)
			}
		}
	}
</script>
<style lang="scss">
@import "@/scss/_variables.scss";

	.viewModeBox{
		width: 180px;
		padding-top: 15px;
		height: 150px;
		background-color: #F4F6F7;
		position: relative;
		border: 2px solid $border-cl;
		z-index: 999;
		top: -20px;
		left: calc(100% - 25px);
		border-radius: 5px;
	}
	.viewModeBox>div {
		margin: auto;
		display: flex;
		align-content: center;
		padding: 10px 15px;
	}
	.viewModeBox>div>span {
		margin-left: 10px;
	}
	.chosenMode {
		background-color: $primary;
		color: #fff;
	}
</style>