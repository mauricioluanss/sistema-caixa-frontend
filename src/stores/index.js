import { createStore } from 'vuex'

export default createStore({
  state: {
    carrinho: [],
  },

  mutations: {
    ADICIONAR_PRODUTO(state, produto) {
      state.carrinho.push(produto)
    },

    REMOVER_PRODUTO(state, produtoARemover) {
      const filtro = (produto) => produto.id !== produtoARemover.id
      const carrinhoAtualizado = state.carrinho.filter(filtro)
      state.carrinho = carrinhoAtualizado
    },
  },
  actions: {
    chamaAdicionarProduto(context, produto) {
      context.commit('ADICIONAR_PRODUTO', produto)
    },

    chamaRemoverProduto(context, produto) {
      context.commit('REMOVER_PRODUTO', produto)
    },
  },
  getters: {},
})
