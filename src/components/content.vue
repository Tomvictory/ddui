<template>
	<div class="content">
		<slot></slot>
	</div>
</template>

<script>
	export default{
		name: 'DdContent'
	}
</script>

<style>
	.content{
		flex-grow: 1;
	}
</style>
