<template lang="pug">
  div#app
    router-view
    vue-progress-bar
</template>

<script>
import Vue from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { globalVar } from '@/globalVar'

export default {
  name: 'app',

  metaInfo: {
    title: globalVar.serviceEn,
    titleTemplate: `%s - ${globalVar.tagline}`,
  },

  created () {
    AOS.init({
      delay: 100,
      offset: 160,
      duration: 750,
      once: true,
    })
  },

}
</script>

<style lang="scss">
</style>
