<template>
  <div
    class="consulta-produtos row d-flex flex-row justify-content-center align-items-start m-0 py-3 w-100 h-100 bg-light">

    <div class="produtos-disponiveis col-12 d-flex justify-content-left align-items-center p-3 px-3 bg-light">
      <i class="bi bi-box-seam me-2"></i>
      <span class="fw-bold">Produtos disponíveis</span>
    </div>

    <div class="container-produtos m-0 p-0">
      <div class="produtos col-12 p-1 gap-3 d-flex flex-wrap justify-content-center align-items-center bg-light">
        <CardProduto v-for="produto in produtos" :key="produto.id" :produto="produto"
          @adicionar_produto="adicionarProdutoAoCarrinho(produto)" />
      </div>
    </div>
  </div>
</template>

<script>
import { buscaTodosProdutos } from '@/services/produto/produtoService'
import { formataPreco } from '@/utils/formatadores'
import CardProduto from './CardProduto.vue'

export default {
  components: {
    CardProduto,
  },

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
      this.$store.dispatch('moduloCarrinho/chamaAdicionarProduto', produto)
    },

    formataPreco: formataPreco,
  },
}
</script>
<style scoped>
.produtos-disponiveis {
  width: 90%;
  color: #1E40AF;
  font-size: 1.4em;
  background-color: #EFF6FF;
  border-color: #EFF6FF;
  border-width: 0.5px;
  border-radius: 5px;
  border-style: solid;
}

.container-produtos {
  width: 95%;
  height: 600px;
  overflow-y: scroll;
}
</style>
