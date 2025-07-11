<template>
  <div class="row">
    <div class="col-12">
      <div class="qtd-itens-carrinho d-flex justify-content-left align-items-center p-2 px-3">
        <i class="bi bi-cart me-2"></i>
        <span class="fw-bold ">Carrinho ({{ qtdItens }} itens)</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    qtdItens() {
      return this.$store.state.moduloCarrinho.carrinho.length
    },
  },
}
</script>

<style scoped>
.qtd-itens-carrinho {
  width: 375px;
  background-color: #F0FDF4;
  color: #166534;
  font-size: 0.9em;
  border-color: #c4e9cf;
  border-width: 0.5px;
  border-radius: 5px;
  border-style: solid;
}
</style>
