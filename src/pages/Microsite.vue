<template lang="pug">
  div#microsite
    Hero
    Benefits.section_each
    JoinUs.section__each
    Kakao
</template>

<script>
import Hero from '@/components/seller/Hero'
import Benefits from '@/components/seller/Benefits'
import JoinUs from '@/components/home/JoinUs'
import Kakao from '@/components/misc/Kakao'

export default {
  name: 'microsite',

  components: {
    Hero,
    Benefits,
    JoinUs,
    Kakao,
  },

}
</script>
