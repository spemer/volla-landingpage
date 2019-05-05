<template lang="pug">
  div#microsite
    Hero
    StartWith.section__each
    Benefits.section__each
    JoinUs.section__each
</template>

<script>
import Hero from '@/components/seller/Hero'
import StartWith from '@/components/seller/StartWith'
import Benefits from '@/components/seller/Benefits'
import JoinUs from '@/components/home/JoinUs'

export default {
  name: 'microsite',

  components: {
    Hero,
    StartWith,
    Benefits,
    JoinUs,
  },

}
</script>
