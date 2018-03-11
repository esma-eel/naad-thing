<template>
  <div class="food-reservation-information">
      <div class="box my-success">
          <div class="content">
              <h4>{{ title }}</h4>
              <hr>
              <p>غذای امروز :‌ {{food_reserve.todays_food}}</p>
              <p>وضعیت غذا :‌ {{ food_reserve.reservation_status }}</p>
              <p>موجودی حساب :‌ {{ food_reserve.wallet_charge }}</p>
              <div class="has-text-centered">
                  <a class="button is-dark">اطلاعات بیشتر</a>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'اطلاعات رزرو غدا',
            food_reserve: {
                todays_food: 'قرمه سبزی',
                reservation_status: 'رزرو شده',
                wallet_charge: 21500,
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>

