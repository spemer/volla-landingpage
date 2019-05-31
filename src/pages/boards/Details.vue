<template lang="pug">
  div#notice_details
    p notice_details {{ details }}
</template>

<script>
import { db } from '@/firebase'

export default {
  name: 'notice_details',

  data: _ => ({
    no: null,
    details: null,
  }),

  firestore: _ => ({
    details: db.collection('notice')
  }),

  created () {
    this.no = this.$route.params.no
    console.log(this.$route.params)
  },

}
</script>
