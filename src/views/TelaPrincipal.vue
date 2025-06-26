<template>
  <div class="row">
    <div class="col-6">
      <ConsultaProdutos />
    </div>
    <div class="col-4">
      <CarrinhoProdutos />
    </div>
    <div class="col-2">
      <ValorCarrinho />
    </div>
  </div>
</template>
<script>
import ConsultaProdutos from '@/components/ConsultaProdutos.vue'
import CarrinhoProdutos from '@/components/CarrinhoProdutos.vue'
import ValorCarrinho from '@/components/ValorCarrinho.vue'

export default {
  components: {
    ConsultaProdutos,
    CarrinhoProdutos,
    ValorCarrinho,
  },
}
</script>
