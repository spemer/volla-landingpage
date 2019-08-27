<template lang="pug">
  div#seller
    router-view
</template>

<script>
export default {
  name: "seller",

  created() {
    document.addEventListener("contextmenu", event => {
      return event.preventDefault();
    });
  },

  destroyed() {
    document.removeEventListener("contextmenu", event => {
      return event.preventDefault();
    });
  }
};
</script>

<style lang="scss" scoped>
#seller {
  @include user-select();
}
</style>
