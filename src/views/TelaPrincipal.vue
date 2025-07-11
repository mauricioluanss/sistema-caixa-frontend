<template>
  <div class="row caixa">
    <div class="col-8 p-0">
      <ConsultaProdutos />
    </div>
    <div class="col-4 p-0 m-0" id="area-carrinho" style="width: 440px">
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
