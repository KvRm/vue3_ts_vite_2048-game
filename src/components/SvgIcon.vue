<template>
  <font-awesome-icon
      :icon="`fa-solid fa-${name}`"
      class="icon"
      :style="{
        width,
        height
      }"
  />
</template>

<script lang="ts">

import {defineComponent} from "vue";

export default defineComponent({
  name: 'SvgIcon',

  props: {
    name: {
      type: String,
      required: true
    },
    width: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      required: true
    },
  }
})
</script>

<style lang="scss" scoped>
.icon {
  padding: 5px;
  border-radius: 5px;
  transition: background 0.2s;

  &:hover {
    background: var(--icon-hover);
  }
}
</style>