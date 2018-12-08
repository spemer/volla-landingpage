<template lang="pug">
  div#home
    Header
    Kakao
</template>

<script>
import Header from '@/components/Header'
import Kakao from '@/components/misc/Kakao'

export default {
  name: 'home',
  components: {
    Header,
    Kakao,
  }
}
</script>

<style lang="scss">
.section__each {
  padding: 48px 0 80px;
}
</style>
