<template lang="pug">
  div#notices
    div.container
      div.group(
        v-for="(section, index) in Object.keys(entries)"
        :key="index"
      )
        h2.center {{ section }}
        div.section(
          v-for="entry in entries[section]"
          :key="entry.id"
        )
          div.entry
            h3(
              @click="$router.push({name: entry.id})"
            ) {{ entry.title }}
              span.subtitle {{ entry.date }}
</template>

<script>
import NOTICE_ENTRIES from '@/statics/data/notice.json'
import { globalVar } from '@/globalVar'

export default {
  name: 'notices',

  metaInfo: {
    title: `${globalVar.serviceEn} - 공지사항`,
    titleTemplate: `%s`,
  },

  computed: {
    entries() {
      return NOTICE_ENTRIES
    },
  },

  mounted () {
    let getAnchorTags = document.querySelectorAll('section a');

    [...getAnchorTags].forEach(anchor => {
      let getAnchorTarget = anchor.getAttribute('target')
      if(! getAnchorTarget)
        anchor.setAttribute('target', '_blank')
    })
  },

}
</script>
