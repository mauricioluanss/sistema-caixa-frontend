import { createStore } from 'vuex'
import moduloCarrinho from './modules/carrinho'
import moduloModalPagamento from './modules/modalPagamento'

export default createStore({
  modules: {
    moduloCarrinho: moduloCarrinho,
    moduloModal: moduloModalPagamento,
  },
})
