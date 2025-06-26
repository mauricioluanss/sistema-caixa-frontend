<template>
  <div class="carrinho">
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th>Id</th>
          <th>Descricao</th>
          <th>Valor unitário</th>
          <th>quantidade</th>
          <th>valor total</th>
          <th>ação</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="produto in carrinho" :key="produto.id">
          <td>{{ produto.id }}</td>
          <td>{{ produto.descricao }}</td>
          <td>{{ formataPreco(produto.valorUnitario) }}</td>
          <td>{{ produto.quantidade }}</td>
          <td>{{ formataPreco(produto.valorUnitario * produto.quantidade) }}</td>
          <td><button @click="removerProdutoCarrino(produto)">Remover</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { formataPreco } from '@/utils/formatadores'

export default {
  computed: {
    carrinho() {
      return this.$store.state.carrinho
    },
  },

  methods: {
    removerProdutoCarrino(produto) {
      return this.$store.dispatch('chamaRemoverProduto', produto)
    },

    formataPreco: formataPreco,
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
