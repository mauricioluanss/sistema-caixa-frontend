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
