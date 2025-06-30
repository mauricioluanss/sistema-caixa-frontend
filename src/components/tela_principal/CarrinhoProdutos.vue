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
          <td>
            <BotaoGenerico @click="incrementarQuantidade(produto)">
              <IconAumentarQtd />
            </BotaoGenerico>

            <button @click="removerProdutoCarrino(produto)">Remover</button>

            <BotaoGenerico @click="decrementarOuRemover(produto)">
              <IconDiminuirQtd />
            </BotaoGenerico>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { formataPreco } from '@/utils/formatadores'
import BotaoGenerico from './BotaoGenerico.vue'
import IconAumentarQtd from '../icons/IconAumentarQtd.vue'
import IconDiminuirQtd from '../icons/IconDiminuirQtd.vue'

export default {
  components: {
    BotaoGenerico,
    IconAumentarQtd,
    IconDiminuirQtd,
  },

  computed: {
    carrinho() {
      return this.$store.state.carrinho
    },
  },

  methods: {
    removerProdutoCarrino(produto) {
      return this.$store.dispatch('chamaRemoverProduto', produto)
    },

    incrementarQuantidade(produto) {
      return this.$store.dispatch('incrementarQuantidade', produto)
    },

    decrementarOuRemover(produto) {
      return this.$store.dispatch('decrementarOuRemover', produto)
    },

    formataPreco: formataPreco,
  },
}
</script>
<style scoped>
.carrinho {
  max-height: 200px;
  overflow-y: auto;
}

table {
  width: 100%;
}
</style>
