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

import chai from 'chai'
const expect = chai.expect
//单元测试
{
	const Constructor = Vue.extend(Button)
	const vm = new Constructor({
		propsData: {
			icon: 'setting'
		}		
	})
	vm.$mount()
	let useElement = vm.$el.querySelector('use')
	let href = useElement.getAttribute('xlink:href')
	expect(href).to.eq('#i-setting')
}
{
	const Constructor = Vue.extend(Button)
	const vm = new Constructor({
		propsData: {
			icon: 'setting',
			loading: true
		}		
	})
	vm.$mount()
	let useElement = vm.$el.querySelector('use')
	let href = useElement.getAttribute('xlink:href')
	expect(href).to.eq('#i-loading')
}
{
	const div = document.createElement('div')
	document.body.appendChild(div)
	const Constructor = Vue.extend(Button)
	const vm = new Constructor({
		propsData: {
			icon: 'setting'
		}		
	})
	vm.$mount(div)
	let svg = vm.$el.querySelector('svg')
	let {order} = window.getComputedStyle(svg)
	expect(order).to.eq('1')
	vm.$el.remove()
	vm.$destroy()
}
{
	const div = document.createElement('div')
	document.body.appendChild(div)
	const Constructor = Vue.extend(Button)
	const vm = new Constructor({
		propsData: {
			icon: 'setting',
			iconPosition: 'right'
		}		
	})
	vm.$mount(div)
	let svg = vm.$el.querySelector('svg')
	let {order} = window.getComputedStyle(svg)
	expect(order).to.eq('2')
	vm.$el.remove()
	vm.$destroy()
}
{   // mock
	const Constructor = Vue.extend(Button)
	const vm = new Constructor({
		propsData: {
			icon: 'setting'
		}		
	})
	vm.$mount()
	vm.$on('click',function(){
		expect(1).to.eq(1)
	})
	let button = vm.$el
	button.click()
}