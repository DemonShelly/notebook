<template>
	<div class="containerSideBar ">
		<div class="col" id='logo'>
			<!-- <img id='noteLogo' src="../assets/logo.png" alt=""> -->
			<span>FreeNote .</span>
		</div>
		<div class="col">
			<div id='createNote' @click='addNewNote()'>
				<span id="createWrapper">
					<i id="create"></i>
				</span>
				<span>新增筆記</span>
			</div>
		</div>
		<div>
			<ul>
				<li v-for="(item, key) in sideBarList" :key='key' class="sideBarEach">
					<!-- <i class="sideBarIcon" :style="{background: 'url( ~@/assets/' + item.icon + ') center center no-repeat;' }"></i> -->
					<!-- <i class="sideBarIcon" :style="{ background: 'url(' + require('@/assets/file.svg') + ')' }"></i> -->
					<i class="sideBarIcon" :style="{ background: 'url(' + require('@/assets/'+item.icon) }"></i>
					<!-- <i class="sideBarIcon"></i> -->
					<span>{{ item.title }}</span>
				</li>
			</ul>
		</div>

	</div>

</template>
<script>
	export default{
		name: 'sideBar',
		data: function() {
			return {
				iconPath: '../assets',
			}
		},
		computed: {
			sideBarList: function() {
				return [
					{
						title: '所有筆記',
						icon: `file.svg`
					},{
						title: '捷徑',
						icon: `bookmark.svg`
					},{
						title: '標籤',
						icon: `label.svg`
					},{
						title: '月曆',
						icon: `calendar_today.svg`
					},{
						title: '與我共用',
						icon: `people.svg`
					},{
						title: '垃圾桶',
						icon: `delete.svg`
					}

				]
			}
		},
		methods: {
			addNewNote: function() {
				this.$store.state.allNote.push({
					title: '無標題',
					content: '',
					tag: '',
					attachment: '',
					date: this.getDate(),
					isStar: false
				})
			},
			getDate: function(){
				let date = new Date()
				let y = date.getFullYear()
				let m = date.getMonth()+1
				let d = date.getDate()
				let res = `${y}/${m}/${d}`
				return res
			}
		}
	}
</script>
<style lang="scss">
	@import "@/scss/_variables.scss";


	* {
		margin: 0;
		padding: 0;
		font-size: 16px;
		font-family:Microsoft JhengHei;
		font-weight: 600;

	}
	ui, li {
		list-style-type: none;
	}
	i {
		display: inline-block;
		position: relative;
		width: 25px;
		height:  25px;
		background-size: cover;
	}
	.sideBarIcon {
		background-size: cover;
		margin-right: 10px;
		filter: invert(100%) sepia(20%) saturate(5090%) hue-rotate(209deg) brightness(122%) contrast(111%);
	}
	.sideBarEach {
		display: flex;
		align-items: center;
		height: 40px;
		margin-left: 20px;
		cursor: pointer;
	}
	.containerSideBar {
		padding: $main-padding;
		box-sizing: border-box;
	}
	#logo span{
		width: 100px;
		font-size: 1.3rem;
	}
	#logo {
		margin-left: 25px;
	}	#createWrapper {
		width: 25px;
		height:  25px;
		background-color: #2F419B;
		border-radius: 100%;
		margin-right: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	#create {
		background: url('../assets/add-white.svg') center center no-repeat;
		background-size: cover;
		fill: #fff;
		width: 20px;
		height: 20px;
		/* filter: grayscale(100%) brightness(5); */
	}
	#createNote{
		width: 100%;
		height:45px;
		background-color: #ffffff;
		color: #2F419B;
		margin: 25px auto;
		font-weight: 800;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 5px;
		cursor: pointer;
	}
	.containerSideBar {
		background-color: $primary;
		height: 100vh;
		width: 20%;
		color: #ffffff;
	}

</style>