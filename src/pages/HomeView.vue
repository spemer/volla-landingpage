<template lang="pug">
  div#homeView
    Hero
    Service
    EasyStart.section__each
    Download.section__each
    JoinUs.section__each
</template>

<script>
import Hero from '@/components/home/Hero'
import Service from '@/components/home/Service'
import EasyStart from '@/components/home/EasyStart'
import Download from '@/components/home/Download'
import JoinUs from '@/components/home/JoinUs'
import { globalVar } from '@/globalVar'

export default {
  name: 'homeView',

  metaInfo: {
    title: globalVar.serviceEn,
    titleTemplate: `%s - ${globalVar.tagline}`,
  },

  components: {
    Hero,
    Service,
    EasyStart,
    Download,
    JoinUs,
  },

}
</script>
