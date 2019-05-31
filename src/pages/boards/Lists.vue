<template lang="pug">
  div#lists
    p.notice__list(
      v-for="(list, key) in lists"
      :key="key"
      @click="putParams(list.no)"
      style="cursor:pointer"
    ) {{ list.title }}: {{ list.body }}, {{ list.no }}
</template>

<script>
import { db } from '@/firebase'

export default {
  name: 'notice',

  data: _ => ({
    lists: null,
  }),

  firestore: _ => ({
    lists: db.collection('notice'),
  }),

  methods: {
    putParams (param) {
      this.$router.push({
        path: `/notice/${param}`,
        params: {
          no: param
        },
      })
    },
  },

}
</script>
