<template>
  <button type="button" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  emits: ['click'],

  methods: {
    onClick() {
      return this.$emit('click')
    },
  },
}
</script>

<style scoped>
button {
  border-radius: 0.4em;
  border-width: 1px;
}
</style>
