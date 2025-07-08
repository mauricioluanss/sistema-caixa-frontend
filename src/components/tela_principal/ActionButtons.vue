<template>
  <div class="row d-flex justify-content-center align-items-center">
    <ModalPagamento v-if="statusModalPagamento" />

    <div class="row">
      <div class="col-12">
        <BotaoGenerico
          id="pagar"
          class="butao"
          :disabled="carrinhoVazio"
          @click="alteraEstadoModalPagamento"
        >
          <CreditCard />
          Pagar
        </BotaoGenerico>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <BotaoGenerico
          id="limpar-carrinho"
          class="butao"
          :disabled="carrinhoVazio"
          @click="limpaCarrinho"
        >
          <IconCancelar />
          Limpar carrinho
        </BotaoGenerico>
      </div>
    </div>
  </div>
</template>

<script>
import ModalPagamento from './ModalPagamento.vue'
import BotaoGenerico from './BotaoGenerico.vue'
import CreditCard from '../icons/CreditCard.vue'
import IconCancelar from '../icons/IconCancelar.vue'

export default {
  components: {
    ModalPagamento,
    BotaoGenerico,
    CreditCard,
    IconCancelar,
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

<style scoped>
.butao {
  width: 100%;
  height: 45px;
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
  font-weight: bold;
  border: none;
}

#pagar {
  background-color: #28a745;
  color: white;
}
#pagar:hover {
  background-color: #218838;
}

#pagar:disabled {
  background-color: #6c757d;
  color: #c5c5c5;
}

#limpar-carrinho {
  background-color: #ffffff;
  color: black;
}
#limpar-carrinho:hover {
  background-color: #f8f9fa;
}
#limpar-carrinho:disabled {
  background-color: #6c757d;
  color: #c5c5c5;
}
</style>
