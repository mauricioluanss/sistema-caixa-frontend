<template>
  <div class="row area-carrinho">
    <div class="row">
      <div class="col-12 titulo">
        Carrinho - (x) itens<!-- entre parenteses vou colocar a contagem de itens -->
      </div>
    </div>
    <div class="row">
      <div class="col-12 carrinho-produtos">
        aqui vou colocar os produtos do carrinho
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
  height: 550px;
  background-color: rgb(102, 99, 99);
  /* overflow-y: auto; */
}

.titulo {
  background-color: rgb(9, 94, 94);
  color: white;
  text-align: center;
  font-size: 1.5em;
}
.carrinho-produtos {
  background-color: cadetblue;
  min-height: 100px;
  max-height: 300px;
  overflow-y: auto;
}

.valor-carrinho {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: rgb(23, 208, 208);
}

.botoes {
  background-color: bisque;
}
</style>
