<template lang="pug">
  div#app
    router-view
</template>

<script>
import WebFontLoader from "webfontloader";
import { globalVar } from "@/globalVar";

export default {
  name: "app",

  metaInfo() {
    return {
      title: globalVar.serviceEn,
      titleTemplate: `%s - ${globalVar.tagline}`,
      meta: [
        {
          name: "og:image",
          content: require("@/assets/dist/gpstore_feature_graphic.png")
        },
        {
          itemprop: "image",
          content: require("@/assets/dist/gpstore_feature_graphic.png")
        },
        {
          property: "og:image",
          content: require("@/assets/dist/gpstore_feature_graphic.png")
        },
        {
          name: "twitter:image",
          content: require("@/assets/dist/gpstore_feature_graphic.png")
        },
        {
          name: "twitter:image:src",
          content: require("@/assets/dist/gpstore_feature_graphic.png")
        }
      ]
    };
  },

  created() {
    WebFontLoader.load({
      custom: {
        families: ["Spoqa Han Sans"],
        urls: ["https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css"]
      },
      active: this.setFontLoaded
    });
  },

  methods: {
    setFontLoaded() {
      this.$emit("font-loaded");
    }
  }
};
</script>

<style lang="scss">
#app {
  -webkit-overflow-scrolling: touch !important;
}
</style>
