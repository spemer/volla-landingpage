<template lang="pug">
  div#app
    router-view
    vue-progress-bar
</template>

<script>
import WebFontLoader from "webfontloader";
import { globalVar } from "@/globalVar";

export default {
  name: "app",

  metaInfo: {
    title: globalVar.serviceEn,
    titleTemplate: `%s`
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
