<template lang="pug">
  div#notices
    div.container
      div.notices_wrapper(
        v-for="(section, index) in Object.keys(noticesEntries)"
        :key="index"
      )
        div.notices_list(
          v-for="entry in noticesEntries[section]"
          :key="entry.id"
        )
          div.notices_list-each
            h3.notices_list-title(
              @click="goDetails(entry.id, entry.ymd)"
            ) {{ entry.title }}
              span.notices_list-date 20{{ entry.ymd.toString().replace(/\B(?=(\d{2})+(?!\d))/g, ". ") }}
</template>

<script>
import NOTICES_ENTRIES from "@/statics/data/notices.json";

export default {
  name: "notices",

  metaInfo() {
    return {
      title: `공지사항`,
      titleTemplate: `%s`
    };
  },

  computed: {
    noticesEntries: () => NOTICES_ENTRIES
  },

  methods: {
    goDetails(id, ymd) {
      this.$router.push({
        name: `${id}`,
        params: {
          ymd: ymd,
          id: id
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#notices {
  margin: 0 auto;
  padding-top: $grid2x;
  max-width: 480px !important;
  @include user-select();

  .notices_wrapper {
    max-width: 480px !important;

    .notices_list {
      cursor: pointer;

      .notices_list-each {
        border-bottom: 1px solid $texteee;

        .notices_list-title {
          @include font-size($grid4x);
        }

        .notices_list-date {
          color: $black54;
          font-weight: 400;
          @include font-size($grid3x);

          &::before {
            content: "\a";
            white-space: pre;
          }
        }
      }
    }
  }
}
</style>
