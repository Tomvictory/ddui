<template>
    <div class="tabs-item" @click="xxx" :class="classes">
        <slot></slot>
    </div>
</template>
<script>
    export default{
        name: 'DdTabsItem',
        inject: ['eventBus'],
        data (){
            return {
                active: false
            }
        },
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            name:{
                type: String|Number,
                required: true
            }
        },
        created(){
            this.eventBus.$on('update:selected',(name)=>{
                this.active = name === this.name
            })
        },
        computed:{
            classes(){
                return {
                    active: this.active
                }
            }
        },
        methods:{
            xxx(){
                this.eventBus.$emit('update:selected',this.name,this)
            }
        }
    }
</script>
<style lang="scss" scoped>
$blue: blue;
.tabs-item{
    flex-shrink: 0;
    padding: 0 1em;
    cursor: pointer;
    display: flex;
    height: 100%;    
    align-items: center;
    &.active{
        font-weight: bold;
        color: $blue;
    }
}
</style>