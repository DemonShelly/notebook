<template>
	<div class="containerEditPage ">
        <input type="text" name="" id='editTitle' placeholder="無標題" v-model="getNoteTitle">
        <div class="editlabel">
            <ul class="editTagsContainer nt-tagContainer">
                <li class=" nt-tag" v-for="(tag, index) in getNoteObj.tags" :key='index'>
                    <span>{{tag}}</span>
                </li>
                <li class="addNewLabel">Add +</li>
            </ul>
        </div>
		<quill-editor ref="myTextEditor"
                      v-model="getNoteContent"
                      :options="editorOption"
                      id="editContent"
                      >

        </quill-editor>
        <!-- :content="getNoteContent"
         @change="onEditorChange($event)" -->
        <!-- <editTitle/> -->
	</div>
</template>
<script>
	import 'quill/dist/quill.core.css'
	import 'quill/dist/quill.snow.css'
	import 'quill/dist/quill.bubble.css'
	import { quillEditor } from 'vue-quill-editor'

	export default {
		name: 'editPage',
		components: {
			quillEditor,
		},
		data: function() {
			return {
				content: '',
				editorOption: {
					placeholder: "請寫下內容"
				},
				title: '',
				editorOptionTitle: {
					theme: 'bubble',
					placeholder: "無標題",
				},
			}
		},
		methods: {
			addTitleInEdit(){
				let edit = document.querySelector('.ql-editor')
				console.log(edit)
			},
		},
		computed: {
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
			},
            getAllNote: function(){
                return this.$store.state.allNote
            },

		},
		mounted() {
			this.addTitleInEdit()
			// console.log(this.getNoteTitle)
		}
	}
</script>
<style lang="scss">
	@import "@/scss/_variables.scss";
/////content && toolbar
	.containerEditPage {
		height: 100vh;
		width: 52%;
		padding: $main-padding;
		box-sizing: border-box;
	}
	.ql-editor {
		padding: 0 5px;
	}
	#editContent {
		position: relative;
	}
	#editContent .ql-container {
		position: absolute;
		top: 190px;
		width: 100%;
	}
	#editContent .ql-editor {
		overflow-y: scroll;
		height: calc(100vh - 240px);
	}
	#editContent .ql-editor::-webkit-scrollbar { width: 0 !important }

/////title
	#editTitle {
		position: absolute;
		height: 30px;
		top: 140px;
		z-index: 200;
		width: calc(52% - 70px);
		border: none;
		padding: 0 5px;
		font-size: 1.3rem;
		outline: none;
	}
    #editTitle::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: lightgray;
      opacity: 1; /* Firefox */
    }
	.ql-editor.ql-blank::before {
		font-style: normal;
        color: lightgray;
		left: 5px;
	}
/////label
    .editlabel {
        position: absolute;
        top: 185px;
        z-index: 555;
        padding:0 5px;
        font-size: 0.8rem;
        width: calc(52% - 70px);
    }
    .editlabel li {
        font-size: 0.8rem;
        padding: 2px 10px;
        border-radius: 8px;
        cursor: pointer;
    }
    .addNewLabel {
        color: lightgray;
        border: 1px dashed lightgray;
        display: flex;
        align-items: center;
    }
    .editTagsContainer {
        display: flex;
    }
</style>