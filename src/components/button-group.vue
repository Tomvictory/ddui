<template>
	<div class="d-button-group">
		<slot></slot>
	</div>
</template>

<script>
	export default{
		name: 'DdButtonGroup',
		mounted(){
			for(let node of this.$el.children){
				let name = node.nodeName.toLowerCase();
				if(name !== 'button'){
					console.warn(`d-button-group的子元素应该全是g-button,但是你写的是${name}`) 
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.d-button-group{
		display: inline-flex;
		vertical-align: middle;
		> .d-button{
			margin: 0;
			border-radius: 0;
			&:not(:first-child){
				margin-left: -1px;
			}
			&:first-child{
				margin-left: .2em;
				border-top-left-radius: var(--border-radius);
				border-bottom-left-radius: var(--border-radius);
			}			
			&:last-child{
				border-top-right-radius: var(--border-radius);
				border-bottom-right-radius: var(--border-radius);
			}
			&:hover{
				position: relative;
				z-index: 1;
			}
		}
	}
</style>
