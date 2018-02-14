<template>
  <nav class="navbar is-dark is-radiusless">
    <div class="navbar-brand my-navBox">
      <router-link :to="link" class="navbar-item">
        سیستم آموزشی ناد
      </router-link>
      <a class="navbar-item  is-hidden-touch">
        {{ time }}
      </a>
      <div class="navbar-burger burger " @click="openMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div class="my-navBox is-hidden-touch">
        <div class="navbar-item is-pulled-left">
          <a class="navbar-item button is-warning">
            خروج
          </a>
        </div>
      </div>
    </div>


  </nav>
</template>

<script>
  import {
    Bus
  } from '@/main.js'

  export default {
    data() {
      return {
        openOrNot: true,
        time: null,
        link: '/',
      }
    },
    methods: {
      updateTime() {
        var currentdate = new Date();
        var datetime = " " + currentdate.getDate() + "/" +
          (currentdate.getMonth() + 1) + "/" +
          currentdate.getFullYear() + " @ " +
          currentdate.getHours() + ":" +
          currentdate.getMinutes() + ":" +
          currentdate.getSeconds();
        this.time = datetime;
      },
      openMenu() {
        this.openOrNot = !this.openOrNot;
        Bus.$emit('openOurMenu', this.openOrNot);
      }
    },
    created() {
      Bus.$on('closeOurMenu', (closing) => {
        this.openOrNot = closing;
      });

      this.time = new Date();
      setInterval(() => {
        this.updateTime();
      }, 1 * 1000);
    }

  }

</script>

<style lang="scss" scoped>
  .my-navBox {
    width: 100%;
  }

</style>
