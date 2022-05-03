<template>
  <d-button :loading="loading1" @click="loading1 = !loading1">设置</d-button>
  <d-button icon="setting" :loading="loading2" @click="loading2 = !loading2">设置</d-button>
  <d-button icon="setting" icon-position="right" :loading="loading3" @click="loading3 = !loading3">设置</d-button>
  <d-icon name="download"></d-icon>
  <d-button-group>
	  <d-button icon="left">上一页</d-button>
	  <d-button>更多</d-button>
	  <d-button icon="right" icon-position="right">下一页</d-button>
  </d-button-group>
</template>

<script>
export default {
  name: 'App',
  data(){
	return {
		loading1: false,
		loading2: false,
		loading3: false
	}
  },
  methods:{
	  x:function(){
		  console.log(this.loading1)
	  }
  }
}
</script>
	
<style>
	#app{
		margin: 20px;
	}
</style>
