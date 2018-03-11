<template>

    <div class="box">
        <!--  make it better to morrow -->
        <article class="media">

            <div class="media-content has-text-right">
                <div class="content has-text-right">
                    <h6>عنوان :‌ <strong>{{ mailInfo.title }}</strong></h6>
                    <div>
                        <p>
                            <strong>از طرف:‌ </strong> {{mailInfo.from}}</p>
                        <p>
                            <strong>به :‌ </strong> {{mailInfo.to}}</p>
                    </div>
                    <br>
                    <div>
                        <p>
                            <strong>متن پیام:‌ </strong>

                            {{mailInfo.text}}
                        </p>
                    </div>
                </div>

            </div>
            <nav class="level is-mobile">
                <div class="level-left">
                    <b-tooltip label="ارسال پاسخ" position="is-bottom" type="is-warning">
                        <a class="level-item" @click="isCardModalActive = true">
                            <span class="icon is-medium">
                                <i class="fas fa-reply fa-2x"></i>
                            </span>
                        </a>
                    </b-tooltip>
                    <b-tooltip label="حذف پیام" position="is-bottom" type="is-warning">
                        <a class="level-item" @click="dMail">
                            <span class="icon is-medium">
                                <i class="fas fa-times fa-2x"></i>
                            </span>
                        </a>
                    </b-tooltip>
                </div>
            </nav>
        </article>


        <b-modal :active.sync="isCardModalActive" :width="640" scroll="keep">
            <div class="card">
                <div class="card-content">

                    <div class="content">
                        <form action="#!">
                            <b-field label="عنوان">
                                <b-input v-model="replayTitle" placeholder="عنوان پیام"></b-input>
                            </b-field>

                            <b-field label="متن پیام">
                                <b-input maxlength="200" type="textarea" v-model="replayText" placeholder="سلام ... "></b-input>
                            </b-field>

                            <div class="has-text-centered">
                                <button type="submit" class="button is-primary is-large" @click="sMail">ارسال</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';
    export default {
        props: {
            mailInfo: {
                type: Object,
            }
        },
        data() {
            return {
                isCardModalActive: false,
                replayTitle: '',
                replayText: '',
            }
        },

        computed: {
            ...mapGetters([
                'stDetail',
            ]),   
        },
        methods: {
            ...mapActions([
                'sendMail',
                'deleteMail',
            ]),

            dMail() {
                this.deleteMail(this.mailInfo);
            },
            sMail() {
                this.isCardModalActive = false;
                let mailToSend = {
                    from : this.stDetail.stName +  ' ' + this.stDetail.stLastName,
                    to: this.mailInfo.from,
                    text: this.replayText,
                    title: this.replayTitle,
                }
                this.sendMail(mailToSend);
            }
        }

    }
</script>

<style lang="scss" scoped>
</style>