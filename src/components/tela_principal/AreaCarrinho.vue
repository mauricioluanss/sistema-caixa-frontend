<template>
  <div
    class="row area-carrinho d-flex flex-column justify-content-between align-items-center w-100"
  >
    <div class="row">
      <div class="col-12 titulo">
        <QtdItensCarrinho />
      </div>
    </div>
    <div class="row">
      <div class="col-12 carrinho-produtos d-flex flex-column justify-content-start p-1 gap-1">
        <CarrinhoProdutos />
      </div>
    </div>
    <div class="row">
      <div
        class="col-12 valor-carrinho d-flex justify-content-center align-items-center h-100"
        style="background-color: rgb(23, 208, 208)"
      >
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
  height: 550px;
  background-color: rgb(0, 0, 0);
}

.titulo {
  background-color: rgb(9, 94, 94);
  color: white;
  text-align: center;
  font-size: 1.5em;
}
.carrinho-produtos {
  background-color: cadetblue;
  min-height: 300px;
  max-height: 300px;
  overflow-y: scroll; /* usei scroll para a barra de rolagem sempre ficar visivel e não deslocar os elementos */
}

.botoes {
  background-color: bisque;
}
</style>
