// state do carrinho de compras

import { enviaPayload } from '@/services/venda/vendaService'

const state = {
  carrinho: [],
}

const mutations = {
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

  INCREMENTAR_QUANTIDADE(state, produto) {
    const produtoNoCarrinho = state.carrinho.find((item) => item.id === produto.id)
    if (produtoNoCarrinho) {
      produtoNoCarrinho.quantidade++
    }
  },

  DECREMENTAR_QUANTIDADE: (state, produto) => {
    const produtoNoCarrinho = state.carrinho.find((item) => item.id === produto.id)
    if (produtoNoCarrinho) {
      produtoNoCarrinho.quantidade--
    }
  },

  LIMPA_CARRINHO(state) {
    state.carrinho = []
  },
}

const actions = {
  chamaAdicionarProduto(context, produto) {
    context.commit('ADICIONAR_PRODUTO', produto)
  },

  chamaRemoverProduto(context, produto) {
    context.commit('REMOVER_PRODUTO', produto)
  },

  chamaLimpaCarrinho(context) {
    context.commit('LIMPA_CARRINHO')
  },

  incrementarQuantidade(context, produto) {
    context.commit('INCREMENTAR_QUANTIDADE', produto)
  },

  decrementarOuRemover(context, produto) {
    const produtoNoCarrinho = context.state.carrinho.find((item) => item.id === produto.id)
    if (produtoNoCarrinho.quantidade > 1) {
      context.commit('DECREMENTAR_QUANTIDADE', produto)
    } else {
      context.commit('REMOVER_PRODUTO', produto)
    }
  },

  async repassaPayload(context, payload) {
    try {
      const salvarVenda = await enviaPayload(payload)
      context.commit('LIMPA_CARRINHO')
      return salvarVenda
    } catch (error) {
      console.error('Erro na action salvarVenda', error)
      throw error
    }
  },
}

const getters = {
  valorTotalCarrinho: (state) => {
    return state.carrinho.reduce((valorTotal, produto) => {
      const valorTotalProduto = parseFloat(produto.valorUnitario) * produto.quantidade
      return valorTotal + valorTotalProduto
    }, 0)
  },
}

// exporta tudo para serem usados no modulo
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
