import {
  debounce
} from 'lodash'

export const toast = {
  methods: {
    toast: _.debounce(
      function (str) {
        this.$toasted.show(str, {
          theme: 'primary',
          position: 'bottom-center',
          duration: 2000,
        })
      }, 1000, {
        leading: true,
        trailing: false,
      },
    )
  }
}
