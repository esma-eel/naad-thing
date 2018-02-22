<template>

    <section>
        <!-- wait to set up vuex and then will do some thing with datas    -->
        <b-table :data="lessonData" :columns="lessonColumns" :checked-rows.sync="checkedRows" checkable>

            <template slot="bottom-left">
                <b>تعداد دروس انتخاب شده</b>: {{ checkedRows.length }}
            </template>
        </b-table>


        <div class="field is-grouped">
            <p class="control my-bg-margin">
                <button class="button field is-danger" @click="selectUnit">
                    <span>انتخاب درس</span>
                </button>
            </p>

        </div>
        <p>{{chosedUnits}}</p>
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
                checkedRows: [],
            }
        },
        computed: {
            ...mapGetters([
                'lessonData',
                'lessonColumns',
                'chosedUnits'
            ]),
        },
        methods: {
            ...mapActions([
                'setChosedUnits',
            ]),
            selectUnit() {
                let tekrariNist = [];
                if (this.chosedUnits.length > 0) {
                    tekrariNist = this.checkedRows.filter((element) => {
                        if (this.chosedUnits.includes(element)) {
                            alert(`درس  ${element.name_dars} قبلا انتخاب شده است.`)
                        } else {
                            return element;
                        }
                    });
                    this.setChosedUnits(tekrariNist);
                } else {
                    this.setChosedUnits(this.checkedRows);
                }



                this.checkedRows = [];
            },

        }
    }
</script>

<style lang="scss" scoped>
    .my-bg-margin {
        margin-left: 5px;
        margin-right: 5px;
    }
</style>