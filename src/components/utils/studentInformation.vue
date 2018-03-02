<template>
  <div class="student-information">
      <div class="box my-info">
          <div class="content">
              <h4>{{ title }}</h4>
              <hr>
              <p>نام دانشجو : {{ stDetail.stName + ' ' + stDetail.stLastName}}</p>
              <p>شماره دانشجویی : {{ stDetail.stNumberId }}</p>
              <p>واحد گذرانده : {{ stDetail.allVahedPassed }}</p>
              <p>واحد مانده : {{ stDetail.allVahedRemained}}</p>
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

