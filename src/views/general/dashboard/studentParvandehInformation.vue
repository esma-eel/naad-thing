<template>
  <div class="box my-light">
            <div class="content">
                <h4 class="is-size-4 has-text-weight-bold">{{title}}</h4>
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
</template>

<script>
export default {
    props: ['stDetail'],
    data() {
        return {
            title: 'اطلاعات پرونده'
        }
    }
}
</script>

<style lang="scss" scoped>

</style>

