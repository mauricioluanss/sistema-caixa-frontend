<template>
  <div class="row">
    <ModalPagamento v-if="statusModalPagamento" />

    <div class="col-6">
      <BotaoGenerico :disabled="carrinhoVazio" @click="limpaCarrinho"
        >LIMPAR CARRINHO</BotaoGenerico
      >
    </div>

    <div class="col-6">
      <BotaoGenerico :disabled="carrinhoVazio" @click="alteraEstadoModalPagamento"
        >PAGAR</BotaoGenerico
      >
    </div>
  </div>
</template>

<script>
import ModalPagamento from './ModalPagamento.vue'
import BotaoGenerico from './BotaoGenerico.vue'

export default {
  components: {
    ModalPagamento,
    BotaoGenerico,
  },

  computed: {
    carrinho() {
      return this.$store.state.moduloCarrinho.carrinho
    },

    carrinhoVazio() {
      return !this.carrinho || this.carrinho.length === 0
    },

    statusModalPagamento() {
      return this.$store.state.moduloModal.modalPagamento
    },
  },

  methods: {
    limpaCarrinho() {
      this.$store.dispatch('moduloCarrinho/chamaLimpaCarrinho')
      this.$store.dispatch('moduloModal/desabilitaModalPagamento')
    },

    alteraEstadoModalPagamento() {
      this.$store.dispatch('moduloModal/habilitaModalPagamento')
    },
  },
}
</script>
