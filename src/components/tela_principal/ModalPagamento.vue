<template>
  <BotaoGenerico @click="montaPayload('card', 'debit')">1 - DEBITO</BotaoGenerico>
  <BotaoGenerico @click="montaPayload('card', 'credit')">2 - CREDITO</BotaoGenerico>
  <BotaoGenerico @click="montaPayload('pix', '')">3 - PIX</BotaoGenerico>
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
          metodoPagamento: paymentMethod,
          paymentType: paymentType,
          produtos: produtosVenda,
        }

        const response = await this.$store.dispatch('repassaPayload', payload)
        console.log(JSON.stringify(response, null, 2))

        /* await chamaPayer(payload) //teste chamando a payer
        this.$store.dispatch('desabilitaModalPagamento')
        alert('Venda finalizada com sucesso!') */

      } catch (error) {
        console.error(error)
      }
    },
  },
}
</script>
