<template lang="pug">
  div#plusfriend-addfriend-button(
    v-if="this.$route.path === '/' || this.$route.path === '/seller'"
  )
    img#kakao__pf(
      v-tooltip.left="{content: '카카오톡 문의하기', delay: {show: 500, hide: 100}}"
      @click="plusFriendChat"
      src="/src/assets/dist/kakao.svg"
    )
</template>

<script>
export default {
  name: 'kakao-btn',

  methods: {
    plusFriendChat: _ => {
      Kakao.PlusFriend.chat({
        plusFriendId: process.env.KAKAO_URL
      })
    },
  },

}
</script>
