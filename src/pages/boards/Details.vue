<template lang="pug">
  div#markdown
    router-view.container

    div#closebtn
      router-link.global__cta(
        to="/notices"
      )
        button.global__cta--btn(
            type="button"
          ) 목록으로
</template>

<script>
import NOTICE_ENTRIES from '@/statics/data/notice.json'
import { dateFormatting } from '@/mixins/dateFormatting'
import { globalVar } from '@/globalVar'

export default {
  name: 'markdown',

  computed: {
    noticeEntries: _ => {
      return NOTICE_ENTRIES
    },
  },

  mixins: [
    dateFormatting,
  ],

  metaInfo: {
    title: `${globalVar.serviceEn} - 공지사항`,
    titleTemplate: `%s`,
  },

  mounted () {
    // append date info
    let arr = this.noticeEntries['notice']

    let idx = arr.findIndex((item, idx) => {
      return item.id === this.$route.params.id
    })

    let getTitle = document.querySelectorAll('section h1')[0]
    let setDate = document.createElement('h4')
    getTitle.parentNode.insertBefore(setDate, getTitle.nextSibling)
    setDate.innerHTML = this.dateFormatting(arr[idx].ymd)

    // set _blank to a tags
    let getAnchorTags = document.querySelectorAll('section a');

    [...getAnchorTags].forEach(anchor => {
      let getAnchorTarget = anchor.getAttribute('target')
      if (! getAnchorTarget) {
        return anchor.setAttribute('target', '_blank')
      }
    })
  },

}
</script>

<style lang="scss" scoped>
#markdown {
  padding: auto 0 !important;

  .container {
    padding: 0 $grid2x !important;
    width: calc(100% - #{$grid4x});
  }
}
</style>
