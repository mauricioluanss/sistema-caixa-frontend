import { createStore } from 'vuex'
import { chamaVenda } from '@/services/venda/vendaService'

export default createStore({
  state: {
    carrinho: [],
    modalPagamento: null,
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

    HABILITA_MODALPAGAMENTO(state) {
      state.modalPagamento = true
    },

    DESABILITA_MODALPAGAMENTO(state) {
      state.modalPagamento = false
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

    habilitaModalPagamento(context) {
      context.commit('HABILITA_MODALPAGAMENTO')
    },

    desabilitaModalPagamento(context) {
      context.commit('DESABILITA_MODALPAGAMENTO')
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
