<template>
    <div class="studentInformation">
        <my-st-info :stDetail="stDetail"></my-st-info>
        <br>
        <my-stp-info :stDetail="stDetail"></my-stp-info>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import stInfo from './dashboard/studentInformation.vue';
    import stParvandeh from './dashboard/studentParvandehInformation.vue';
    export default {
        data() {
            return {
                title: 'اطلاعات دانشجو',
                title2: 'اطلاعات پرونده'   
            }
        },
        components: {
            'my-st-info' : stInfo,
            'my-stp-info' : stParvandeh,
        },
        computed: {
            ...mapGetters([
                'stDetail'
            ]),
        },
    }
</script>

<style lang="scss" scoped>
</style>