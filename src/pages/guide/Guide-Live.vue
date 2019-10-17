<template lang="pug">
  div#guide-live
    div.guide-live_title 라이브 방송하기
    div.guide-live_imgbox(
      v-for="n in 5"
    )
      img.guide-live_img(
        :src="require(`@/assets/guide/dist/live-${n}.png`)"
      )
</template>

<script>
export default {
  name: "guide-live"
};
</script>

<style lang="scss" scoped>
#guide-live {
  padding: 48px 0 96px;
  text-align: center;
  font-weight: 700;

  img {
    margin: 32px auto;
    display: inline-block;
    width: 100% !important;
    max-width: 480px !important;
  }
}
</style>
