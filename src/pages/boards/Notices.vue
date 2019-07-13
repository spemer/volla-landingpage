<template lang="pug">
  div#notices
    div.container
      div.notices__wrapper(
        v-for="(section, index) in Object.keys(noticeEntries)"
        :key="index"
      )
        div.notices__list(
          v-for="entry in noticeEntries[section]"
          :key="entry.id"
        )
          div.notices__list--each
            h3.notices__list--title(
              @click="goDetails(entry.id)"
            ) {{ entry.title }}
              span.notices__list--date {{ dateFormatting(entry.ymd) }}
</template>

<script>
import NOTICE_ENTRIES from '@/statics/data/notice.json'
import { dateFormatting } from '@/mixins/dateFormatting'
import { globalVar } from '@/globalVar'

export default {
  name: 'notices',

  metaInfo: {
    title: `${globalVar.serviceEn} - 공지사항`,
    titleTemplate: `%s`,
  },

  mixins: [
    dateFormatting,
  ],

  methods: {
    goDetails (id) {
      this.$router.push({
        name: id,
        params: {
          id: id,
        },
      })
    },
  },

  computed: {
    noticeEntries: _ => {
      return NOTICE_ENTRIES
    },
  },

}
</script>

<style lang="scss" scoped>
#notices {
  padding-top: $grid2x;

  .notices__wrapper {
    .notices__list {
      cursor: pointer;

      .notices__list--each {
        border-bottom: 1px solid $texteee;

        .notices__list--title {
          @include font-size($grid4x);
        }

        .notices__list--date {
          color: $black54;
          font-weight: 400;
          @include font-size($grid3x);

          &::before {
            content: '\a';
            white-space: pre;
          }
        }
      }
    }
  }
}
</style>
