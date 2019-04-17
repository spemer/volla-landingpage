<template lang="pug">
  div#app
    router-view
</template>

<script>
import Vue from 'vue'
import {globalVar} from '@/globalVar'

export default {
  name: 'app',

  metaInfo: {
    title: globalVar.serviceEn,
    titleTemplate: '%s' + ' - ' + globalVar.tagline,
  },

}
</script>
