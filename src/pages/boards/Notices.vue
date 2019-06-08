<template lang="pug">
  div#notices
    div.container
      div.notices__wrapper(
        v-for="(section, index) in Object.keys(entries)"
        :key="index"
      )
        div.notice__list(
          v-for="entry in entries[section]"
          :key="entry.id"
        )
          div.notice__list--each
            h3.notice__list--title(
              @click="$router.push({name: entry.id})"
            ) {{ entry.title }}
              span.notice__list--date {{ entry.date }}
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
    entries: _ => NOTICE_ENTRIES,
  },

}
</script>
