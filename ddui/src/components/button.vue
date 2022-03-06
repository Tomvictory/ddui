<template>
  <button class="d-button">
    {{ name }}
  </button>
</template>

<script>
export default {
  name: 'd-button',
  props: {
    name: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.d-button{
	padding: 0 1em;
	height: var(--button-height);
	font-size:var(--font-size);
	border-radius: var(--border-radius);
	border: 1px solid var(--border-color);
	background: var(--button-bg);
}
.d-button:hover{
	border-color: var(--border-color-hover);
}
.d-button:active{
	border-color: var(--button-active-bg);
}
</style>
