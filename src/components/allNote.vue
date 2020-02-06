<template>
	<div class="containerAllNote ">
		<div class="container-top">
			<div id='searchContainer'>
				<i id='iconSearch'></i>
				<input type="" name="search" id='searchBar' placeholder="搜尋您的筆記" >
			</div>
			<div class="divContainer">
				<div>
					<span>所有筆記</span>
					<i id='dropdown'></i>
				</div>
				<div class="viewModeIcon">
					<i class='iconCard vw-icon' v-if="viewMode=='card'"  @click='showModeBox'></i>
					<i class='iconList vw-icon' v-if="viewMode=='list'"  @click='showModeBox'></i>
					<i class='iconText vw-icon' v-if="viewMode=='text'"  @click='showModeBox'></i>
					<viewModeBox v-if="isShowModeBox" :viewMode="viewMode"></viewModeBox>
				</div>
			</div>
		</div>
		
		<!-- <div id="lineDevide"></div> -->
		<div class="container-bottom">
			<div class="cardMode" v-if="viewMode=='card'">
				<ul>
					<li class="card" v-for="(item, index) in getAllNote" :key='index' @click='showNote(index)' :class="{'chosenNote': getShowNoteIndex==index }">
						<div class="cardHead">
							<i class="star" :class="[ item.isStar? 'iconStar' : 'iconStarBorder']"></i>
							<span class="cardTitle">{{item.title}}</span>
						</div>
						<div class="cardline"></div>
						<div class="cardContent" v-html="item.content">
							<!-- {{item.content}} -->
						</div>
						<div class="cardFoot">
							<ul class="cardTagsContainer">
								<li class="cardTag" v-for="(tag, index) in item.tags" :key='index'>
									<span>{{tag}}</span>
								</li>
							</ul>
							<span :class="{ 'noInfo': !item.attachment }"><i class="iconAttachment"></i></span>
							<span class="cardDate">{{item.date}}</span>
						</div>
					</li>
				</ul>
			</div>
		</div>
		
	</div>
</template>
<script>
	import viewModeBox from "@/components/viewModeBox.vue"
	export default {
		name: 'allNote',
		data: function() {
			return {
				viewMode: 'card',
				isShowModeBox: false,
			}
		},
		components: {
			viewModeBox
		},
		computed: {
			getAllNote: function(){
				return this.$store.state.allNote
			},
			getShowNoteIndex: {
				get: function () {
					return this.$store.state.showNoteIndex
				}
			},
		},
		mounted() {
			// console.log(this.getAllNote)
		},
		methods: {
			showNote: function(index){
				this.$store.state.showNoteIndex = index;
			},
			showModeBox: function() {
				this.isShowModeBox = !this.isShowModeBox
			}
		}

	}
</script>
<style lang="scss">
	@import "@/scss/_variables.scss";
	// $primary: #2F419B;
	.noInfo {
		visibility: hidden;
	}
	.chosenNote {
		border: $primary solid 3px;
	}
	.containerAllNote {
		width: 28%;
		height: 100vh;
		background-color: #f4f6f7;
		position: relative;
		border-right: 2px solid $border-cl;
	}
	.container-top, .container-bottom {
		padding: $main-padding;
		padding-bottom: 0;
		box-sizing: border-box;
	}
	.container-top {
		height: 150px;
	}
	.container-bottom {
		border-top: 2px solid $border-cl;
		padding-top: 10px;
		overflow-y: scroll;
		height: calc(100% - 150px);
	}
	.container-bottom::-webkit-scrollbar { width: 0 !important }
	#searchContainer {
		background-color: #E6E6E6;
		width: 100%;
		height: 45px;
		border-radius: 5px;
		display: flex;
		align-items: center;
		padding: 0 15px;
		box-sizing: border-box;
	}
// icon
	.vw-icon {
		cursor: pointer;
	}
	#iconSearch {
		background: url('../assets/search_24px.svg') center center no-repeat;
		margin-right: 10px;
	}
	.iconCard {
		background: url('../assets/view_module.svg') center center no-repeat;
		background-size: cover;
	}
	.iconList {
		background: url('../assets/view_list.svg') center center no-repeat;
		background-size: cover;
	}
	.iconText {
		background: url('../assets/list.svg') center center no-repeat;
		background-size: cover;
	}
	#searchBar {
		border: none;
		background-color: transparent;

	}
	#dropdown {
		background: url('../assets/down.svg') center center no-repeat;
	}
//container
	.divContainer {
		margin:20px 0;
		display: flex;
		align-items: center;
		justify-content: space-between;

	}
	.divContainer>div{
		display: flex;
		align-items: center;
	}
	.divContainer span {
		font-size: 18px;
		margin-right: 5px;
	}
	.viewModeIcon {
		position: relative;
	}
	#lineDevide {
		border-bottom: 2px solid #DDDEE0;
		width: 130%;
		left: -40px;
		position: relative;
	}
	.cardline {
		border-bottom: 2px solid #F1F1F1;
		margin: 15px 0;
	}
	.star {
		width: 15px;
		height: 15px;
		margin: 0 7px;
	}
	.iconStar {
		background: url('../assets/star.svg') center center no-repeat;
		background-size: 160%;

	}
	.iconStarBorder {
		background: url('../assets/star-border.svg') center center no-repeat;
		background-size: cover;
	}
	.iconAttachment {
		width: 20px;
		height: 20px;
		background: url('../assets/attachment.svg') center center no-repeat;
		background-size: cover;
		margin: 0 7px;
		transform: rotate(90deg);
		top: 2px;
	}
	.cardMode {
		// margin-top: 10px;
		// overflow-y: scroll;
	}
	.card{
		margin: 20px auto;
		background-color: #ffffff;
		width: 100%;
		height: 250px;
		// border: none;
		border-radius: 5px;
		padding: 25px 20px;
		box-sizing: border-box;
		box-shadow: 1px 1px 7px 1px rgba(0,0,0,0.05);
		position: relative;
		box-sizing: border-box;
	}
	.cardHead {
		display: flex;
		align-items: center;
	}
	.cardTitle {
		font-size: 1.2rem;
		font-weight: 800;
		color: $title-cl;
	}
	.cardContent {
		font-size: 1.1rem;
		overflow-y : hidden;
		text-overflow : ellipsis;
		line-height: 1.5rem;
		height: 50%;
		margin-bottom: 15px;
		text-align: justify;
		text-justify: auto;
		color: $content-cl;
	}
	
	.cardFoot {
		// position: absolute;
		bottom: 0;
		display: flex;
		align-items: center;
	}
	.cardTagsContainer {
		width: 65%;
		overflow: hidden;
	}
	.cardTag {
		display: inline-block;
		padding: 3px 8px;
		margin: 0 5px;
		border-radius: 5px;
		height: 25px;
		background-color: $second;
		font-weight: 600;
		color: $primary;
		line-height: 23px;
	}
	.cardTag span {
		vertical-align: bottom;
		font-size: 14px;
	}
	.cardDate {
		color: $time-cl;
		font-size: 14px;
	}
</style>