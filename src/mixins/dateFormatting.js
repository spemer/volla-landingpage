export const dateFormatting = {
  methods: {
    dateFormatting: arg => {
      let year = new Date().getFullYear().toString().substr(0, 2)

      return year + arg.toString().replace(/\B(?=(\d{2})+(?!\d))/g, '. ')
    },
  },

}
