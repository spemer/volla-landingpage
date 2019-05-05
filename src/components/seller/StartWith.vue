<template lang="pug">
  div#startWith
    div.container
      h1.service__title.section__title
        | {{ serviceKo }}의 시작을 함께하실 셀러분들을 모십니다
</template>

<script>
import { globalVar } from '@/globalVar'

export default {
  name: 'startWith',

  data () {
    return {
      serviceKo: globalVar.serviceKo,
    }
  },

}
</script>
