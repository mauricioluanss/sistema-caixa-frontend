<template>
  <div class="row">
    <div class="col-8">
      <ConsultaProdutos />
    </div>
    <div class="col-4">
      <ValorCarrinho />
    </div>
  </div>

  <div class="row">
    <div class="col-8">
      <CarrinhoProdutos />
    </div>
    <div class="col-4">
      <ActionButtons />
    </div>
  </div>
</template>

<script>
import ConsultaProdutos from '@/components/tela_principal/ConsultaProdutos.vue'
import CarrinhoProdutos from '@/components/tela_principal/CarrinhoProdutos.vue'
import ValorCarrinho from '@/components/tela_principal/ValorCarrinho.vue'
import ActionButtons from '@/components/tela_principal/ActionButtons.vue'

export default {
  components: {
    ConsultaProdutos,
    CarrinhoProdutos,
    ValorCarrinho,
    ActionButtons,
  },
}
</script>
