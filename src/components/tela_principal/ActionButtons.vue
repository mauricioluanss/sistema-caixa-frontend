<template>
  <div class="row">
    <ModalPagamento v-if="mostrarModalPagamento" />

    <div class="col-6">
      <BotaoLimparCarrinho />
    </div>

    <div class="col-6">
      <BotaoPagar @click="alteraEstadoModalPagamento" />
    </div>
  </div>
</template>

<script>
import BotaoPagar from './botoes/BotaoPagar.vue'
import BotaoLimparCarrinho from './botoes/BotaoLimparCarrinho.vue'
import ModalPagamento from './ModalPagamento.vue'

export default {
  data() {
    return {
      mostrarModalPagamento: false,
    }
  },

  components: {
    BotaoPagar,
    BotaoLimparCarrinho,
    ModalPagamento,
  },

  methods: {
    alteraEstadoModalPagamento() {
      this.mostrarModalPagamento = true
    },
  },
}
</script>
