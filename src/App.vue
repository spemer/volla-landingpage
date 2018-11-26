<template lang="pug">
  div#app
    router-view
    vue-progress-bar
</template>

<script>
import Vue from 'vue'
import VueProgressBar from 'vue-progressbar'

Vue.use(VueProgressBar, {
  color: '#ffbe19',
  height: '2px'
})

export default {
  name: 'app',

  mounted () {
    this.$Progress.finish()
  },

  // load progressbar
  created () {
    this.$Progress.start()
    this.$router.beforeEach((to, from, next) => {
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress
        this.$Progress.parseMeta(meta)
      }
      this.$Progress.start()
      next()
    })
    this.$router.afterEach((to, from) => {
      this.$Progress.finish()
    })
  },
}
</script>

<style lang="scss">

</style>
