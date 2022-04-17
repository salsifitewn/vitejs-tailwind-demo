<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from "./components/HelloWorld.vue"
import Toggle from "./components/Toggle.vue"
import useToggle from "./composables/toggle.ts"
const { state, toggle } = useToggle(true)
</script>

<template>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />

  <Toggle>
    <template v-slot="{ state, toggle }">
      <button
        v-on:click="toggle"
        type="button"
        class="
          bg-gray-200
          relative
          inline-flex
          flex-shrink-0
          h-6
          w-11
          border-2 border-transparent
          rounded-full
          cursor-pointer
          transition-colors
          ease-in-out
          duration-200
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
        "
        role="switch"
        aria-checked="false"
        :class="{ 'bg-indigo-600': state, 'bg-gray-200': !state }"
      >
        <span class="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          class="
            translate-x-0
            pointer-events-none
            inline-block
            h-5
            w-5
            rounded-full
            bg-white
            shadow
            transform
            ring-0
            transition
            ease-in-out
            duration-200
          "
          :class="{ 'translate-x-5': state }"
        ></span>
      </button>
    </template>
  </Toggle>

  <button
    v-on:click="toggle"
    type="button"
    class="
      bg-gray-200
      relative
      inline-flex
      flex-shrink-0
      h-6
      w-11
      border-2 border-transparent
      rounded-full
      cursor-pointer
      transition-colors
      ease-in-out
      duration-200
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
    "
    role="switch"
    aria-checked="false"
    :class="{ 'bg-indigo-600': state, 'bg-gray-200': !state }"
  >
    <span class="sr-only">Use setting</span>
    <span
      aria-hidden="true"
      class="
        translate-x-0
        pointer-events-none
        inline-block
        h-5
        w-5
        rounded-full
        bg-white
        shadow
        transform
        ring-0
        transition
        ease-in-out
        duration-200
      "
      :class="{ 'translate-x-5': state }"
    ></span>
  </button>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
