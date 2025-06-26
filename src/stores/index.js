import { createStore } from 'vuex'

export default createStore({
  state: {
    carrinho: [],
  },

  mutations: {
    ADICIONAR_PRODUTO(state, produtoAAdicionar) {
      const produtoEstaNoCarrinho = state.carrinho.find((item) => item.id === produtoAAdicionar.id)
      if (produtoEstaNoCarrinho) {
        produtoEstaNoCarrinho.quantidade++
      } else {
        state.carrinho.push({ ...produtoAAdicionar, quantidade: 1 })
      }
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
})
