<template lang="pug">
  div#homeView
    Hero
    Service
    EasyStart.section__each
    Download.section__each
    JoinUs.section__each
</template>

<script>
import Hero from '@/components/Hero'
import Service from '@/components/Service'
import EasyStart from '@/components/EasyStart'
import Download from '@/components/Download'
import JoinUs from '@/components/JoinUs'

export default {
  name: 'homeView',

  components: {
    Hero,
    Service,
    EasyStart,
    Download,
    JoinUs,
  },

}
</script>
