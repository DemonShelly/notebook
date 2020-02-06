import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	allNote: [
		{
			title: '筆記1',
			content: '哇哇哇哇這是我的第一個筆記哇哇哇哇這是我的第一個筆記<br>哇哇哇哇這是我的第一個筆記哇哇哇哇這是我的第一個筆記哇哇哇哇這是我的第一個筆記哇哇哇哇這是我的第一個筆記',
			tags: ['日常生活','新聞'],
			attachment: '',
			date: '2020/2/4',
			isStar: true
		},
	],
	showNoteIndex: 0,
	newNote: {
		title: '',
		content: '',
		tag: [],
		attachment: '',
		date: '',
		isStar: false
	}
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

