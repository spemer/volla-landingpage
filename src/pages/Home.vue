<template lang="pug">
  div#home
    Header
    router-view
    Footer
    Kakao(v-if="this.$route.path === '/' || this.$route.path === '/seller'")
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
  },

}
</script>
