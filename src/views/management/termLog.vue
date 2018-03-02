<template>
    <div>
        <table class="table  table is-fullwidth has-text-centered">
            <thead>
                <tr class="has-text-centered">
                    <th class="has-text-centered">کد درس</th>
                    <th class="has-text-centered">کد ارائه</th>
                    <th class="has-text-centered">نام درس</th>
                    <th class="has-text-centered">نام استاد</th>
                    <th class="has-text-centered">تاریخ برگزاری امتحان</th>
                    <th class="has-text-centered">نمره</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="lesson in karnameh" :key="lesson.nemeh_dars" class="has-text-centered">
                    <td v-for="less in lesson" :key="less" class="has-text-centered">{{less}}</td>
                </tr>
            </tbody>
            <tfoot>

            </tfoot>
        </table>
    </div>
</template>

<script>
    import {
        mapGetters
    } from 'vuex';

    export default {
        data() {
            return {
                karnameh: [],
            }
        },
        computed: {
            ...mapGetters([
                'chosedUnits'
            ]),

        },
        created() {
            this.chosedUnits.forEach(element => {
                let dars = {
                    code_dars: element.code_dars,
                    code_erae: element.code_erae,
                    name_dars: element.name_dars,
                    ostad_name: element.ostad_name,
                    tarikh_emtehan: element.tarikh_emtehan,
                    nomreh: 'منظور نشده'
                };
                this.karnameh.push(dars);
            });
        }
    }
</script>

<style lang="scss" scoped>
</style>