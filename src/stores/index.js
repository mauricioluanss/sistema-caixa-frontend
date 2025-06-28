import { createStore } from 'vuex'
import { chamaVenda } from '@/services/venda/vendaService'

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

    LIMPA_CARRINHO(state) {
      state.carrinho = []
    },
  },

  actions: {
    chamaAdicionarProduto(context, produto) {
      context.commit('ADICIONAR_PRODUTO', produto)
    },

    chamaRemoverProduto(context, produto) {
      context.commit('REMOVER_PRODUTO', produto)
    },

    chamaLimpaCarrinho(context) {
      context.commit('LIMPA_CARRINHO')
    },

    async salvarVenda(context, payload) {
      try {
        const salvarVenda = await chamaVenda(payload)
        context.commit('LIMPA_CARRINHO')
        return salvarVenda
      } catch (error) {
        console.error('Erro na action salvarVenda', error)
        throw error
      }
    },
  },

  getters: {
    valorTotalCarrinho: (state) => {
      return state.carrinho.reduce((valorTotal, produto) => {
        const valorTotalProduto = parseFloat(produto.valorUnitario) * produto.quantidade
        return valorTotal + valorTotalProduto
      }, 0)
    },
  },
})
