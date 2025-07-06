<template>
  <div class="area-carrinho">
    <div class="row">
      <div class="col-12">Carrinho - (x) itens</div>
    </div>
    <div class="row">
      <div class="col-12">
        <CarrinhoProdutos />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <ValorCarrinho />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
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
  background-color: rgb(9, 94, 94);
  border-radius: 1em;
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
}
</style>
