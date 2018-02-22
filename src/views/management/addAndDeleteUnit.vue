<template>
    <div>
        <h1 class="is-size-1">این بخش از پروژه بسیار مشابه قسمت انتخاب واحد است 
            از این رو برای آن وقتی گزاشته نشده.
        </h1>
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