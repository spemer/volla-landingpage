<template lang="pug">
  div#guide-prism
    div.guide-prism_title 프리즘(송출 앱) 설정하기
    swiper(
      :options="swiperOption"
      ref="mySwiper"
    )
      swiper-slide.guide-prism_imgbox(
        v-for="n in 5"
        key="n"
      )
        img.guide-prism_img(
          :src="require(`@/assets/guide/dist/prism-${n}.png`)"
        )
      div.swiper-pagination(
        slot="pagination"
      )
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "guide-prism",

  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },

  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },

  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style lang="scss" scoped>
#guide-prism {
  padding: 48px 0;
  text-align: center;
  font-weight: 700;

  img {
    margin: 32px auto;
    display: inline-block;
    width: 100% !important;
    max-width: 560px !important;
  }
}
</style>
