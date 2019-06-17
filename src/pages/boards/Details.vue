<template lang="pug">
  div#markdown
    router-view.container

    div#closebtn
      router-link.global__cta(
        to="/notices"
        tag="a"
      )
        button.global__cta--btn(
            type="button"
          ) 목록으로
</template>

<script>
import { globalVar } from '@/globalVar'

export default {
  name: 'markdown',

  metaInfo: {
    title: `${globalVar.serviceEn} - 공지사항`,
    titleTemplate: `%s`,
  },

  mounted () {
    let getAnchorTags = document.querySelectorAll('section a');

    [...getAnchorTags].forEach(anchor => {
      let getAnchorTarget = anchor.getAttribute('target')
      if (! getAnchorTarget) {
        anchor.setAttribute('target', '_blank')
      }
    })
  },

}
</script>
