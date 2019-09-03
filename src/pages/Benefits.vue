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
        /* webpackChunkName: 'components/benefits/Hero' */ "@/components/benefits/Hero"
      ),
    VideoEmbed: () =>
      import(
        /* webpackChunkName: 'components/benefits/VideoEmbed' */ "@/components/benefits/VideoEmbed"
      ),
    StatsList: () =>
      import(
        /* webpackChunkName: 'components/benefits/StatsList' */ "@/components/benefits/StatsList"
      ),
    StartWith: () =>
      import(
        /* webpackChunkName: 'components/benefits/StartWith' */ "@/components/benefits/StartWith"
      ),
    Benefits: () =>
      import(
        /* webpackChunkName: 'components/benefits/BenefitsComp' */ "@/components/benefits/BenefitsComp"
      ),
    Benefits2: () =>
      import(
        /* webpackChunkName: 'components/benefits/BenefitsComp2' */ "@/components/benefits/BenefitsComp2"
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
