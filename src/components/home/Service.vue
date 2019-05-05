<template lang="pug">
  div#service
    div.container
      h1.service__title.section__title 대세는 라이브 방송입니다
      div.service__card
        div.service__card--each(
          v-for="(value, key, index) in serviceList"
          :key="key"
        )
          h3.service__card--title {{ value.title }}
          p.service__card--text.section__subtitle {{ value.desc }}
          div.service__card--img(:class="'img-' + index")
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'service',

  computed: {
    ...mapState([
      'serviceList',
    ]),
  },
}
</script>
