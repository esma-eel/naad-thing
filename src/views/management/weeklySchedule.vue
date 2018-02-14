<template>
    <div>
        <h1 class="is-size-1">Barname Haftegi.vue</h1>
    </div>
</template>

<script>
    export default {
        beforeCreate() {
            const loadingComponent = this.$loading.open()
            setTimeout(() => loadingComponent.close(), 2 * 1000)
        }
    }
</script>

<style lang="scss" scoped>
</style>