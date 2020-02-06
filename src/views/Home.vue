<template>
  <div class="home">
    <sideBar/>
    <allNote/>
    <editPage/>
  </div>
</template>

<script>
// @ is an alias to /src
import sideBar from '@/components/sideBar.vue'
import allNote from '@/components/allNote.vue'
import editPage from '@/components/editPage.vue'

export default {
  name: 'home',
  components: {
    sideBar,
    allNote,
    editPage
  }
}
</script>
<style>
	.home{
		display: flex;
		
	}
</style>
