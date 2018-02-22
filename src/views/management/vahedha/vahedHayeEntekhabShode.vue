<template>
    <section>
        <template>
            <b-message title="پیام سیستم" type="is-info" :active="sabt" class="has-text-right" style="direction: rtl">
                <p class="has-text-right">
                    تغییرات شما با موفقیت ثبت شد.
                </p>
            </b-message>
        </template>

        <template>
            <b-message title="پیام سیستم" type="is-success" :active="finalSabt" class="has-text-right" style="direction: rtl">
                <p class="has-text-right">
                    تغییرات شما با موفقیت ثبت نهایی شد.
                </p>
            </b-message>
        </template>
        <!-- wait to set up vuex and then will do some thing with datas    -->
        <b-table :data="chosedUnits" :columns="lessonColumns" :checked-rows.sync="checkedRows" checkable>

            <template slot="bottom-left">
                <b>تعداد دروس انتخاب شده</b>: {{ checkedRows.length }}
            </template>
        </b-table>


        <div class="field is-grouped">
            <p class="control my-bg-margin">
                <button class="button field is-danger" @click="deleteChecked">
                    <span>حذف انتخاب شده ها</span>
                </button>
            </p>

            <p class="control my-bg-margin">
                <button class="button field is-info" @click="submitChosen">
                    <span>ثبت</span>
                </button>
            </p>

            <p class="control my-bg-margin">
                <button class="button field is-success" @click="finalSubmit">
                    <span>ثبت نهایی</span>
                </button>
            </p>
        </div>

    </section>
</template>

<script>
    // import vahed1 from './vaheds1.js';
    // import lessonsColumns from './lesseonColumns.js';

    // let vahedHa = vahed1;
    import {
        mapGetters
    } from 'vuex';
    import {
        mapActions
    } from 'vuex';
    export default {
        data() {

            return {
                sabt: false,
                finalSabt: false,
                checkedRows: [],
            }
        },

        computed: {
            ...mapGetters([
                'lessonColumns',
                'chosedUnits',
            ]),
        },
        methods: {
            ...mapActions([
                'deleteSelectedUnit'
            ]),
            deleteChecked() {
                if (this.checkedRows.length > 0) {

                    if (confirm('آیا از حذف خود اطمینان دارید ؟')) {
                        this.deleteSelectedUnit(this.checkedRows);
                    }

                } else {
                    alert('درسی برای حذف وجود ندارد');
                }
            },
            submitChosen() {
                this.sabt = true;
            },
            finalSubmit() {
                this.finalSabt = true;
            },
        },
        watch: {
            sabt() {
                setTimeout(() => {
                    this.sabt = false;
                }, 4 * 1000);
            },
            finalSabt() {
                setTimeout(() => {
                    this.finalSabt = false;
                }, 4 * 1000);
            },
            
        },
    }
</script>

<style lang="scss" scoped>
    .my-bg-margin {
        margin-left: 5px;
        margin-right: 5px;
    }
</style>