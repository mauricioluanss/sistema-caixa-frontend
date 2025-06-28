<template>
  <button @click="limpaCarrinho">Limpar carrinho</button>
</template>

<script>
export default {
  methods: {
    limpaCarrinho() {
      return this.$store.dispatch('chamaLimpaCarrinho')
    },
  },
}
</script>
