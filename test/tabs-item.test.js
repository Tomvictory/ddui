const expect = chai.expect;
 import Vue from 'vue'
 import Tabs from '../src/components/tabs'
 import TabsHead from '../src/components/tabs-head.vue'
 import TabsItem from '../src/components/tabs-item.vue'
 import TabsBody from '../src/components/tabs-body.vue'
 import TabsPane from '../src/components/tabs-pane.vue'
 Vue.component('d-tabs',Tabs)
 Vue.component('d-tabs-head',TabsHead)
 Vue.component('d-tabs-item',TabsItem)
 Vue.component('d-tabs-body',TabsBody)
 Vue.component('d-tabs-pane',TabsPane)

 Vue.config.productionTip = false
 Vue.config.devtools = false

 describe('TabsItem', () => {
     it('存在.', () => {
         expect(TabsItem).to.be.ok
     })
     it('接受name属性',() =>{
        const Constructor = Vue.extend(TabsItem)
        const vm = new Constructor({
        propsData: {
            name: 'xxx'
        }
        }).$mount()
        expect(vm.$el.getAttribute('data-name')).to.eq('xxx')
     })
     it('接受disabled属性',() =>{
        const Constructor = Vue.extend(TabsItem)
        const vm = new Constructor({
        propsData: {
            disabled: true
        }
        }).$mount()
        expect(vm.$el.classList.contains('disabled')).to.be.true
        const callback = sinon.fake();
        vm.$on('click', callback)
        vm.$el.click()
        expect(callback).to.have.not.been.called
     })
 })