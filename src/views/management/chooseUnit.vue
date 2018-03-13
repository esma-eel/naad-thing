<template>
    <div class="choose-unit">
        <div class="box my-light">
            <b-tabs>
                <b-tab-item label="درس های انتخاب شده">
                    <div class="content">
                        <h4 class="has-text-weight-bold is-size-4">{{ title1 }}</h4>
                        <my-shode></my-shode>
                    </div>
                </b-tab-item>

                <b-tab-item label="درس های آماده انتخاب">
                    <div class="content">
                        <h4 class="has-text-weight-bold is-size-4">{{ title2 }}</h4>
                        <my-amadeh></my-amadeh>
                    </div>
                </b-tab-item>
            </b-tabs>

        </div>
    </div>
</template>

<script>
    import vahedHayeAmade from './vahedha/vahedHayeAmadeEntekhab.vue';
    import vahedHayeEntekhabShode from './vahedha/vahedHayeEntekhabShode.vue';

    export default {
        data() {
            return {
                title1: 'واحد های انتخاب شده',
                title2: 'انتخاب واحد از لیست زیر'

            }
        },
        components: {
            'my-amadeh': vahedHayeAmade,
            'my-shode': vahedHayeEntekhabShode,
        },

    }
</script>

<style lang="scss" scoped>
</style>