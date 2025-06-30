<template>
  <button type="button" @click="onClick">pagar</button>
</template>

<script>
export default {
  /*   computed: {
    carrinho() {
      return this.$store.state.carrinho
    },
  }, */

  emits: ['click'],

  methods: {
    onClick() {
      return this.$emit('click')
    },
    /*     async finalizarVenda() {
      try {
        const produtosVenda = this.carrinho.map((item) => ({
          produtoId: item.id,
          quantidade: item.quantidade,
          valorUnitario: parseFloat(item.valorUnitario),
        }))

        const payload = {
          operadorId: 1,
          metodoPagamento: 'pix',
          produtos: produtosVenda,
        }

        await this.$store.dispatch('salvarVenda', payload)

        alert('Venda finalizada com sucesso!')
      } catch (error) {
        console.error(error)
      }
    }, */
  },
}
</script>
