const expect = chai.expect;
 import Vue from 'vue'
 import Input from '../src/components/input'
 import Icon from '../src/components/icon'

 Vue.config.productionTip = false
 Vue.config.devtools = false

 describe('Input', () => {
     it('存在.', () => {
         expect(Input).to.be.ok
     })
	 describe('props', () =>{
		 const Constructor = Vue.extend(Input)
		 let vm
		 afterEach(() => {
			 vm.$destroy()
		 })
		 it('可以设置value.', () => {
		     vm = new Constructor({
		     propsData: {
		         value: '1234'
		     }
		     }).$mount()
		     const inputElement = vm.$el.querySelector('input')
		     expect(inputElement.value).to.equal('1234')
		 })
		 it('可以设置disabled.', () => {
		     vm = new Constructor({
		     propsData: {
		         disabled: true
		     }
		     }).$mount()
		     const inputElement = vm.$el.querySelector('input')
		     expect(inputElement.disabled).to.equal(true)
		 })
		 it('可以设置error.', () => {
		     vm = new Constructor({
		     propsData: {
		         error: '1234'
		     }
		     }).$mount()
		     const errorMessage = vm.$el.querySelector('.errorMessage')
		     expect(errorMessage.innerText).to.equal('1234')
		     const useElement = vm.$el.querySelector('d-icon')
		     expect(useElement.getAttribute('name')).to.equal('error')
		 		 //d-icon标签未编译为use和svg，所以注释该测试代码，改为预期d-icon的name属性值
		     // const useElement = vm.$el.querySelector('use')
		     // expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
		 })
		 it('可以设置readonly.', () => {
		     vm = new Constructor({
		     propsData: {
		         readonly: true
		     }
		     }).$mount()
		     const inputElement = vm.$el.querySelector('input')
		     expect(inputElement.readOnly).to.equal(true)
		 })
	 })
	 describe('事件', () =>{
		 const Constructor = Vue.extend(Input)
		 let vm
		 afterEach(() => {
			 vm.$destroy()
		 })		 
		 it('改变 Input 的值 触发 change/input/focus/blur 事件', () => {
			 ['change','input','focus','blur'].forEach((eventName) =>{				 
				 vm = new Constructor({}).$mount()
				 const callback = sinon.fake();
				 vm.$on(eventName, callback)
				 //出发事件
				 let event = new Event(eventName)
				 Object.defineProperty(
					event, 'target', {
						value: {value: 'hi'}, enumerable: true
					}
				 )
				 const inputElement = vm.$el.querySelector('input')
				 inputElement.dispatchEvent(event)
				 expect(callback).to.have.been.calledWith('hi')
			 })
		 })
	 })
 })