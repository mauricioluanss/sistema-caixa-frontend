<template>
  <div class="container gap-3">
    <CardProduto
      v-for="produto in produtos"
      :key="produto.id"
      :produto="produto"
      @adicionar_produto="adicionarProdutoAoCarrinho(produto)"
    >
    </CardProduto>
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
.container {
  width: 100%;
  max-height: 550px;
  overflow-y: auto;
  background-color: rgb(9, 94, 94);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  border-radius: 1em;
}
</style>
