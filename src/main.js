import Vue from 'vue'
import Button from './components/button.vue'
import ButtonGroup from './components/button-group.vue'
import Icon from './components/icon.vue'
import Input from './components/input.vue'
import Row from './components/row.vue'
import Col from './components/col.vue'
import Layout from './components/layout.vue'
import Header from './components/header.vue/'
import Content from './components/content.vue'
import Footer from './components/footer.vue'
import Sider from './components/sider.vue'
import Toast from './components/toast.vue'
import Plugin from './plugin'
import Tabs from './components/tabs.vue'
import TabsHead from './components/tabs-head.vue'
import TabsItem from './components/tabs-item.vue'
import TabsBody from './components/tabs-body.vue'
import TabsPane from './components/tabs-pane.vue'
import Popover from './components/popover.vue'
Vue.use(Plugin)
Vue.component('d-toast', Toast)
Vue.component('d-icon', Icon)
Vue.component('d-button', Button)
Vue.component('d-button-group', ButtonGroup)
Vue.component('d-input', Input)
Vue.component('d-row', Row)
Vue.component('d-col', Col)
Vue.component('d-layout',Layout)
Vue.component('d-header',Header)
Vue.component('d-content',Content)
Vue.component('d-footer',Footer)
Vue.component('d-sider',Sider)
Vue.component('d-tabs',Tabs)
Vue.component('d-tabs-head',TabsHead)
Vue.component('d-tabs-item',TabsItem)
Vue.component('d-tabs-body',TabsBody)
Vue.component('d-tabs-pane',TabsPane)
Vue.component('d-popover',Popover)

new Vue({
	data:{
		loading1: false,
		loading2: false,
		loading3: false,
		inputValue: 'test',
		selectedTab: 'sports'
	},
	methods:{
		yyy(){console.log('yyy')},
		showToast1:function(){
			this.$toast('我是 message',{
				closeButton:{
					text: '我知道了',
					callback(toast){
					}
				},		
				enableHtml: true,
				position: 'top'
			})
		},
		showToast2:function(){
			this.$toast('我是 message',{
				closeButton:{
					text: '我知道了',
					callback(toast){
					}
				},		
				enableHtml: true,
				position: 'middle'
			})
		},
		showToast3:function(){
			this.$toast('我是 message',{
				closeButton:{
					text: '我知道了',
					callback(toast){
					}
				},		
				enableHtml: true,
				position: 'bottom'
			})
		}
	},
	created() {
		
	}
}).$mount("#app")