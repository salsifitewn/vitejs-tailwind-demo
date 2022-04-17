import { ref } from "vue"

export default function usetoggle(initialState: boolean) {
  const state = ref(initialState)

  function toggle() {
    state.value = !state.value
  }

  return { state, toggle }
}
