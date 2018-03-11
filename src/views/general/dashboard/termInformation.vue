<template>
    <div class="term-informatio">
        <div class="box my-warning">
            <div class="content">
                <h4>{{ title }}</h4>
                <hr>
                <p>شماره ترم(نیم سال):{{ stDetail.stTerm }}</p>
                <p>تعداد واحد اخذ شده : {{ stDetail.vahedGetted }}</p>
            </div>
            <hr>
            <div class="level is-mobile">

                <div class="level-item has-text-centered">
                    <div>
                        <b-tooltip label="برنامه هفتگی" position="is-bottom" class="is-success">
                            <a class="button is-danger" @click="barname_haftegi_open = true">
                                <b-icon pack="fas" icon="th-list" size="is-normal"></b-icon>
                            </a>
                        </b-tooltip>
                    </div>
                </div>

                <div class="level-item has-text-centered">
                    <router-link tag="div" to="/termLog">
                        <b-tooltip label="مشاهده کارنامه" position="is-bottom" class="is-success">
                            <a class="button is-danger">
                                <b-icon pack="fas" icon="list" size="is-normal"></b-icon>
                            </a>
                        </b-tooltip>
                    </router-link>
                </div>


                <div class="level-item has-text-centered">
                    <router-link tag="div" to="/chooseUnit">
                        <b-tooltip label="حذف و اضافه" position="is-bottom" class="is-success">
                            <a class="button is-danger">
                                <b-icon pack="fas" icon="low-vision" size="is-normal"></b-icon>
                            </a>
                        </b-tooltip>
                    </router-link>
                </div>

                <div class="level-item has-text-centered">
                    <router-link tag="div" to="/rqEteraz">
                        <b-tooltip label="ارسال اعتراض" position="is-bottom" class="is-success">
                            <a class="button is-danger">
                                <b-icon pack="fas" icon="life-ring" size="is-normal"></b-icon>
                            </a>
                        </b-tooltip>
                    </router-link>
                </div>
            </div>
        </div>
        <!-- modal section -->
        <b-modal :active.sync="barname_haftegi_open" :width="1024" has-modal-card>
            <div class="modal-card">
                <div class="modal-card-body">
                    <b-table :data="chosedUnits" :columns="lessonColumns">
                    </b-table>
                </div>
            </div>
        </b-modal>

    </div>
</template>

<script>
    import {
        mapGetters
    } from 'vuex';

    export default {
        props: ['stDetail'],
        data() {
            return {
                title: 'اطلاعات ترم',
                barname_haftegi_open: false,

            }
        },
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