<template>
  <BotaoGenerico @click="finalizarVenda('debit')">1 - DEBITO</BotaoGenerico>
  <BotaoGenerico @click="finalizarVenda('credit')">2 - CREDITO</BotaoGenerico>
  <BotaoGenerico @click="finalizarVenda('pix')">3 - PIX</BotaoGenerico>
</template>

<script>
import BotaoGenerico from './BotaoGenerico.vue'

export default {
  components: {
    BotaoGenerico,
  },

  computed: {
    carrinho() {
      return this.$store.state.carrinho
    },
  },

  methods: {
    async finalizarVenda(metodo) {
      try {
        const produtosVenda = this.carrinho.map((item) => ({
          produtoId: item.id,
          quantidade: item.quantidade,
          valorUnitario: parseFloat(item.valorUnitario),
        }))

        const payload = {
          operadorId: 1,
          metodoPagamento: metodo,
          produtos: produtosVenda,
        }

        await this.$store.dispatch('salvarVenda', payload)

        this.$store.dispatch('desabilitaModalPagamento')

        alert('Venda finalizada com sucesso!')
      } catch (error) {
        console.error(error)
      }
    },
  },
}
</script>
