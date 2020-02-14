<template>
	<div class="starNote nt-container" v-if="getNowDisplay=='捷徑'">
		<!-- card mode -->
			<div class="container-bottom card-container-bottom " v-if="getNowViewMode=='card'">
				<ul>
					<li class="card note" v-for="(item, index) in getStarNote" :key='index' @click='showNote(index)' :class="{'chosenCardNote': getShowNoteIndex==index }">
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
					<li class="list note" v-for="(item, index) in getStarNote" :key='index' @click='showNote(index)' :class="{'chosenListNote': getShowNoteIndex==index }">
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
					<li class="text note" v-for="(item, index) in getStarNote" :key='index' @click='showNote(index)' :class="{'chosenListNote': getShowNoteIndex==index }">
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
        name: "starNote",
        data() {
            return {
                isShowModeBox: false,
            }
        },
        computed: {
            getNowDisplay: function(){
				return this.$store.state.nowDisplay
            },
            getStarNote: function(){
                return this.$store.state.allNote.filter(function(item){
                    return item.isStar == true
                })
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

<style lang="scss" scoped>

</style>