<template lang="pug">
  div#home
    Header
    router-view
    Footer
    Kakao
</template>

<script>
const Header = () => import('@/components/Header')
const Footer = () => import('@/components/Footer')
const Kakao = () => import('@/components/misc/Kakao')

export default {
  name: 'Home',

  components: {
    Header,
    Footer,
    Kakao
  }
}
</script>
