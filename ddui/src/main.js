import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)


import Button from './components/button.vue'
import ButtonGroup from './components/button-group.vue'
import Icon from './components/icon.vue'
app.component('d-icon', Icon)
app.component('d-button', Button)
app.component('d-button-group', ButtonGroup)



app.mount('#app')