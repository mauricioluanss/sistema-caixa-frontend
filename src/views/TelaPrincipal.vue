<template>
  <div class="row">
    <div class="caixa d-flex flex-row justify-content-center align-items-center">

      <div class="consulta-produtos d-flex flex-column justify-content-center align-items-center mt-5">
        <ConsultaProdutos />
      </div>

      <div class="area-carrinho d-flex flex-column justify-content-center align-items-center mt-5 ">
        <AreaCarrinho />
      </div>
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
  width: 100%;
  height: 100%;
  background-color: #F3F4F6;
}

.consulta-produtos {
  height: 80%;
  width: 50%;
  border-width: 0.5px;
  border-color: #f7f7f7;
  border-radius: 20px;
  border-style: solid;
  box-shadow: 0 1px 2px 0 #d3d3d3;
}

.area-carrinho {
  height: 80%;
  width: 25%;
  max-width: 100%;
  background-color: #F3F4F6;
}
</style>
