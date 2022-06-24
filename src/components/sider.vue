<template>
	<transition name="slide">
	<div class="sider" v-if="visible">
		<slot></slot>
		<button @click="visible=false">close</button>
	</div>
	</transition>
</template>

<script>
	export default{
		name: 'DdSider',
		methods:{
			
		},
		data(){
			return {
				visible: true
			}
		}
	}
</script>

<style lang="scss" scoped>
	.sider{
		position: relative;
		> button{
			position: absolute;
			top: 0;
			left: 0;
		}
	}
	.slide-enter-active, .slide-leave-active {
	  transition: all 0.5s;
	}
	
	.slide-enter, .slide-leave-to {
	  margin-right: -200px;
	}
</style>
