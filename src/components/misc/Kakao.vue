<template lang="pug">
  div#plusfriend-addfriend-button(
    v-if="render"
    :class="{app: this.$route.query.from === 'app'}"
  )
    img(
      alt="카카오톡 문의하기"
      @click="plusFriendChat"
      rel="noopener noreferrer"
      src="@/assets/dist/kakao.svg"
    )
</template>

<script>
export default {
  data: () => ({
    render: false
  }),

  mounted() {
    if (
      this.$route.path === "/" ||
      this.$route.path === "/benefits" ||
      this.$route.path === "/sellerform"
    ) {
      this.render = true;
    }
  },

  methods: {
    plusFriendChat: () => {
      window.Kakao.PlusFriend.chat({
        plusFriendId: "_xhYAnj"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#plusfriend-addfriend-button {
  &.app {
    margin-bottom: $grid18x;
  }

  &:not(.contact_each) {
    @keyframes popup {
      from {
        opacity: 0;
        @include transform(scale(0));
      }

      to {
        opacity: 1;
        @include transform(scale(1));
      }
    }

    right: $grid4x;
    bottom: $grid6x;
    position: fixed;
    animation: popup 0.25s ease-in-out 3s 1 forwards;
    @include transform(scale(0));

    img {
      cursor: pointer;
      border-radius: $grid8x;
      transition: all 0.25s ease;

      &:hover {
        @include transform(scale(1.05));
        @include box-shadow($grid2x, $grid3x, $black16);
      }
    }
  }
}
</style>
