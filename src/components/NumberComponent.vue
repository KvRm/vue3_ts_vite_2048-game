<template>
  <div class="number-container">
    <div
        class="number"
        :class="color"
    >
      {{ number }}
    </div>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent} from "vue";

export default defineComponent({
  name: 'MainView',
  props: {
    value: {
      type: Number,
      required: true
    }
  },

  setup(props) {
    const number = computed<'' | number>(() => {
      if (props.value === 0) return ''
      return props.value
    })

    const color = computed<string>(() => {
      if (props.value === 2) return "first"
      if (props.value === 4) return "second"
      if (props.value === 8) return "third"
      if (props.value === 16) return "fourth"
      if (props.value === 32) return "fifth"
      if (props.value === 64) return "sixth"
      if (props.value === 128) return "seventh"
      if (props.value === 256) return "eighth"
      if (props.value === 512) return "ninth"
      if (props.value === 1024) return "tenth"
      if (props.value === 2048) return "eleventh"
      if (props.value === 4096) return "twelfth"
      if (props.value === 8192) return "thirteenth"
      if (props.value === 16384) return "fourteenth"
      if (props.value === 32768) return "fifteenth"
      return "empty"
    })

    return {
      number,
      color
    }
  }
})
</script>

<style lang="scss" scoped>
.number-container {
  display: grid;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
}

.number {
  display: grid;
  align-items: center;
  width: 110px;
  height: 110px;
  border-radius: 10px;
  font-size: 1.8rem;
  color: black;
}

.empty {
  background: var(--primary-bg-color);
}

.first {
  background: #BDF5CC;
}

.second {
  background: #A1E5B1;
}

.third {
  background: #77CF86;
}

.fourth {
  background: #39BE6E;
}

.fifth {
  background: #4FAE57;
}

.sixth {
  background: #50CDB0;
}

.seventh {
  background: #4ACDBF;
}

.eighth {
  background: #30AFCD;
}

.ninth {
  background: #207DCD;
}

.tenth {
  background: #1246CD;
}

.eleventh {
  background: #5929CD;
}

.twelfth {
  background: #7F22CD;
}

.thirteenth {
  background: #AE1CCD;
}

.fourteenth {
  background: #CD06B9;
}

.fifteenth {
  background: #CD0882;
}
</style>