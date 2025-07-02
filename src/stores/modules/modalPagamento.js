// store do componente ModalPagamento

const state = {
  modalPagamento: null,
}

const mutations = {
  HABILITA_MODALPAGAMENTO(state) {
    state.modalPagamento = true
  },

  DESABILITA_MODALPAGAMENTO(state) {
    state.modalPagamento = false
  },
}

const actions = {
  habilitaModalPagamento(context) {
    context.commit('HABILITA_MODALPAGAMENTO')
  },

  desabilitaModalPagamento(context) {
    context.commit('DESABILITA_MODALPAGAMENTO')
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
