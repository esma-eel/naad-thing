<template>
    <div>
        <ul>
            <li v-for="mail in getMails" :key="mail">
                <my-mail :mailInfo="mail"></my-mail>
                <br>
            </li>
        </ul>

    </div>
</template>

<script>
    import Mail from './mailbox/mail.vue';
    import {
        mapGetters
    } from 'vuex';

    export default {
        computed: {
            ...mapGetters([
                'getMails',
            ]),


        },
        components: {
            'my-mail': Mail,
        }
    }
</script>

<style lang="scss" scoped>
</style>