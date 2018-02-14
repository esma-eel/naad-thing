<template>
    <div class="fourHundred">
        <h1 class="is-size-1">صفحه در خواستی شما موجود نمیباشد.</h1>
        <div>
            <h2 class="has-text-danger">
                Error 404
            </h2>
        </div>
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