<template lang="pug">
  div#homeView
    Hero
    Service
    EasyStart.section_each
    Download.section_each
    JoinUs.section_each
</template>

<script>
import { globalVar } from "@/globalVar";

export default {
  name: "homeView",

  metaInfo() {
    return {
      title: globalVar.serviceEn,
      titleTemplate: `%s - ${globalVar.tagline}`
    };
  },

  components: {
    Hero: () =>
      import(
        /* webpackChunkName: 'components/home/Hero' */ "@/components/home/Hero"
      ),
    Service: () =>
      import(
        /* webpackChunkName: 'components/home/Service' */ "@/components/home/Service"
      ),
    EasyStart: () =>
      import(
        /* webpackChunkName: 'components/home/EasyStart' */ "@/components/home/EasyStart"
      ),
    Download: () =>
      import(
        /* webpackChunkName: 'components/home/Download' */ "@/components/home/Download"
      ),
    JoinUs: () =>
      import(
        /* webpackChunkName: 'components/home/JoinUs' */ "@/components/home/JoinUs"
      )
  }
};
</script>

<style lang="scss" scoped>
.section_each {
  padding: $grid12x 0 $grid20x;
}
</style>
