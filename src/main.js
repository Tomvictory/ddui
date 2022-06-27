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

new Vue({
	data:{
		loading1: false,
		loading2: false,
		loading3: false,
		inputValue: 'test'
	},
	methods:{
	  inputChange:function(xx){
		  console.log(xx)
	  },
	  showToast:function(){
		  this.$toast('我是 message')
	  }
	}
}).$mount("#app")