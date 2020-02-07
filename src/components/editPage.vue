<template>
	<div class="containerEditPage ">
		<quill-editor ref="myTextEditor"
                      :content="getNoteContent"
                      :options="editorOption"
                      @change="onEditorChange($event)"
                      :title="getNoteTitle">
        </quill-editor>
        <!-- <editTitle/> -->
	</div>
</template>
<script>
	import 'quill/dist/quill.core.css'
	import 'quill/dist/quill.snow.css'
	import 'quill/dist/quill.bubble.css'
	import { quillEditor } from 'vue-quill-editor'
	// import editTitle from './editTitle.vue'

	export default {
		name: 'editPage',
		components: {
			quillEditor,
			// editTitle,
		},
		data: function() {
			return {
				content: '',
				editorOption: { /* quill options */ },
			}
		},
		methods: {
			onEditorChange({ quill, html, text }) {
				console.log('editor change!', quill, html, text)
				this.getNoteContent = html
			},
			addTitleInEdit(){
				let edit = document.querySelector('.ql-editor')
				console.log(edit)
			}
		},
		computed: {
			// editor() {
			// 	return this.$refs.myQuillEditor.quill
			// },
			getShowNoteIndex: function () {
				return this.$store.state.showNoteIndex
			},
			getNoteObj: function () {
				return this.$store.state.allNote[this.getShowNoteIndex]
			},
			getNoteTitle: {
				get: function () {
					return this.getNoteObj.title
				},
				set: function (value) {
					this.getNoteObj.title = value
				}
			},
			getNoteContent: {
				get: function () {
					return this.getNoteObj.content
				},
				set: function (value) {
					this.getNoteObj.content = value
				}
			}

		},
		mounted() {
			this.addTitleInEdit()
			// console.log(this.getNoteTitle)
		}
	}
</script>
<style lang="scss">
	@import "@/scss/_variables.scss";
	.containerEditPage {
		height: 100vh;
		width: 52%;
		padding: $main-padding;
		box-sizing: border-box;
	}
	.ql-editor {
		padding: 30px 5px 0 5px;
	}
	.ql-toolbar.ql-snow {
		
	}
</style>