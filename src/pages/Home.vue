<template lang="pug">
  div#home
    Header
    router-view
    Footer
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'home',

  components: {
    Header,
    Footer,
  },
}
</script>
