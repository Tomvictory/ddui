<template>
  <d-button name="OK"/>
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
