<template>
	<div class="allNote nt-container" v-if="getNowDisplay=='所有筆記'">
		<!-- card mode -->
			<div class="container-bottom card-container-bottom " v-if="getNowViewMode=='card'">
				<ul>
					<li class="card note" v-for="(item, index) in getAllNote" :key='index' @click='showNote(index)' :class="{'chosenCardNote': getShowNoteIndex==index }">
						<div class="cardHead nt-head">
							<i class="star" :class="[ item.isStar? 'iconStar' : 'iconStarBorder']"  @click='changeStar(index)'></i>
							<span class="cardTitle nt-title" v-text="item.title"></span>
						</div>
						<div class="cardline"></div>
						<div class="cardContent nt-content" v-html="item.content">
						</div>
						<div class="cardFoot nt-foot">
							<ul class="cardTagsContainer nt-tagContainer">
								<li class="cardTag nt-tag" v-for="(tag, index) in item.tags" :key='index'>
									<span>{{tag}}</span>
								</li>
							</ul>
							<span :class="{ 'noInfo': !item.attachment }"><i class="iconAttachment"></i></span>
							<span class="cardDate nt-cardDate">{{item.date}}</span>
						</div>
					</li>
				</ul>
			</div>
			<!-- list mode -->
			<div class="container-bottom list-container-bottom" v-if="getNowViewMode=='list'">
				<ul>
					<li class="list note" v-for="(item, index) in getAllNote" :key='index' @click='showNote(index)' :class="{'chosenListNote': getShowNoteIndex==index }">
						<div class="listHead nt-head">
							<i class="star" :class="[ item.isStar? 'iconStar' : 'iconStarBorder']" @click='changeStar(index)' gi></i>
							<span class="listTitle nt-title">{{item.title}}</span>
						</div>
						<div class="listContent nt-content" v-html="item.content">
						</div>
						<div class="listFoot nt-foot">
							<ul class="listTagsContainer nt-tagContainer">
								<li class="listTag nt-tag" v-for="(tag, index) in item.tags" :key='index'>
									<span>{{tag}}</span>
								</li>
							</ul>
							<span :class="{ 'noInfo': !item.attachment }"><i class="iconAttachment"></i></span>
							<span class="listDate nt-cardDate">{{item.date}}</span>
						</div>
					</li>
				</ul>
			</div>
			<!-- text mode -->
			<div class="container-bottom text-container-bottom" v-if="getNowViewMode=='text'">
				<ul>
					<li class="text note" v-for="(item, index) in getAllNote" :key='index' @click='showNote(index)' :class="{'chosenListNote': getShowNoteIndex==index }">
						<div class="textHead nt-head">
							<span class="textDate nt-cardDate">{{item.date}}</span>
							<span class="textTitle nt-title">{{item.title}}</span>
						</div>
					</li>
				</ul>
			</div>
	</div>
</template>
<script>
	export default {
		name: 'allNote',
		data: function() {
			return {
				isShowModeBox: false,
			}
		},
		computed: {
			getNowDisplay: function(){
				return this.$store.state.nowDisplay
			},
			getAllNote: function(){
				return this.$store.state.allNote
			},
			getShowNoteIndex: {
				get: function () {
					return this.$store.state.showNoteIndex
				}
			},
			getNowViewMode: function(){
				return this.$store.state.nowViewMode
			}
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
			},
			changeStar: function(index) {
				this.getAllNote[index].isStar = !this.getAllNote[index].isStar
			}
		}

	}
