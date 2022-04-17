<script>
export default {
  props: { initialState: { type: Boolean, default: false } },
  data() {
    return { state: this.initialState }
  },
  methods: {
    toggle() {
      this.state = !this.state
    },
  },
}
</script>
<template>
  <slot :state="state" :toggle="toggle" />
</template>
s
