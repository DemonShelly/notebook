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
	},
	nowDisplay: '所有筆記',
	sideBarList: [
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
	],
	nowViewMode: 'card',
	allViewMode: [
		{
			name: 'card',
			id: 'viewModeCard',
			icon: '',
			text: '卡片檢視',
		},
		{
			name: 'list',
			id: 'viewModeList',
			icon: '',
			text: '摘要檢視',
		},
		{
			name: 'text',
			id: 'viewModeText',
			icon: '',
			text: '文字列表檢視',
		},
	]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

