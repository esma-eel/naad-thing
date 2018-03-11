
<template>
  <aside class="menu box my-dark my-menu-tall has-text-white-ter is-radiusless" :class="[{' is-hidden-touch ':openOrNot,}, theme.class]">
    <div class="has-text-left is-hidden-desktop">
      <a class="delete is-medium" @click="closeMenu"></a>
    </div>
    <template v-for="itemy in menuItems">
      <p class="menu-label" :key="itemy.headName">
        {{itemy.headName}}
      </p>
      <ul class="menu-list" :key="itemy.length">
        <li v-for="(little) in itemy.items" :key="little.length">

          <!-- <a href="#!" class="my-hover-warning has-text-light " v-if="isThat(little, 'object') === false">{{ little }}</a> -->

          <template v-if="isThat(little, 'object')">
            <li :key="little.tagText">
              <router-link :to="little.link" class="has-text-light my-hover-warning" active-class="my-active" exact>{{ little.tagText }}</router-link>
            </li>
            <ul>
              <li v-for="subitem in little.items" :key="subitem.tagText">
                <router-link :to="subitem.link" class="has-text-light my-hover-warning" active-class="my-active">{{ subitem.tagText }}</router-link>
              </li>
            </ul>
          </template>

        </li>
      </ul>
    </template>



    <ul class="menu-list is-hidden-desktop">
      <li class="">
        <hr>
        <a class="has-text-light my-hover-warning">خروج</a>
      </li>
    </ul>

  </aside>
</template>

<script>
import MenuItemsList from '../data/menu.js';

  import {
    mapGetters
  } from 'vuex';

  import {
    Bus
  } from '@/main.js'

  export default {
    data() {
      return {
        menuItems: MenuItemsList,
        openOrNot: true,
        closeOrNot: false,
      }
    },

    methods: {
      isThat(mine, type) {
        return typeof mine === type
      },
      closeMenu() {
        this.openOrNot = !this.openOrNot;
        Bus.$emit('closeOurMenu', this.openOrNot);
      },

    },

computed: {
  ...mapGetters([
    'theme'
  ]),
},
    created() {
      Bus.$on('openOurMenu', (opening) => {
        this.openOrNot = opening;
      });
    }
  }
</script>

<style lang="scss" scoped>
  .my-dark {
    background-color: hsl(0, 0%, 21%)
  }

  .my-menu-tall {
    min-height: 100vh;
    height: 100%;
    max-height: 100%;
    overflow: auto;
    top: 0;
    left: 0;
    bottom: 0;
  }

  a.my-hover-warning:hover {
    background-color: hsl(48, 100%, 67%) !important;
    &:hover {
      color: hsl(0, 0%, 21%) !important;
    }
  }

  a.my-active {
    color: hsl(0, 0%, 21%) !important;
    background-color: hsl(48, 100%, 67%) !important;
  }
</style>