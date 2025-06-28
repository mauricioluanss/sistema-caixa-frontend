<template>
  <div class="container-tabela-rolavel">
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>Descricao</th>
          <th>Preço unitário</th>
          <th>Ação</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="produto in produtos" :key="produto.id">
          <td>{{ produto.id }}</td>
          <td>{{ produto.descricao }}</td>
          <td>{{ formataPreco(produto.valorUnitario) }}</td>
          <td>
            <button @click="adicionarProdutoAoCarrinho(produto)">Adicionar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { buscaTodosProdutos } from '@/services/produto/produtoService'
import { formataPreco } from '@/utils/formatadores'

export default {
  data() {
    return {
      produtos: [],
    }
  },

  mounted() {
    this.retornaProdutos()
  },

  methods: {
    async retornaProdutos() {
      try {
        this.produtos = await buscaTodosProdutos()
      } catch (error) {
        console.error(error)
      }
    },

    adicionarProdutoAoCarrinho(produto) {
      this.$store.dispatch('chamaAdicionarProduto', produto)
    },

    formataPreco: formataPreco,
  },
}
</script>
<style scoped>
.container-tabela-rolavel {
  max-height: 200px;
  overflow-y: auto;
}

table {
  width: 100%;
}
</style>
