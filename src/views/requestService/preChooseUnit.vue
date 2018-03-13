<template>
    <section>

        <template>
            <b-message title="پیام سیستم" type="is-success" :active="showMessage" class="has-text-right" style="direction: rtl">
                <p class="has-text-right">
                    ثبت واحد ها با موفقیت انجام شد.
                </p>
            </b-message>
        </template>

        <template>
            <b-message title="پیام سیستم" type="is-info" :active="showDelMessage" class="has-text-right" style="direction: rtl">
                <p class="has-text-right">
                    حذف واحد ها با موفقیت انجام شد.
                </p>
            </b-message>
        </template>


        <button class="button field is-success" @click="submitSelectedPish" :disabled="!selected">
            <span>ثبت انتخاب شده ها</span>
        </button>

        <button class="button field is-danger" @click="deleteSelectedPish" :disabled="!selected">
            <span>حذف انتخاب شده ها</span>
        </button>

        <div class="box">

            <b-tabs>

                <b-tab-item label="لیست درس ها">
                    <b-table :data="getPishVahedha" :columns="columns" :checked-rows.sync="selected" :checkable="asIsay"></b-table>
                </b-tab-item>
                <b-tab-item label="درس های انتخاب شده">
                    <b-table :data="getChosedPishVahedha" :columns="columns" class="has-text-centered">
                    </b-table>
                </b-tab-item>

            </b-tabs>
        </div>
    </section>
</template>

<script>
    import {
        mapGetters
    } from 'vuex';

    import {
        mapActions
    } from 'vuex';

    export default {
        data() {

            return {
                selected: [],
                asIsay: true,
                showMessage: false,
                showDelMessage: false,
                columns: [{
                        field: 'code_dars',
                        label: 'کددرس',
                        width: '40',
                        numeric: true
                    },
                    {
                        field: 'dars_ostad',
                        label: 'نام استاد',
                        centered: true
                    },
                    {
                        field: 'dars_name',
                        label: 'نام درس',
                        centered: true
                    },

                ]
            }
        },
        computed: {
            ...mapGetters([
                'getPishVahedha',
                'getChosedPishVahedha'
            ]),
        },
        watch: {
            showMessage() {
                setTimeout(() => {
                    this.showMessage = false;
                }, 3 * 1000);

            },
            showDelMessage() {
                setTimeout(() => {
                    this.showDelMessage = false;
                }, 3 * 1000);

            }
        },
        methods: {
            ...mapActions([
                'addChosedPish',
                'dellChosedPish'
            ]),
            submitSelectedPish() {



                let tekrariNist = [];
                if (this.getChosedPishVahedha.length > 0) {
                    tekrariNist = this.selected.filter((element) => {
                        if (this.getChosedPishVahedha.includes(element)) {
                            alert(`درس  ${element.dars_name} قبلا انتخاب شده است.`)
                        } else {
                            return element;
                        }
                    });
                    tekrariNist.forEach(els => {
                        this.addChosedPish(els);
                    })
                } else {
                    this.selected.forEach(elemetn => {
                        this.addChosedPish(elemetn);
                    })

                }

                this.showMessage = true;

                this.selected = [];

            },
            deleteSelectedPish() {
                if (this.selected.length > 0) {

                    if (confirm('آیا از حذف خود اطمینان دارید ؟')) {

                        this.dellChosedPish(this.selected);
                        this.showDelMessage = true;
                        this.selected = [];
                    }

                } else {
                    alert('درسی برای حذف وجود ندارد');
                }

            },
        }
    }
</script>

<style lang="scss" scoped>
</style>