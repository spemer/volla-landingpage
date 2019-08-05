<template lang="pug">
  div#eventlanding
    div.eventlanding__wrapper
      img.eventlanding__img(
        src="/src/assets/dist/event_landing.png"
      )
      JoinUs
</template>

<script>
const JoinUs = () =>
import(/* webpackChunkName: 'components/home/JoinUs' */ '@/components/home/JoinUs')

export default {
  name: 'EventLanding',

  components: {
    JoinUs
  },

  metaInfo: {
    title: `볼라와 함께할 셀러를 찾습니다!`,
    titleTemplate: `%s`
  },
}
</script>

<style lang="scss" scoped>
#eventlanding {
  text-align: center;
  padding: $grid8x 0 $grid4x;

  #joinus {
    border: none !important;
  }

  .eventlanding__wrapper {
    .eventlanding__img {
      width: 100%;
      max-width: 590px;
    }
  }
}
</style>
