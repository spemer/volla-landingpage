<template lang="pug">
  div#home
    Kakao
</template>

<script>
import Kakao from '@/components/misc/Kakao'

export default {
  name: 'home',
  components: {
    Kakao,
  }
}
</script>

<style lang="scss">
.section__each {
  padding: 48px 0 80px;
}
</style>
