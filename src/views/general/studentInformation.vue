<template>
    <div class="studentInformation">
        <div class="box my-light">
            <div class="content">
                <h4>{{title}}</h4>
                <br>
                <div class="columns">
                    <div class="column is-one-third">
                        <p>نام :‌ {{basic.studentFirstName}}</p>
                        <p>نام خانوادگی :‌ {{basic.studentLastName}}</p>
                        <p>تاریخ تولد :‌{{basic.birthDay}}</p>
                        <p>شماره ملی :‌ {{basic.idCardNumber}}</p>
                        <p>شماره دانشجویی :‌ {{basic.idStudentCardNumber}}</p>
                    </div>
                    <div class="column is-one-third">
                        <p>وضعیت نظام وظیفه :‌ {{basic.nezamVazifeStatus}}</p>
                        <p>ورودی سال :‌ {{basic.voroodiSale}}</p>
                        <p>شبانه یا روزانه : {{basic.shabaneOrRuzane}}</p>
                        <p>ترم :‌ {{basic.termNumber}}</p>
                        <p>تعداد واحد اخذ شده :‌ {{basic.unitGetedThisTermNumber}}</p>
                    </div>
                    <div class="column is-one-third">
                        <p>تعداد واحد گذرانده در ترم {{basic.termNumber}} :‌ {{basic.unitPassedThisTermNumber}}</p>
                        <p>کل واحد های گذرانده :‌ {{basic.unitPassedNumber}}</p>
                        <p>کل واحد های مانده :‌ {{basic.unitRemaindNumber}}</p>
                        <p>وضعیت فارغ التحصیلی :‌ {{basic.FareghTahsiliStatus}}</p>
                    </div>
                </div>
            </div>
        </div>
        <!--  -->
        <!--  -->
        <div class="box my-light">
            <div class="content">
                <h4>وضعیت پرونده</h4>
                
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: 'اطلاعات دانشجو',
                basic: {
                    studentFirstName: 'اسماعیل',
                    studentLastName: 'کمیحانی',
                    termNumber: '۹۶۱',
                    unitPassedNumber: '۶۰',
                    unitRemaindNumber: '۵۰',
                    unitGetedThisTermNumber: '۲۰',
                    unitPassedThisTermNumber: '۰',
                    nezamVazifeStatus: 'معافیت تحصیلی',
                    FareghTahsiliStatus: 'خیر',
                    voroodiSale: '۹۶',
                    birthDay: '۷۶/۱۲/۲۸',
                    idCardNumber: '۰۵۰۰۷۰۰۸۰۰',
                    idStudentCardNumber: '۹۶۱۲۰۰۳۳۱۱۱۲۲۲',
                    shabaneOrRuzane: 'شبانه',
                },

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