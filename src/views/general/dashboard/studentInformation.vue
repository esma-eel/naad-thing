<template>
  <div class="student-information">
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
  </div>
</template>

<script>
export default {
     props: ['stDetail'],
    data() {
        return {
            title: 'اطلاعات دانشجو',
        }
    }
}
</script>

<style lang="scss" scoped>

</style>

