import Vue from 'vue'
import Button from './components/button.vue'
import ButtonGroup from './components/button-group.vue'
import Icon from './components/icon.vue'
Vue.component('d-icon', Icon)
Vue.component('d-button', Button)
Vue.component('d-button-group', ButtonGroup)

new Vue({
	data:{
		loading1: false,
		loading2: false,
		loading3: false
	},
	methods:{
	  x:function(){
		  console.log(this.loading1)
	  }
	}
}).$mount("#app")