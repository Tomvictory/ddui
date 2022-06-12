<template>
	<div class="row" :style="rowStyle" :class="rowClass">
		<slot></slot>
	</div>
</template>
<script>
	export default{
		name: 'DdRow',
		props: {
			gutter: {
				type: [Number,String]
			},
			aligh: {
				type: String,
				validator(value){
					return ['left','right','center'].includes(value)
				}
			}
		},
		mounted() {
			this.$children.forEach((vm) => {
				vm.gutter = this.gutter
			})
		},
		computed:{
			rowStyle(){
				let {gutter} = this
				return {
					marginLeft: -gutter/2+'px',
					marginRight: -gutter/2+'px',
					}
			},
			rowClass(){
				let {aligh} = this
				return [aligh && `aligh-${aligh}`]
			}
		}
	}
</script>
<style lang="scss" scoped>
	.row{
		display: flex;
		flex-wrap: wrap;
		&.aligh-left{
			justify-content: flex-start;
		}
		&.aligh-right{
			justify-content: flex-end;
		}
		&.aligh-center{
			justify-content: center;
		}
	}
</style>