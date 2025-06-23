<template>
  <div class="carrinho">
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th>Carrinho</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="produto in retornaProdutosNoCarrinho" :key="produto.id">
          <td>{{ produto.id }}</td>
          <td>{{ produto.descricao }}</td>
          <td>{{ produto.valorUnitario }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    retornaProdutosNoCarrinho() {
      return this.$store.state.carrinho
    },
  },
}
</script>
<style scoped>
.carrinho {
  max-height: 600px;
  overflow-y: auto;
}

table {
  width: 100%;
}
</style>
