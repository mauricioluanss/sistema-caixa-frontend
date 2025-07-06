<template>
  <div class="row caixa">
    <div class="col-8">
      <ConsultaProdutos />
    </div>
    <div class="col-4" id="area-carrinho">
      <AreaCarrinho />
    </div>
  </div>
</template>

<script>
import ConsultaProdutos from '@/components/tela_principal/ConsultaProdutos.vue'
import AreaCarrinho from '@/components/tela_principal/AreaCarrinho.vue'

export default {
  components: {
    ConsultaProdutos,
    AreaCarrinho,
  },
}
</script>

<style scoped>
.caixa {
  display: flex;
  flex-direction: row;
}
</style>
