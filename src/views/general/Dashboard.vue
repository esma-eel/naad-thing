<template>
    <section>
        <div class="columns">
            <div class="column is-12  ">
                <my-qucick-access :stDetail="stDetail"></my-qucick-access>
            </div>
        </div>

        <div class="columns">
            <div class="column is-12  ">
                <my-std-info :stDetail="stDetail"></my-std-info>
            </div>
        </div>

    </section>
</template>

<script>
    import quickAccess from './dashboard/quickAccess.vue';
    import studentInformation from './dashboard//studentInformation.vue';

    import {
        mapGetters
    } from 'vuex';

    export default {
        data() {
            return {

            }
        },
        components: {
            'my-qucick-access': quickAccess,
            'my-std-info': studentInformation,
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