<template>
	<svg class="d-icon">
		<use :xlink:href="`#i-${name}`"></use>
	</svg>
</template>

<script>
	import '../../public/svg'
	export default {
		name: 'DdIcon',
		props: ['name']
	}
</script>

<style lang="scss" scoped>
	.d-icon {
	       width: 1em; height: 1em;
	       vertical-align: -0.15em;
	       fill: currentColor;
	       overflow: hidden;
	    }
</style>
