export const toast = {
  methods: {
    toast() {
      this.$toasted.show('이메일 주소가 복사되었습니다', {
        theme: 'primary',
        position: 'bottom-center',
        duration: 2000,
      })
    },
  },

}
