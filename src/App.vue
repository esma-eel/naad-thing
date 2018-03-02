<template>
  <div id="app" class="container is-fluid is-marginless">
    <div class="columns is-gapless ">
      <div class="column is-one-fifth ">
        <my-menu></my-menu>
      </div>
      <!-- remember to write and config css class color again
  and some padding and margin classes
 -->
      <div class="column  is-four-fifths ">
        <my-navbar></my-navbar>
        <br>
        <br>
        <transition 
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
        mode="out-in"
        >
          <router-view class="my-main-padding" />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  import Menu from '@/components/Menu.vue'
  import NavBar from '@/components/NavBar.vue'

  export default {
    created() {
      this.$store.dispatch('initLessonData');
      this.$store.dispatch('initlessonColumns');
    },
    components: {
      'my-menu': Menu,
      'my-navbar': NavBar,
    }
  }
</script>

<style lang="scss">
  .my-main-padding {
    padding: 1%;
  }

  .my-white {
    background-color: hsl(0, 0%, 100%) !important;
    color: hsl(0, 0%, 4%) !important;

  }

  .my-black {
    background-color: hsl(0, 0, 4%) !important;
    color: hsl(0, 0%, 100%) !important;
  }

  .my-light {
    background-color: hsl(0, 0, 96%) !important;
    color: hsl(0, 0%, 21%) !important;
  }

  .my-dark {
    background-color: hsl(0, 0%, 21%) !important;
    color: hsl(0, 0%, 96%) !important;
  }

  .my-primary {
    background-color: hsl(171, 100%, 41%) !important;
    color: hsl(0, 0%, 100%) !important;
  }

  .my-link {
    background-color: hsl(217, 71%, 53%) !important;
    color: hsl(0, 0%, 100%) !important;
  }

  .my-info {
    background-color: hsl(204, 86%, 53%) !important;
    color: hsl(0, 0%, 100%) !important;
  }

  .my-success {
    background-color: hsl(141, 71%, 48%) !important;
    color: hsl(0, 0%, 100%) !important;
  }

  .my-warning {
    background-color: hsl(48, 100%, 67%) !important;
    color: rgba(0, 0, 0, 0.7) !important;
  }

  .my-danger {
    background-color: hsl(348, 100%, 61%) !important;
    color: hsl(0, 0%, 100%) !important;
  }
</style>