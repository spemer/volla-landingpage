<template lang="pug">
  div#microsite
    Hero
    VideoEmbed.section__each
    StatsList.section__each
    StartWith.section__each
    Benefits.section__each
    Benefits2.section__each
    JoinUs.section__each
</template>

<script>
import { globalVar } from "@/globalVar";

export default {
  name: "Microsite",

  metaInfo: {
    title: `${globalVar.taglineSeller}`,
    titleTemplate: `%s`
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
        /* webpackChunkName: 'components/seller/Benefits' */ "@/components/seller/Benefits"
      ),
    Benefits2: () =>
      import(
        /* webpackChunkName: 'components/seller/Benefits2' */ "@/components/seller/Benefits2"
      ),
    JoinUs: () =>
      import(
        /* webpackChunkName: 'components/home/JoinUs' */ "@/components/home/JoinUs"
      )
  }
};
</script>