</script>
<style lang="scss">
	@import "@/scss/_variables.scss";
	// $primary: #2F419B;
	.nt-container {
		height: calc( 100% - 150px);
	}
	.noInfo {
		visibility: hidden;
	}
	.chosenCardNote {
		border: $primary solid 3px;
	}
	.containerAllNote {
		width: 28%;
		height: 100vh;
		background-color: #f4f6f7;
		position: relative;
		border-right: 2px solid $border-cl;
	}
	.container-top, .card-container-bottom {
		padding: $main-padding;
		padding-bottom: 0;
		box-sizing: border-box;
	}
	.container-top {
		height: 150px;
		position:  relative;
	}
	.container-bottom {
		border-top: 2px solid $border-cl;
		overflow: scroll;
		height: 100%;
	}
	.card-container-bottom {
		padding-top: 10px;
	}
	.container-bottom::-webkit-scrollbar { width: 0 !important }
	.click-bg {
		width: 70vw;
		height: 100%;
		// background-color: lightgray;
		position: absolute;
		top:0;
	}
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
//////icon
	.vw-icon {
		cursor: pointer;
	}
	#iconSearch {
		background: url('../assets/search_24px.svg') center center no-repeat;
		margin-right: 10px;
	}
	.icon-card {
		background: url('../assets/view_module.svg') center center no-repeat;
		background-size: cover;
	}
	.icon-list {
		background: url('../assets/view_list.svg') center center no-repeat;
		background-size: cover;
	}
	.icon-text {
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
/////container
	.divContainer {
		margin:20px 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: relative;

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
		margin-right: 7px;
		margin-left: 3px;
		cursor: pointer;
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
	.note {
		box-sizing: border-box;
		position: relative;
	}
/////card
	.card{
		margin: 20px auto;
		background-color: #ffffff;
		width: 100%;
		height: 250px;
		// border: none;
		border-radius: 5px;
		padding: 25px 20px;
		box-shadow: 1px 1px 7px 1px rgba(0,0,0,0.05);
		position: relative;
	}
	.cardHead .nt-head {
		display: flex;
		align-items: center;
	}
	.cardTitle .nt-title{
		font-size: 1.2rem;
		font-weight: 800;
		color: $title-cl;
	}
	.cardHead {
		height: 22px;
		overflow: hidden;
		text-overflow : ellipsis;
	}
	// .cardTitle {
	// 	height: 22px;
	// 	overflow: hidden;
	// 	text-overflow : ellipsis;
	// 	overflow-y : hidden;
	// }
	.nt-content {
		font-size: 1.1rem;
		overflow-y : hidden;
		text-overflow : ellipsis;
		line-height: 1.5rem;
		text-align: justify;
		text-justify: auto;
		color: $content-cl;
	}
	.cardContent {
		height: 50%;
		margin-bottom: 15px;
	}
	.nt-foot {
		// position: absolute;
		bottom: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.nt-tagContainer {
		overflow: hidden;

	}
	.cardTagsContainer {
		width: 65%;
	}
	.nt-tag {
		display: inline-block;
		padding: 3px 8px;
		margin-right: 10px;
		border-radius: 5px;
		height: 25px;
		background-color: $second;
		font-weight: 600;
		color: $primary;
		line-height: 23px;
	}
	.nt-tag span {
		vertical-align: bottom;
		font-size: 14px;
	}
	.nt-cardDate {
		color: $time-cl;
		font-size: 14px;
	}
/////list
	.list {
		// width: 100%;
		border-bottom: 1px solid $border-cl;
		padding: 15px 35px;
	}
	.listContent {
		height: 50px;
		font-size: 1rem;
		margin-bottom: 10px;
	}
	.listHead {
		margin-bottom: 10px;
	}
	.listTitle {
		font-size: 1.1rem;
	}
	.chosenListNote {
		background-color: $second;
	}
/////text
	.text {
		height:50px;
		padding: 10px 25px;
		border-bottom: 1px solid $border-cl;
		display: flex;
		align-items: center;
	}
	.textHead {
		font-size: 1.2rem;
		display: flex;
		// justify-content: space-between;
		align-items: center;
	}
	.textTitle {
		font-size: 1.1rem;
		font-weight: 900;
		// width: 100%;
		position: absolute;
		left: 115px;
		overflow: hidden;
	}
	.textDate {
		font-weight: 1rem;
		width:75px;
		margin-right: 20px;
	}
</style>