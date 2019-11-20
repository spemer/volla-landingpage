<template lang="pug">
  div#guide
    div.guide_title {{ title }}
    div.guide_subtitle
      a.guide_subtitle-link(
        :href="subtitle_link"
        target="_blank"
      ) {{ subtitle }}
    swiper(
      :options="swiperOption"
      ref="mySwiper"
    )
      swiper-slide.guide_imgbox(
        v-for="imgQue in imgQty"
        :key="imgQue"
      )
        img.guide_img(
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
  name: "guide",

  data: () => ({
    title: "",
    subtitle: "",
    subtitle_link: "",
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
        (this.title = "라이브 신청 가이드"),
          (this.subtitle = "세일즈라운지 라이브 신청페이지"),
          (this.subtitle_link = "https://saleslounge.volla.live/live/list"),
          (this.imgQty = 7),
          (this.imgSrc = "live");
      } else if (this.$route.query.type === "prism") {
        (this.title = "프리즘(송출 앱) 설정하기"),
          (this.subtitle = "프리즘스튜디오(PRISM) 다운로드"),
          (this.subtitle_link = "http://prismlive.com/ko_kr/mapp/"),
          (this.imgQty = 5),
          (this.imgSrc = "prism");
      }
    }
  },

  mounted() {
    if (this.$route.query.type === "live") {
      (this.title = "라이브 신청 가이드"),
        (this.subtitle = "세일즈라운지 라이브 신청페이지"),
        (this.subtitle_link = "https://saleslounge.volla.live/live/list"),
        (this.imgQty = 7),
        (this.imgSrc = "live");
    } else if (this.$route.query.type === "prism") {
      (this.title = "프리즘(송출 앱) 설정하기"),
        (this.subtitle = "프리즘스튜디오(PRISM) 다운로드"),
        (this.subtitle_link = "http://prismlive.com/ko_kr/mapp/"),
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
#guide {
  text-align: center;
  padding: 32px 0 48px;

  .guide_title {
    font-weight: 700;
    @include font-size($grid5x);
  }

  .guide_subtitle {
    font-weight: 400;
    @include font-size($grid4x);
  }

  img {
    margin: 16px auto 32px;
    display: inline-block;
    width: 100% !important;
    max-width: 560px !important;
  }
}
</style>
