<template>
  <div
    class="row area-carrinho d-flex flex-column align-items-center w-100 m-0 p-0 gap-3 rounded-3"
  >
    <div class="row">
      <div class="col-12 titulo d-flex px-2 pt-4">
        <QtdItensCarrinho />
      </div>
    </div>
    <div class="row">
      <div class="col-12 carrinho-produtos d-flex flex-column justify-content-start p-1 gap-2">
        <CarrinhoProdutos />
      </div>
    </div>
    <div class="row">
      <div class="col-12 valor-carrinho d-flex justify-content-center align-items-center h-100">
        <ValorCarrinho />
      </div>
    </div>
    <div class="row">
      <div class="col-12 botoes">
        <ActionButtons />
      </div>
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
.area-carrinho {
  height: 650px;
  background-color: rgb(255, 255, 255);
  border-color: rgb(218, 218, 218);
  border-style: solid;
  border-width: 0.5px;
  border-radius: 5px;
}

.titulo {
  background-color: rgb(255, 255, 255);
  color: white;
  text-align: center;
  font-size: 1.5em;
  margin-bottom: 5px;
}

.carrinho-produtos {
  min-height: 300px;
  max-height: 300px;
  overflow-y: scroll;
  /* usei scroll para a barra de rolagem sempre ficar visivel e não deslocar os elementos */
}
</style>
