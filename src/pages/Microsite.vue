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
const Hero = () =>
  import(/* webpackChunkName: 'components-Hero' */ '@/components/seller/Hero')
const VideoEmbed = () =>
  import(/* webpackChunkName: 'components-VideoEmbed' */ '@/components/seller/VideoEmbed')
const StatsList = () =>
  import(/* webpackChunkName: 'components-StatsList' */ '@/components/seller/StatsList')
const StartWith = () =>
  import(/* webpackChunkName: 'components-StartWith' */ '@/components/seller/StartWith')
const Benefits = () =>
  import(/* webpackChunkName: 'components-Benefits' */ '@/components/seller/Benefits')
const Benefits2 = () =>
  import(/* webpackChunkName: 'components-Benefits2' */ '@/components/seller/Benefits2')
const JoinUs = () =>
  import(/* webpackChunkName: 'components-JoinUs' */ '@/components/home/JoinUs')

import { globalVar } from '@/globalVar'

export default {
  name: 'Microsite',

  metaInfo: {
    title: globalVar.serviceEn,
    titleTemplate: `%s - ${globalVar.taglineSeller}`
  },

  components: {
    Hero,
    VideoEmbed,
    StatsList,
    StartWith,
    Benefits,
    Benefits2,
    JoinUs
  }
}
</script>
