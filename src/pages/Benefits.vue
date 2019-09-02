<template lang="pug">
  div#benefits
    Hero
    VideoEmbed.section_each
    StatsList.section_each
    StartWith.section_each
    Benefits.section_each
    Benefits2.section_each
    JoinUs.section_each
</template>

<script>
import { globalVar } from "@/globalVar";

export default {
  name: "benefits",

  metaInfo() {
    return {
      title: globalVar.serviceEn,
      titleTemplate: `%s - ${globalVar.taglineSeller}`
    };
  },

  components: {
    Hero: () =>
      import(
        /* webpackChunkName: 'components/seller/Hero' */ "@/components/seller/Hero"
      ),
    VideoEmbed: () =>
      import(
        /* webpackChunkName: 'components/seller/VideoEmbed' */ "@/components/seller/VideoEmbed"
      ),
    StatsList: () =>
      import(
        /* webpackChunkName: 'components/seller/StatsList' */ "@/components/seller/StatsList"
      ),
    StartWith: () =>
      import(
        /* webpackChunkName: 'components/seller/StartWith' */ "@/components/seller/StartWith"
      ),
    Benefits: () =>
      import(
        /* webpackChunkName: 'components/seller/BenefitsComp' */ "@/components/seller/BenefitsComp"
      ),
    Benefits2: () =>
      import(
        /* webpackChunkName: 'components/seller/BenefitsComp2' */ "@/components/seller/BenefitsComp2"
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
