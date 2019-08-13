<template lang="pug">
  div#closebtn
    a.global_cta-link(
      @click="closeWindow"
    )
      button.global_cta-btn(
        type="button"
      ) 창 닫기
</template>

<script>
export default {
  methods: {
    closeWindow: () => {
      window.close();
      window.postMessage("close");
      return (
        window.ReactNativeWebView &&
        window.ReactNativeWebView.postMessage("close")
      );
    }
  }
};
</script>

<style lang="scss" scoped>
#closebtn {
  @media #{$pablet} {
    display: none;
  }
}
</style>
