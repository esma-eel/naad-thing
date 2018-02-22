<template>

    <section>
        <!-- wait to set up vuex and then will do some thing with datas    -->
        <b-table :data="lessensData" :columns="lessonsColumns" :checked-rows.sync="checkedRows" checkable>

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

    </section>
</template>

<script>
import vahed1 from './vaheds1.js';
import lessonsColumns from './lesseonColumns.js';

    export default {
        data() {
            return {
                lessensData: vahed1,
                checkedRows: [],
                lessonsColumns,
                zarfiateEntekhabShodeh: 0,
            }
        },
        methods: {
            //checkedRows = []" :disabled="!checkedRows.length
            deleteChecked() {
                if (this.checkedRows.length > 0) {

                    for (let i = this.lessensData.length - 1; i >= 0; i--) {
                        for (let x = this.checkedRows.length - 1; x >= 0; x--) {
                            if (this.lessensData[i].id === this.checkedRows[x].id) {
                                this.lessensData.splice(i, 1);
                                this.checkedRows.splice(x, 1);
                            }
                        }
                    }
                }
            },
            submitChosen() {},
            finalSubmit() {},
        }
    }
</script>

<style lang="scss" scoped>
    .my-bg-margin {
        margin-left: 5px;
        margin-right: 5px;
    }
</style>