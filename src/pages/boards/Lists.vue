<template lang="pug">
  div#lists
    //- div.accordion__container
    //-   div.accordion__container--wrapper(
    //-     v-for="(list, key) in lists"
    //-     :key="key"
    //-   )
    //-     button.accordion__container--header(
    //-       @click="toggleList"
    //-     )
    //-       div.accordion__container--icon
    //-       div.accordion__container--title {{ list.title }}
    //-         span.accordion__container--date {{ list.no }}
    //-     div.accordion__container--box
    //-         p.accordion__container--text {{ list.value }}
</template>

<script>

export default {
  name: 'notice',

  data: _ => ({
    lists: null,
  }),

  methods: {
    toggleList () {
      let getLists = this.$el.querySelectorAll('.accordion__container--header')

      for (let i = 0; i < getLists.length; i++) {
        getLists[i].addEventListener('click', function () {
          this.classList.toggle('active')

          let panel = this.nextElementSibling
          if (panel.style.maxHeight) {
            panel.style.maxHeight = null
          }
          else {
            panel.style.maxHeight = `${panel.scrollHeight}px`
          }
        })
      }
    }
  },

}
</script>
