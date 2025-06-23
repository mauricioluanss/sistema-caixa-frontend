<template>
  <div class="row">
    <div class="col-8">
      <ConsultaProdutos />
    </div>
    <div class="col-4">
      <CarrinhoProdutos />
    </div>
  </div>
</template>
<script>
import ConsultaProdutos from '@/components/ConsultaProdutos.vue'
import CarrinhoProdutos from '@/components/CarrinhoProdutos.vue'

export default {
  components: {
    ConsultaProdutos,
    CarrinhoProdutos,
  },
}
</script>
