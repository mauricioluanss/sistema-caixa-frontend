<template>
  <button @click="finalizarVenda">pagar</button>
</template>

<script>
export default {
  data() {
    return {}
  },

  computed: {
    carrinho() {
      return this.$store.state.carrinho
    },
  },

  methods: {
    async finalizarVenda() {
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
    },
  },
}
</script>
