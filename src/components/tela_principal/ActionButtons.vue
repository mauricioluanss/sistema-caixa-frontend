<template>
  <div class="row">
    <ModalPagamento v-if="mostrarModalPagamento" />

    <div class="col-6">
      <BotaoGenerico @click="limpaCarrinho">LIMPAR CARRINHO</BotaoGenerico>
    </div>

    <div class="col-6">
      <BotaoGenerico @click="alteraEstadoModalPagamento">PAGAR</BotaoGenerico>
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
