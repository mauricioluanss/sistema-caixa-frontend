<template>
  <div class="row">
    <div class="card text-success">
      <div class="col-12 p-2">
        <i class="bi bi-cart me-2"></i>
        <span class="fw-bold">Carrinho ({{ qtdItens }} itens)</span>
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
