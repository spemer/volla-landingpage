<template lang="pug">
  div#closebtn
    a.global__cta--link(
      @click="closeWindow"
    )
      button.global__cta--btn(
      ) 창 닫기
</template>

<script>
export default {
  name: 'closebtn',

  methods: {
    closeWindow () {
      window.open("about:blank","_self").close()
      window.postMessage('close')
    }
  },
}
</script>

<style lang="scss">

</style>
