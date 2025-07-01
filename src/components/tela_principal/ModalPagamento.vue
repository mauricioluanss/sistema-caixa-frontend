<template>
  <BotaoGenerico @click="finalizarVenda('card', 'debit')">1 - DEBITO</BotaoGenerico>
  <BotaoGenerico @click="finalizarVenda('card', 'credit')">2 - CREDITO</BotaoGenerico>
  <BotaoGenerico @click="finalizarVenda('pix', '')">3 - PIX</BotaoGenerico>
</template>

<script>
import BotaoGenerico from './BotaoGenerico.vue'
import { chamaPayer } from '@/services/venda/chamaPayer'

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
    // passa o payload para meu service tratar e mandar pro backend
    async finalizarVenda(paymentMethod, paymentType) {
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

        //await this.$store.dispatch('salvarVenda', payload)
        //await chamaPayer(payload) //teste chamando a payer
        //this.$store.dispatch('desabilitaModalPagamento')
        //alert('Venda finalizada com sucesso!')
      } catch (error) {
        console.error(error)
      }
    },
  },
}
</script>
