<template lang="pug">
  div#guide-live
    div.guide-live_title 라이브 방송하기
    swiper(
      :options="swiperOption"
      ref="mySwiper"
    )
      swiper-slide.guide-live_imgbox(
        v-for="n in 7"
        key="n"
      )
        img.guide-live_img(
          :src="require(`@/assets/guide/dist/live-${n}.png`)"
        )
      div.swiper-pagination(
        slot="pagination"
      )
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "guide-live",

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
#guide-live {
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
