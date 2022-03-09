<template>
  <d-button>设置</d-button>
  <d-button icon="setting">设置</d-button>
  <d-button icon="setting" icon-position="top">设置</d-button>
</template>

<script>
import Button from './components/button.vue'

export default {
  name: 'App',
  components: {
    'd-button':Button
  }
}
</script>
	
<style>
	#app{
		margin: 20px;
	}
</style>
