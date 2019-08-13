<template lang="pug">
  div#plusfriend-addfriend-button(
    v-if="this.$route.path === '/' || this.$route.path === '/benefits/' || this.$route.path === '/sellerform/'"
  )
    img(
      v-if="onReady"
      alt="카카오톡 문의하기"
      title="카카오톡 문의하기"
      @click="plusFriendChat"
      rel="noopener noreferrer"
      src="@/assets/dist/kakao.svg"
    )
</template>

<script>
export default {
  data: () => ({
    onReady: false,
    isInitialized: false
  }),

  updated() {
    if (this.onReady && !this.isInitialized) {
      setTimeout(() => {
        window.Kakao.init(process.env.VUE_APP_KAKAO_KEY);
        this.isInitialized = true;
      }, 1500);
    }
  },

  methods: {
    plusFriendChat: () => {
      window.Kakao.PlusFriend.chat({
        plusFriendId: process.env.VUE_APP_KAKAO_URL
      });
    }
  },

  created() {
    setTimeout(() => {
      let injectScript = document.createElement("script");
      injectScript.setAttribute(
        "src",
        "https://developers.kakao.com/sdk/js/kakao.min.js"
      );
      injectScript.style.display = "none";
      injectScript.style.visibility = "hidden";
      document.head.appendChild(injectScript);
      this.onReady = true;
    }, 1500);
  }
};
</script>

<style lang="scss" scoped>
#plusfriend-addfriend-button {
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
      @include box-shadow($grid3x, $grid4x, $black08);

      &:hover {
        @include transform(scale(1.05));
        @include box-shadow($grid3x, $grid4x, $black16);
      }
    }
  }
}
</style>
