<template lang="pug">
  div#homeView
    Hero
    Service
    EasyStart.section__each
    Download.section__each
    JoinUs.section__each
</template>

<script>
const Hero = () => import('@/components/home/Hero')
const Service = () => import('@/components/home/Service')
const EasyStart = () => import('@/components/home/EasyStart')
const Download = () => import('@/components/home/Download')
const JoinUs = () => import('@/components/home/JoinUs')

import { globalVar } from '@/globalVar'

export default {
  name: 'HomeView',

  metaInfo: {
    title: globalVar.serviceEn,
    titleTemplate: `%s - ${globalVar.tagline}`
  },

  components: {
    Hero,
    Service,
    EasyStart,
    Download,
    JoinUs
  }
}
</script>
