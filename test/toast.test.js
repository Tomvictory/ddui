const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/components/toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
    it('存在.', () => {
        expect(Toast).to.exist
    })
    it('可以接收autoClose属性', (done) => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Toast)
        const vm = new Constructor({
            propsData: {
                autoClose: 1                
            }
        }).$mount(div)
        vm.$on('close',() => {            
            expect(document.body.contains(vm.$el)).to.eq(false)
            done()            
        })
    })
    it('可以接收closeButton属性', () => {
        const callback = sinon.fake();
        const Constructor = Vue.extend(Toast)
        const vm = new Constructor({
            propsData: {
                closeButton:{
					text: '我知道了',
					callback
				}                
            }
        }).$mount()
        let closeButton = vm.$el.querySelector('.close')
        expect(closeButton.textContent.trim()).to.eq('我知道了')        
        closeButton.click()
        expect(callback).to.have.been.called
    })
    it('可以接收enableHtml属性', () => {
        const Constructor = Vue.extend(Toast)
        const vm = new Constructor({
            propsData: {
                enableHtml:true                
            }
        })
        vm.$slots.default = ['<strong id="test">加粗</strong>']
        vm.$mount()
        let strong = vm.$el.querySelector('#test')
        expect(strong).to.exist
    })
    it('可以接收position属性', () => {
        const Constructor = Vue.extend(Toast)
        const vm = new Constructor({
            propsData: {
                position: 'bottom'                
            }
        }).$mount()
        expect(vm.$el.classList.contains('position-bottom')).to.eq(true)
    })
})