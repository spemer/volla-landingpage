<template lang="pug">
  div#app
    Header(v-if="this.$route.path === '/'")
    router-view
    Footer(v-if="this.$route.path === '/' || this.$route.path === '/seller-form'")
</template>

<script>
import Vue from 'vue'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {globalVar} from '@/globalVar'

export default {
  name: 'app',

  metaInfo: {
    title: globalVar.serviceEn,
    titleTemplate: '%s' + ' - ' + globalVar.tagline,
  },

  components: {
    Header,
    Footer,
  },

}
</script>
