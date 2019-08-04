<template lang="pug">
  div#home
    Header
    router-view
    Footer
    Kakao
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Kakao from '@/components/misc/Kakao'

export default {
  name: 'Home',

  components: {
    Header,
    Footer,
    Kakao
  }
}
</script>
