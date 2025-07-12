<template>
  <!-- container principal -->
  <div
    class="area-carrinho-interna d-flex flex-column justify-content-between align-items-center m-0 py-3 bg-light gap-2">


    <div class="titulo d-flex flex-column justify-content-center align-items-center w-100 ">
      <QtdItensCarrinho />
    </div>

    <div class="carrinho-produtos d-flex flex-column justify-content-start align-items-center p-1 gap-2">
      <CarrinhoProdutos />
    </div>

    <div class="total-carrinho d-flex justify-content-center align-items-center w-100">
      <ValorCarrinho />
    </div>

    <div class="botoes w-100">
      <ActionButtons />
    </div>
  </div>
</template>

<script>
import CarrinhoProdutos from '@/components/tela_principal/CarrinhoProdutos.vue'
import ValorCarrinho from '@/components/tela_principal/ValorCarrinho.vue'
import ActionButtons from '@/components/tela_principal/ActionButtons.vue'
import QtdItensCarrinho from '@/components/tela_principal/QtdItensCarrinho.vue'

export default {
  components: {
    CarrinhoProdutos,
    ValorCarrinho,
    ActionButtons,
    QtdItensCarrinho,
  },
}
</script>

<style scoped>
.area-carrinho-interna {
  width: 95%;
  height: 100%;
  border-width: 0.5px;
  border-color: #f7f7f7;
  border-radius: 20px;
  border-style: solid;
  box-shadow: 0 1px 2px 0 #d3d3d3;
}

.carrinho-produtos {
  width: 90%;
  height: 400px;
  overflow-y: scroll;
  /* usei scroll para a barra de rolagem sempre ficar visivel e não deslocar os elementos */
}
</style>
