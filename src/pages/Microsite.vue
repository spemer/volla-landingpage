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
import Hero from '@/components/seller/Hero'
import VideoEmbed from '@/components/seller/VideoEmbed'
import StatsList from '@/components/seller/StatsList'
import StartWith from '@/components/seller/StartWith'
import Benefits from '@/components/seller/Benefits'
import Benefits2 from '@/components/seller/Benefits2'
import JoinUs from '@/components/home/JoinUs'
import { globalVar } from '@/globalVar'

export default {
  name: 'microsite',

  metaInfo: {
    title: globalVar.serviceEn,
    titleTemplate: `%s - ${globalVar.taglineSeller}`,
  },

  components: {
    Hero,
    VideoEmbed,
    StatsList,
    StartWith,
    Benefits,
    Benefits2,
    JoinUs,
  },

}
</script>
