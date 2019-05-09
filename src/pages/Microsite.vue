<template lang="pug">
  div#microsite
    Hero
    SellerTitle.section__each
    StartWith.section__each
    Benefits.section__each
    JoinUs.section__each
</template>

<script>
import Hero from '@/components/seller/Hero'
import SellerTitle from '@/components/seller/SellerTitle'
import StartWith from '@/components/seller/StartWith'
import Benefits from '@/components/seller/Benefits'
import JoinUs from '@/components/home/JoinUs'

export default {
  name: 'microsite',

  components: {
    Hero,
    SellerTitle,
    StartWith,
    Benefits,
    JoinUs,
  },

}
</script>
