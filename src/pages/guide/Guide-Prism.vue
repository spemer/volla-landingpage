<template lang="pug">
  div#guide-prism
    div.guide-live_title 프리즘(송출 앱) 설정하기
    div.guide-prism_imgbox(
      v-for="n in 4"
    )
      img.guide-prism_img(
        :src="require(`@/assets/guide/dist/prism-${n}.png`)"
      )
</template>

<script>
export default {
  name: "guide-prism"
};
</script>

<style lang="scss" scoped>
#guide-prism {
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
