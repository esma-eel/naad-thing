<template>
    <div class="studentInformation">
        <div class="box my-light">
            <div class="content">
                <h4 class="is-size-4 has-text-weight-bold">{{title}}</h4>
                <br>
                <div class="columns">
                    <div class="column is-one-third">
                        <p>نام :‌ {{stDetail.stName}}</p>
                        <p>نام خانوادگی :‌ {{stDetail.stLastName}}</p>
                        <p>تاریخ تولد :‌{{stDetail.stBirthDate}}</p>
                        <p>شماره ملی :‌ {{stDetail.stIdNumber}}</p>
                        <p>شماره دانشجویی :‌ {{stDetail.stNumberId}}</p>
                    </div>
                    <div class="column is-one-third">
                        <p>وضعیت نظام وظیفه :‌ {{stDetail.nezamVazife}}</p>
                        <p>ورودی سال :‌ {{stDetail.enterDate}}</p>
                        <p>شبانه یا روزانه : {{stDetail.shabOrRooz}}</p>
                        <p>ترم :‌ {{stDetail.stTerm}}</p>
                        <p>تعداد واحد اخذ شده :‌ {{stDetail.vahedGetted}}</p>
                    </div>
                    <div class="column is-one-third">
                        <p>تعداد واحد گذرانده در ترم {{stDetail.stTerm}} :‌ {{stDetail.vahedPased}}</p>
                        <p>کل واحد های گذرانده :‌ {{stDetail.allVahedPassed}}</p>
                        <p>کل واحد های مانده :‌ {{stDetail.allVahedRemained}}</p>
                        <p>وضعیت فارغ التحصیلی :‌ {{stDetail.graduatedStatus}}</p>
                    </div>
                </div>
            </div>
        </div>
        <!--  -->
        <!--  -->
        <div class="box my-light">
            <div class="content">
                <h4 class="is-size-4 has-text-weight-bold">{{title2}}</h4>
                <br>
                <div class="columns">
                    <div class="column is-one-third">
                        <p>پرونده بایگانی شده : {{ stDetail.parvandehBayganiShode }}</p>
                        <p>معاف شده : {{ stDetail.moaafShodeh }}</p>
                        <p>کپی شناسنامه : {{ stDetail.copyShenasnameh }}</p>
                        <p>۶ قطعه عکس : {{ stDetail.sixPicture }}</p>
                        <p>مدرک کاردانی : {{ stDetail.madrakeKardani }}</p>
                    </div>
                    <div class="column is-one-third">
                        <p>شماره تلفن منزل : {{ stDetail.homePhoneNumber }}</p>
                        <p>آدرس منزل : {{ stDetail.homeAddress }}</p>
                        <p>شماره تلفن همراه : {{ stDetail.cellPhoneNumber }}</p>
                        <p> شماره تلفن همراه ضروری : {{ stDetail.essentialCellPhoneNumber }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        data() {
            return {
                title: 'اطلاعات دانشجو',
                title2: 'اطلاعات پرونده'   
            }
        },
        computed: {
            ...mapGetters([
                'stDetail'
            ]),
        },
    }
</script>

<style lang="scss" scoped>
</style>