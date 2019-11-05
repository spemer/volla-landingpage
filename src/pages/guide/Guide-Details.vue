<template lang="pug">
  div#guide-prism
    div.guide-prism_title {{ title }}
    swiper(
      :options="swiperOption"
      ref="mySwiper"
    )
      swiper-slide.guide-prism_imgbox(
        v-for="imgQue in imgQty"
        :key="imgQue"
      )
        img.guide-prism_img(
          :src="require(`@/assets/guide/dist/${imgSrc}-${imgQue}.png`)"
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

  data: () => ({
    title: "",
    imgQue: 0,
    imgQty: null,
    imgSrc: "",
    swiperOption: {
      pagination: {
        el: ".swiper-pagination"
      }
    }
  }),

  watch: {
    $route() {
      if (this.$route.query.type === "live") {
        (this.title = "라이브 신청 가이드 보러가기"),
          (this.imgQty = 7),
          (this.imgSrc = "live");
      } else if (this.$route.query.type === "prism") {
        (this.title = "프리즘(송출 앱) 설정하기"),
          (this.imgQty = 5),
          (this.imgSrc = "prism");
      }
    }
  },

  mounted() {
    if (this.$route.query.type === "live") {
      (this.title = "라이브 신청 가이드 보러가기"),
        (this.imgQty = 7),
        (this.imgSrc = "live");
    } else if (this.$route.query.type === "prism") {
      (this.title = "프리즘(송출 앱) 설정하기"),
        (this.imgQty = 5),
        (this.imgSrc = "prism");
    }
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
