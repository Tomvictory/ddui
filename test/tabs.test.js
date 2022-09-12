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

 describe('Tabs', () => {
     it('存在.', () => {
         expect(Tabs).to.be.ok
     })
     it('接收selected',(done) =>{
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
		<d-tabs selected="finance">
        <d-tabs-head>
            <d-tabs-item name="woman">美女</d-tabs-item>
            <d-tabs-item name="finance">财经</d-tabs-item>
            <d-tabs-item name="sports">体育</d-tabs-item>
        </d-tabs-head>
        <d-tabs-body>
            <d-tabs-pane name="woman">美女相关资讯</d-tabs-pane>
            <d-tabs-pane name="finance">财经相关资讯</d-tabs-pane>
            <d-tabs-pane name="sports">体育相关资讯</d-tabs-pane>
        </d-tabs-body>
        </d-tabs>
        `
        const vm = new Vue({
            el: div 
        })
        vm.$nextTick(() => {
            let x = vm.$el.querySelector(`.tabs-item[data-name="finance"]`)
            expect(x.classList.contains('active')).to.be.true
            done()
        })
     })
     it('可以接受direction', () => {
     })
 })