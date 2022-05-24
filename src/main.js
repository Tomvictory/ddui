import Vue from 'vue'
import Button from './components/button.vue'
import ButtonGroup from './components/button-group.vue'
import Icon from './components/icon.vue'
import Input from './components/input.vue'
Vue.component('d-icon', Icon)
Vue.component('d-button', Button)
Vue.component('d-button-group', ButtonGroup)
Vue.component('d-input', Input)

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
	  }
	}
}).$mount("#app")