<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>        
    </div>
</template>
<script>
    export default{
        name: 'DdTabsHead',
        inject: ['eventBus']
    }
</script>
<style lang="scss" scoped>
$tab-hight:40px;
.tabs-head{
    display: flex;
    height: $tab-hight;
    justify-content: flex-start;
    align-items: center;
    > .actions-wrapper{
        margin-left: auto;
    }
}
</style>