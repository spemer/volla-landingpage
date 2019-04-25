<template lang="pug">
  div#tosView
    router-view
    div.global__cta
      CloseBtn
</template>

<script>
import CloseBtn from '@components/misc/CloseBtn'

export default {
  name: 'tosView',

  components: {
    CloseBtn,
  },
}
</script>
