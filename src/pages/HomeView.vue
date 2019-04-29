<template lang="pug">
  div#homeView
    Hero
    Service
    EasyStart.section__each
    Download.section__each
    JoinUs.section__each
    Kakao
</template>

<script>
import Hero from '@/components/home/Hero'
import Service from '@/components/home/Service'
import EasyStart from '@/components/home/EasyStart'
import Download from '@/components/home/Download'
import JoinUs from '@/components/home/JoinUs'
import Kakao from '@/components/misc/Kakao'

export default {
  name: 'homeView',

  components: {
    Hero,
    Service,
    EasyStart,
    Download,
    JoinUs,
    Kakao,
  },

}
</script>
