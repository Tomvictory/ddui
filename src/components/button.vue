<template>
  <button class="d-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
	<d-icon class="icon" v-if="icon && !loading" :name="icon"></d-icon>
	<d-icon class="loading icon" v-if="loading" name="loading"></d-icon>
	<div class="content">
		<slot>
		</slot>
	</div>
    
  </button>
</template>

<script>
import Icon from './icon'
export default {
  components:{
		name: 'DdButton',
		'd-icon': Icon
  },
  props: {
	icon: {},
	loading: {
		type: Boolean,
		default: false
	},
	iconPosition: {
		default:'left',
		validator(value) {
			return value !== 'left' || value !== 'right';
		}
	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	@keyframes spin{
		0% {transform: rotate(0deg);}
		100% {transform: rotate(360deg);}
	}
.d-button{
	padding: 0 1em;
	margin: .2em;
	height: var(--button-height);
	font-size:var(--font-size);
	border-radius: var(--border-radius);
	border: 1px solid var(--border-color);
	background: var(--button-bg);
	display: inline-flex;justify-content: center;align-items: center;
	vertical-align: middle;
	&:hover {
		border-color: var(--border-color-hover);
	}
	&:active{
		border-color: var(--button-active-bg);
	}
	&:focus{
		outline: none;
	}
	> .content{
		order: 2;
	};
	> .icon{
		order: 1;margin-left: 0;margin-right: .1em;
	}
	&.icon-right{
		> .content{
			order: 1;
		}
		> .icon{
			order: 2;margin-left: .1em;margin-right: 0;
		}
	}
	.loading{
		animation: spin 1s infinite linear;
	}
	
}
</style>
