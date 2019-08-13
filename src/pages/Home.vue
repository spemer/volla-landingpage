<template lang="pug">
  div#home
    Header
    router-view
    Footer
    Kakao(
      v-if="!this.$store.state.isApp"
    )
</template>

<script>
export default {
  components: {
    Header: () =>
      import(/* webpackChunkName: 'components/Header' */ "@/components/Header"),
    Footer: () =>
      import(/* webpackChunkName: 'components/Footer' */ "@/components/Footer"),
    Kakao: () =>
      import(
        /* webpackChunkName: 'components/misc/kakao' */ "@/components/misc/Kakao"
      )
  }
};
</script>
