<template>
  <div class="row">
    <ModalPagamento v-if="mostrarModalPagamento" />

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
  data() {
    return {
      mostrarModalPagamento: false,
    }
  },

  components: {
    ModalPagamento,
    BotaoGenerico,
  },

  computed: {
    carrinho() {
      return this.$store.state.carrinho
    },

    carrinhoVazio() {
      return !this.carrinho || this.carrinho.length === 0
    },
  },

  methods: {
    alteraEstadoModalPagamento() {
      this.mostrarModalPagamento = true
    },

    limpaCarrinho() {
      return this.$store.dispatch('chamaLimpaCarrinho')
    },
  },
}
</script>
