<template>
  <div class="row">
    <div class="qtd-itens-carrinho col-12 d-flex justify-content-left align-items-center p-3 px-3">
      <i class="bi bi-cart me-2" />
      <span class="fw-bold">Carrinho ({{ qtdItens }} itens)</span>
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
  width: 380px;
  background-color: #f0fdf4;
  color: #166534;
  font-size: 1.4em;
  border-color: #c4e9cf;
  border-width: 0.5px;
  border-radius: 5px;
  border-style: solid;
}
</style>
