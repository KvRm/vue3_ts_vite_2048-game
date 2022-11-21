<template>
  <span
    class="icon-container"
    :class="{
      active,
      disabled,
      hover: !disabled,
      transparentHover,
    }"
  >
    <font-awesome-icon
      :icon="`fa-solid fa-${name}`"
      class="icon"
      :style="{
        width,
        height,
      }"
    />
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SvgIcon',

  props: {
    name: {
      type: String,
      required: true,
    },
    width: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    active: {
      type: Boolean,
    },
    disabled: {
      type: Boolean,
    },
    transparentHover: {
      type: Boolean,
    },
  },
})
</script>

<style lang="scss" scoped>
.icon-container {
  display: inline-flex;
  position: relative;
  padding: 5px;
  border-radius: 5px;

  .icon {
    position: relative;
    z-index: 1000;
  }
}

.hover {
  &:hover::after {
    content: '';
    display: block;
    border-radius: 5px;
    position: absolute;
    background: var(--primary-bg-color);
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 999;
  }
}

.transparentHover {
  &:hover::after {
    opacity: 0.3;
  }
}

.active {
  background: var(--primary-bg-color);
}

.disabled {
  opacity: 0.3;
}
</style>
