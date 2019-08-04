<template lang="pug">
  div#closebtn
    a.global__cta--link(
      @click="closeWindow"
    )
      button.global__cta--btn(
        type="button"
      ) 창 닫기
</template>

<script>
export default {
  name: 'closebtn',

  methods: {
    closeWindow: () => {
      window.close()
      window.postMessage('close')
      (window.ReactNativeWebView)
        && window.ReactNativeWebView.postMessage('close')
    },
  },

}
</script>

<style lang="scss" scoped>
#closebtn {
  @media #{$pablet} {
    display: none;
  }
}
</style>
