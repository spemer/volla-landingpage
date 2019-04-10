<template lang="pug">
  div#home
    Header
    Hero
    Service
    Download.section__each
    JoinUs.section__each
    Footer
    Kakao
</template>

<script>
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Service from '@/components/Service'
import Download from '@/components/Download'
import JoinUs from '@/components/JoinUs'
import Footer from '@/components/Footer'
import Kakao from '@/components/misc/Kakao'

export default {
  name: 'home',
  components: {
    Header,
    Hero,
    Service,
    Download,
    JoinUs,
    Footer,
    Kakao,
  }
}
</script>

<style lang="scss">
.section__each {
  padding: $grid12x 0 $grid20x;
}
</style>
