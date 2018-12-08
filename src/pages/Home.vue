<template lang="pug">
  div#home
    Header
    Footer
    Kakao
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Kakao from '@/components/misc/Kakao'

export default {
  name: 'home',
  components: {
    Header,
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
