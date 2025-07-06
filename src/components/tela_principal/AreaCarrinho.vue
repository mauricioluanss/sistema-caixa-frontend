<template>
  <div class="row">
    <div class="area-carrinho">
      <div class="row">
        <div class="col-12">Carrinho - (x) itens</div>
      </div>
      <div class="row">
        <div class="col-12 carrinho-produtos">
          <CarrinhoProdutos />
        </div>
      </div>
      <div class="row">
        <div class="col-12 valor-carrinho">
          <ValorCarrinho />
        </div>
      </div>
      <div class="row">
        <div class="col-12 botoes">
          <ActionButtons />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CarrinhoProdutos from '@/components/tela_principal/CarrinhoProdutos.vue'
import ValorCarrinho from '@/components/tela_principal/ValorCarrinho.vue'
import ActionButtons from '@/components/tela_principal/ActionButtons.vue'

export default {
  components: {
    CarrinhoProdutos,
    ValorCarrinho,
    ActionButtons,
  },
}
</script>

<style scoped>
.area-carrinho {
  background-color: rgb(153, 255, 0);
  height: 550px;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.carrinho-produtos {
  background-color: cadetblue;
  height: 350px;
  overflow-y: auto;
}

.valor-carrinho {
  background-color: rgb(23, 208, 208);
}

.botoes {
  background-color: bisque;
}
</style>
