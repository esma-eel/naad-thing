<template>
    <section>
        <div class="columns">
            <div class="column is-4  ">
                <my-term-info :stDetail="stDetail"></my-term-info>
            </div>

            <div class="column is-4  ">
                <my-std-info :stDetail="stDetail"></my-std-info>
            </div>

            <div class="column is-4  ">
                <my-fd-reserve></my-fd-reserve>
            </div>
        </div>
        <br>
        <div class="columns has-text-centered">
            <div class="column is-12">
                <my-news-info></my-news-info>
            </div>
        </div>

    </section>
</template>

<script>
    import termInformation from '@/components/utils/termInformation.vue';
    import studentInformation from '@/components/utils/studentInformation.vue';
    import foodReservationInformation from '@/components/utils/foodReservationInformation.vue';
    import newsInformation from '@/components/utils/newsInformation.vue';
    import {mapGetters} from 'vuex';

    export default {
        data() {
            return {

            }
        },
        components: {
            'my-term-info': termInformation,
            'my-std-info': studentInformation,
            'my-fd-reserve': foodReservationInformation,
            'my-news-info': newsInformation,
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