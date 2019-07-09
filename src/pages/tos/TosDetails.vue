<template lang="pug">
  div#tosDetails
    div#terms

      router-view.terms-wrapper

</template>

<script>
import CloseBtn from '@components/misc/CloseBtn'

export default {
  name: 'tosDetails',

  components: {
    CloseBtn,
  },

}
</script>
