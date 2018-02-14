<template>
  <div class="student-information">
      <div class="box my-info">
          <div class="content">
              <h4>{{ title }}</h4>
              <hr>
              <p>نام دانشجو : {{ student_information.name }}</p>
              <p>شماره دانشجویی : {{ student_information.stdId }}</p>
              <p>واحد گذرانده : {{ student_information.unit_passed }}</p>
              <p>واحد مانده : {{ student_information.unit_remained}}</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'اطلاعات دانشجو',
            student_information: {
                name: 'اسماعیل کمیجانی',
                stdId: 96120033111000,
                unit_passed: 16,
                unit_remained: 60,
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>

