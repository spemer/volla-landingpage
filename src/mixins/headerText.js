export const headerText = {
  watch: {
    $route() {
      return this.$route.path === "/"
        ? ((this.href = "/benefits/"), (this.text = "입점소개"))
        : ((this.href = "/"), (this.text = "메인으로"));
    }
  },

  mounted() {
    return this.$route.path === "/"
      ? ((this.href = "/benefits/"), (this.text = "입점소개"))
      : ((this.href = "/"), (this.text = "메인으로"));
  }
};
