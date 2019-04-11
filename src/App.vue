<template lang="pug">
  div#app
    router-view
    //- vue-progress-bar
</template>

<script>
import Vue from 'vue'
// import VueProgressBar from 'vue-progressbar'
import {globalVar} from '@/globalVar'

// Vue.use(VueProgressBar, {
//   color: '#ff82ab',
//   height: '2px',
// })

export default {
  name: 'app',

  metaInfo: {
    title: globalVar.serviceEn,
    titleTemplate: '%s' + ' - ' + globalVar.tagline,
  },

  // mounted () {
  //   this.$Progress.finish()
  // },

  // created () {
  //   this.$Progress.start()
  //   this.$router.beforeEach((to, from, next) => {
  //     if (to.meta.progress !== undefined) {
  //       let meta = to.meta.progress
  //       this.$Progress.parseMeta(meta)
  //     }
  //     this.$Progress.start()
  //     next()
  //   })
  //   this.$router.afterEach((to, from) => {
  //     this.$Progress.finish()
  //   })
  // },
}
</script>
