<template>
    <div>
        <b-table :data="chosedUnits" :columns="lessonColumns">
        </b-table>
    </div>
</template>

<script>
     import {
        mapGetters
    } from 'vuex';

    export default {
        computed: {
            ...mapGetters([
                'lessonColumns',
                'chosedUnits'
            ]),
        },

    }
</script>

<style lang="scss" scoped>
</style>