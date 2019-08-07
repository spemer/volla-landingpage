<template lang="pug">
  div#tosDetails
    div#terms
      router-view.terms-wrapper
</template>

<script>
import TOS_ENTRIES from "@/statics/data/tos.json";
import { globalVar } from "@/globalVar";

export default {
  name: "TosDetails",

  data: () => ({
    title: null
  }),

  computed: {
    tosEntries: () => TOS_ENTRIES
  },

  metaInfo() {
    return {
      title: `${this.title}`,
      titleTemplate: `%s`
    };
  },

  mounted() {
    let arr = this.tosEntries[globalVar.tosDateNowNumber];

    let idx = arr.findIndex((item, idx) => {
      return item.id === this.$route.params.id;
    });

    this.title = arr[idx].title;

    if (!this.$route.query.date) {
      this.$router.replace({
        query: {
          date: globalVar.tosDateNowNumber
        }
      });
    }
  }
};
</script>
