<template lang="pug">
  dl.accordion.box( role="presentation")
    accordion-item(
      v-for="item in content"
      :multiple="multiple"
      :item="item"
      :groupId="groupId"
      :key="item.id"
    )
</template>

<script>
import AccordionItem from '@/components/AccordionItem'
export default {
  components: {
    AccordionItem,
  },
  props: {
    content: {
      type: Array,
      required: true,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      groupId: null,
    }
  },
  mounted() {
    this.groupId = this.$el.id
  },
}
</script>

<style lang="stylus">
.accordion
  padding 0
  dd
    margin-left 0
</style>
