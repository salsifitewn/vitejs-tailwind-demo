<script setup lang="ts">
import { ref } from "vue"
const props = defineProps({
  initialState: {
    type: Boolean,
    default: false,
  },
})
const state = ref(props.initialState)
const toggle = () => {
  state.value = !state.value
}
</script>
<template>
  <slot :state="state" :toggle="toggle" />
</template>
