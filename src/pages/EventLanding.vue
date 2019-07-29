<template lang="pug">
  div#eventlanding
    div.eventlanding__wrapper
      img.eventlanding__img(
        src="/src/assets/dist/event_landing.png"
      )
      JoinUs
</template>

<script>
import JoinUs from '@/components/home/JoinUs'

export default {
  name: 'eventLanding',

  components: {
    JoinUs,
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
