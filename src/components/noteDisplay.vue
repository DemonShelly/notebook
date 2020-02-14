<template>
	<div class="containerAllNote ">
		<div class="container-top">
			<div id='searchContainer'>
				<i id='iconSearch'></i>
				<input type="" name="search" id='searchBar' placeholder="搜尋您的筆記" >
			</div>
			<div class="divContainer">
				<div>
					<span>{{getNowDisplay}}</span>
					<i id='dropdown'></i>
				</div>
				<div class="viewModeIcon">
					<i class='icon-card vw-icon' v-if="getNowViewMode=='card'"  @click='showModeBox'></i>
					<i class='icon-list vw-icon' v-if="getNowViewMode=='list'"  @click='showModeBox'></i>
					<i class='icon-text vw-icon' v-if="getNowViewMode=='text'"  @click='showModeBox'></i>
				</div>
			</div>

			<viewModeBox v-if="isShowModeBox"
				:viewMode="getNowViewMode"
				:isShowModeBox="isShowModeBox"
				@viewBoxDisappear="showModeBox"
				>
			</viewModeBox>
		</div>
		<div class="click-bg" v-if="isShowModeBox" @click="showModeBox"></div>
        <allNote/>
        <starNote/>
	</div>
</template>

<script>
import viewModeBox from "@/components/viewModeBox.vue"
import allNote from "@/components/allNote.vue"
import starNote from "@/components/starNote.vue"
    export default {
        name: 'noteDisplay',
        components: {
            viewModeBox,
            allNote,
            starNote,
        },
        data() {
            return {
                isShowModeBox: false,
            }
        },
        computed: {
            getNowDisplay() {
                return this.$store.state.nowDisplay
            },
            getNowViewMode: function(){
				return this.$store.state.nowViewMode
			}
        },
        methods: {
            showModeBox: function() {
				this.isShowModeBox = !this.isShowModeBox
			},
        },
    }
</script>

<style lang="scss" scoped>

</style>