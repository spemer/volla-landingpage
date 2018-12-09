<template lang="pug">
  div#home
    Header
    Download.section__each
    Footer
    Kakao
</template>

<script>
import Header from '@/components/Header'
import Download from '@/components/Download'
import Footer from '@/components/Footer'
import Kakao from '@/components/misc/Kakao'

export default {
  name: 'home',
  components: {
    Header,
    Download,
    Footer,
    Kakao,
  }
}
</script>

<style lang="scss">
.section__each {
  padding: 48px 0 80px;
}
</style>
