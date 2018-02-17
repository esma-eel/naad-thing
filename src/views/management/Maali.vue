<template>
    <div class="oomoor-maali">
        <div class="box my-light">
            <div class="content">
                <h4 class="is-size-4 has-text-weight-bold">{{ title1 }}</h4>
                <br>
                <div class="columns">
                    <div class="column is-one-third">
                        <p>جمع کل بدهکاری :‌ {{tarazeMali.jameKoliBedehKari}}</p>
                        <p>جمع کل بستانکاری :‌ {{ tarazeMali.jameKoleBestanKari }}</p>
                    </div>

                    <div class="column is-one-third">
                        <p>وضعیت نهایی : {{ tarazeMali.finalStatus }}</p>
                        <p>تراز :‌ {{ tarazeMali.taraz }}</p>
                    </div>
                </div>
            </div>
        </div>

        <br> 

        <div class="box my-light">
            <div class="content">
                <b-table :data="maliData" :columns="maliColumns"></b-table>
            </div>
            <div class="has-text-centered">
                <a class="button is-info">پرداخت الکترونیکی</a>
                <a class="button is-info">پرداخت الکترونیکی شهریه</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title1: 'وضعیت نهایی تراز مالی دانشجو',
                tarazeMali: {
                    jameKoliBedehKari: 1000,
                    jameKoleBestanKari: 2000,
                    finalStatus: 'تسویه',
                    taraz: 0,

                },
                maliData: [
                    { 'id': 1, 'code_term': '961', 'onvane_term_tahsili': 'نیم سال اول تحصیلی - ۹۶ − ۹۷', 
                    
                    'last_status_of_student_term': 'ثبت نام عادی / ممتاز', 'stable_term_tution': 2066406, 
                    'sum_of_unstable_tution': 5223873, 'sum_of_unstable_tution_and_stable_tution':  7290279 ,
                     },

                    { 'id': 2, 'code_term': '962', 'onvane_term_tahsili': 'نیم سال دوم تحصیلی - ۹۶ − ۹۷', 
                    
                    'last_status_of_student_term': 'مجاز به حذف و اضافه / تایید حذف و اضافه توسط دانشجو', 'stable_term_tution': 2066406, 
                    'sum_of_unstable_tution': 6298405, 'sum_of_unstable_tution_and_stable_tution':  8364811 ,
                     },
                ],
                maliColumns: [
                    {
                        field: 'id',
                        label: 'شماره',
                        width: '10',
                        numeric: true
                    },
                    {
                        field: 'code_term',
                        label: 'کد ترم',
                    },
                    {
                        field: 'onvane_term_tahsili',
                        label: 'عنوان ترم تحصیلی',
                    },
                    {
                        field: 'last_status_of_student_term',
                        label: 'آخرین وضعیت دانشجو در ترم',
                        centered: true
                    },
                    {
                        field: 'stable_term_tution',
                        label: 'شهریه ثابت ترم',
                        numeric: true
                    },
                    {
                        field: 'sum_of_unstable_tution',
                        label: ' جمع شهریه متغیر ترم',
                        numeric: true
                    },
                    {
                        field: 'sum_of_unstable_tution_and_stable_tution',
                        label: 'جمع شهریه ثابت و متغیر ',
                        numeric: true
                    }
                ]
            }
        },
        beforeCreate() {
            const loadingComponent = this.$loading.open()
            setTimeout(() => loadingComponent.close(), 2 * 1000)
        }
    }
</script>

<style lang="scss" scoped>
</style>