<template lang="pug">
  div#markdown.blog
    router-view
    router-link.back(
      to="/notices"
      tag="a"
    ) &laquo; Back
</template>

<script>
import { globalVar } from '@/globalVar'

export default {
  name: 'markdown',

  metaInfo: {
    title: `${globalVar.serviceEn} - 공지사항`,
    titleTemplate: `%s`,
  },

}
</script>
