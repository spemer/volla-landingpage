<template lang="pug">
  div#eventlanding
    div.eventlanding_wrapper
      img.eventlanding_img(
        src="@/markdowns/notice/image/dist/event_landing.png"
      )
      JoinUs
</template>

<script>
export default {
  name: "eventLanding",

  components: {
    JoinUs: () =>
      import(
        /* webpackChunkName: 'components/home/JoinUs' */ "@/components/home/JoinUs"
      )
  },

  metaInfo: {
    title: `볼라 입점이벤트`,
    titleTemplate: `%s`
  }
};
</script>

<style lang="scss" scoped>
#eventlanding {
  text-align: center;
  padding: $grid8x 0 $grid4x;
  @include user-select();

  #joinus {
    border: none !important;
  }

  .eventlanding_wrapper {
    .eventlanding_img {
      width: 100%;
      max-width: 560px;
    }
  }
}
</style>
