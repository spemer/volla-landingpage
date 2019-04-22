<template lang="pug">
  div#home
    Hero
    Service
    EasyStart.section__each
    Download.section__each
    JoinUs.section__each
    Kakao
</template>

<script>
import Hero from '@/components/Hero'
import Service from '@/components/Service'
import EasyStart from '@/components/EasyStart'
import Download from '@/components/Download'
import JoinUs from '@/components/JoinUs'
import Kakao from '@/components/misc/Kakao'

export default {
  name: 'home',

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
