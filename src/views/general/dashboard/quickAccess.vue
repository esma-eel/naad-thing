<template>
    <div class="term-informatio">
        <div class="box my-light">
            <div class="content">
                <h4>{{ title }}</h4>
            </div>
            <hr>
            <div class="level "> 
              
                <div class="level-item has-text-centered">
                    <router-link tag="div" to="/rqOrderFood">
                        <b-tooltip label="سفارش غذا" position="is-bottom" class="is-success">
                            <a class="button is-danger">
                                <b-icon pack="fas" icon="utensils" size="is-normal"></b-icon>
                                <span class="marg-this-icon">سفارش غذا</span>
                            </a>
                        </b-tooltip>
                    </router-link>
                </div>

                <div class="level-item has-text-centered">
                    <router-link tag="div" to="/setting">
                        <b-tooltip label="تنظیمات" position="is-bottom" class="is-success">
                            <a class="button is-danger">
                                <b-icon pack="fas" icon="cog" size="is-normal"></b-icon>
                                <span class="marg-this-icon">تنظیمات</span>
                            </a>
                        </b-tooltip>
                    </router-link>
                </div>

                 <div class="level-item has-text-centered">
                    <router-link tag="div" to="/maali">
                        <b-tooltip label="امور مالی" position="is-bottom" class="is-success">
                            <a class="button is-danger">
                                <b-icon pack="fas" icon="credit-card" size="is-normal"></b-icon>
                                <span class="marg-this-icon">امور مالی</span>
                            </a>
                        </b-tooltip>
                    </router-link>
                </div>
    

                <div class="level-item has-text-centered">
                    <div>
                        <b-tooltip label="برنامه هفتگی" position="is-bottom" class="is-success">
                            <a class="button is-danger" @click="barname_haftegi_open = true">
                                <b-icon pack="fas" icon="th-list" size="is-normal"></b-icon>
                                <span class="marg-this-icon">برنامه هفتگی</span>
                            </a>
                        </b-tooltip>
                    </div>
                </div>

                <div class="level-item has-text-centered">
                    <router-link tag="div" to="/termLog">
                        <b-tooltip label="مشاهده کارنامه" position="is-bottom" class="is-success">
                            <a class="button is-danger">
                                <b-icon pack="fas" icon="list" size="is-normal"></b-icon>
                                <span class="marg-this-icon">مشاهده کارنامه</span>
                            </a>
                        </b-tooltip>
                    </router-link>
                </div>


                <div class="level-item has-text-centered">
                    <router-link tag="div" to="/chooseUnit">
                        <b-tooltip label="انتخاب واحد" position="is-bottom" class="is-success">
                            <a class="button is-danger">
                                <b-icon pack="fas" icon="low-vision" size="is-normal"></b-icon>
                                <span class="marg-this-icon">انتخاب واحد</span>
                            </a>
                        </b-tooltip>
                    </router-link>
                </div>

                <div class="level-item has-text-centered">
                    <router-link tag="div" to="/rqEteraz">
                        <b-tooltip label="ارسال اعتراض" position="is-bottom" class="is-success">
                            <a class="button is-danger">
                                <b-icon pack="fas" icon="life-ring" size="is-normal"></b-icon>
                                <span class="marg-this-icon">اعتراض</span>
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
                title: 'دسترسی سریع',
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
.marg-this-icon {
    margin-right: 1em;
}
</style>