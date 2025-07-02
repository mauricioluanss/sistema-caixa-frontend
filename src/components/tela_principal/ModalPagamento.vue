<template>
  <BotaoGenerico @click="montaPayload('card', 'debit')">1 - DEBITO</BotaoGenerico>
  <BotaoGenerico @click="montaPayload('card', 'credit')">2 - CREDITO</BotaoGenerico>
  <BotaoGenerico @click="montaPayload('pix', 'pix')">3 - PIX</BotaoGenerico>
</template>

<script>
import BotaoGenerico from './BotaoGenerico.vue'

export default {
  components: {
    BotaoGenerico,
  },

  computed: {
    carrinho() {
      return this.$store.state.moduloCarrinho.carrinho
    },
  },

  methods: {
    // monta o payload e os dados da transação que serão salvos no backend
    async montaPayload(paymentMethod, paymentType) {
      try {
        const produtosVenda = this.carrinho.map((item) => ({
          produtoId: item.id,
          quantidade: item.quantidade,
          valorUnitario: parseFloat(item.valorUnitario),
        }))

        const payload = {
          operadorId: 1,
          paymentMethod: paymentMethod,
          paymentType: paymentType,
          produtos: produtosVenda,
        }

        // manda o payload para a store
        await this.$store.dispatch('moduloCarrinho/repassaPayload', payload)
        console.log(payload)

        this.$store.dispatch('moduloModal/desabilitaModalPagamento')

        /* await chamaPayer(payload)
        alert('Venda finalizada com sucesso!') */
      } catch (error) {
        console.error(error)
      }
    },
  },
}
</script>
