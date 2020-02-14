<template>
  <div class="home">
    <sideBar/>
    <noteDisplay/>
    <editPage/>
  </div>
</template>

<script>
// @ is an alias to /src
import sideBar from '@/components/sideBar.vue'
import noteDisplay from '@/components/noteDisplay.vue'
import editPage from '@/components/editPage.vue'

export default {
  name: 'home',
  components: {
    sideBar,
    noteDisplay,
    editPage
  }
}
</script>
<style>
	.home{
		display: flex;
		
	}
</style>
