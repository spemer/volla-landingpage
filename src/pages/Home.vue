<template lang="pug">
  div#home
    Header
    router-view
    Footer
    Kakao
</template>

<script>
const Header = () =>
  import(/* webpackChunkName: 'components-Header' */ '@/components/Header')
const Footer = () =>
  import(/* webpackChunkName: 'components-Footer' */ '@/components/Footer')
const Kakao = () =>
  import(/* webpackChunkName: 'components-kakao' */ '@/components/misc/Kakao')

export default {
  name: 'Home',

  components: {
    Header,
    Footer,
    Kakao
  }
}
</script>
