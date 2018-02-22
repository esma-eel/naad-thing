<template>
    <section>
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
import {mapGetters} from 'vuex';

    export default {
        data() {

            return {
                
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
            
            deleteChecked() {},
            submitChosen() {},
            finalSubmit() {},
        }
    }

    
                // if (this.checkedRows.length > 0) {

                //     for (let i = this.lessensData.length - 1; i >= 0; i--) {
                //         for (let x = this.checkedRows.length - 1; x >= 0; x--) {
                //             if (this.lessensData[i].id === this.checkedRows[x].id) {
                //                 this.lessensData.splice(i, 1);
                //                 this.checkedRows.splice(x, 1);
                //             }
                //         }
                //     }
                // }
            
</script>

<style lang="scss" scoped>
    .my-bg-margin {
        margin-left: 5px;
        margin-right: 5px;
    }
</style>