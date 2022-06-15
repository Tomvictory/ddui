const expect = chai.expect;
 import Vue from 'vue'
 import Row from '../src/components/row'
 import Col from '../src/components/col'

 Vue.config.productionTip = false
 Vue.config.devtools = false

 describe('Row', () => {
     it('存在.', () => {
         expect(Row).to.exist
     })
	 it('可以接收gutter属性', (done) => {
		 Vue.component('d-row',Row)
		 Vue.component('d-col',Col)
		 const div = document.createElement('div')
		 document.body.appendChild(div)
		 div.innerHTML = `
			<d-row gutter="20">
				<d-col span='12'></d-col>
				<d-col span='12'></d-col>
			</d-row>
		 `
	     const vm = new Vue({
			el: div 
		 })
	     setTimeout(()=>{
			 const row = vm.$el.querySelector('.row')
			 expect(getComputedStyle(row).marginLeft).to.eq('-10px')
			 expect(getComputedStyle(row).marginLeft).to.eq('-10px')
			 const col = vm.$el.querySelector('.col')
			 expect(getComputedStyle(col).paddingLeft).to.eq('10px')
			 expect(getComputedStyle(col).paddingLeft).to.eq('10px')
			 done()
			 vm.$el.remove()
			 vm.$destroy()
		 })
	 })
	 it('可以接收align属性', () => {
		 const div = document.createElement('div')
		 document.body.appendChild(div)
		 const Constructor = Vue.extend(Row)
		 const vm = new Constructor({
			 propsData: {
				 align: 'center'
			 }
		 }).$mount(div)
		 const element = vm.$el
		 expect(getComputedStyle(element).justifyContent).to.eq('center')
		 vm.$el.remove()
		 vm.$destroy()
	})
 })